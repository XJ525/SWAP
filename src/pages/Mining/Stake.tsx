import React, { useState, useContext, useMemo, useCallback } from 'react'
import { RowBetween } from '../../components/Row'
import styled, { ThemeContext } from 'styled-components'
import { ActionSheet, Toast } from 'react-vant'
import Header from './Header'
import { ClickableText } from '../Pool/styleds'
import { Text } from 'rebass'
import { ButtonConfirmed } from '../../components/Button'
import { Input as NumericalInput } from '../../components/NumericalInput'
import { RadioCycle, RecordLink, APY_LIST } from './index'
import { useActiveWeb3React } from '../../hooks'
import { tryParseAmount } from '../../state/swap/hooks'
import { BodyMining, Box, BoxSB, MaxButton, BoxInput } from './styleds'
import { stake as stakeApi } from '../../services'
import { useStakeCallback } from '../../hooks/useStakeCallback'
import { CHAIN_IDS_TO_NAMES } from '../../constants/chains'
import { useGetLpTokenBalance } from './hook'
import { useTranslation } from 'react-i18next'
import { LpTokenPoolV2ADDRESS } from '../../constants/LpTokenPoolV2ADDRESS'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import Loader from '../../components/Loader'
const LoadingButton = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
`
export default function Stake() {
  const theme = useContext(ThemeContext)
  const { t } = useTranslation()
  const { account, chainId } = useActiveWeb3React()
  const [selectedDate, setSelectedDate] = useState(6)
  const [visible, setVisible] = useState(false)
  // const to = '0xdCAaB3E9Ade1000fd23Fa0EAcd2D7E1359300D8B'
  const { userPoolBalance, LpTonke, LPTOKEN_ADDRESS } = useGetLpTokenBalance()
  const [lpInput, setLpInput] = useState('')
  const MIN_STAKE = '100'
  const amount = tryParseAmount(lpInput, LpTonke)
  const buttonError = useMemo(() => {
    if (!amount) return t('input')
    if (userPoolBalance?.lessThan(amount)) return t('insufficientBalance')
    if (amount.lessThan(MIN_STAKE)) return t('text10', { amount: MIN_STAKE })
    return ''
  }, [amount, t, userPoolBalance])

  const actions: { name: string; value: string }[] = [
    { name: '100 LP', value: '100' },
    { name: '1000 LP', value: '1000' },
    { name: '5000 LP', value: '5000' },
    { name: '10000 LP', value: '10000' },
    { name: '50000 LP', value: '50000' }
  ]
  const [approval, approveCallback] = useApproveCallback(amount, chainId ? LpTokenPoolV2ADDRESS[chainId] : undefined)
  const [approvalSubmitted] = useState<boolean>(false)
  const showApprove =
    approval === ApprovalState.NOT_APPROVED ||
    approval === ApprovalState.PENDING ||
    (approvalSubmitted && approval === ApprovalState.APPROVED)
  const { callback: stakeCallback, error: swapCallbackError } = useStakeCallback({
    amount,
    lpTokenAddress: LPTOKEN_ADDRESS,
    investType: selectedDate
  })
  const handleStake = useCallback(() => {
    if (!stakeCallback) return
    if (!amount) return
    if (!account) return
    stakeCallback()
      .then(async hash => {
        console.log(hash, 'hash')
        // console.log(hash.hash)
        await stakeApi({
          net: CHAIN_IDS_TO_NAMES[chainId as number]?.toLowerCase(), // 网络类型 bsc trx
          ads: account, // 钱包地址
          hx: hash, // 交易哈希
          num: amount.toExact(), // 交易数量,精度6位
          cycle: selectedDate + '' // 交易周期
        })
        console.log(swapCallbackError)
      })
      .catch(error => {
        console.log(error.message)
        Toast.fail(error.message)
      })
  }, [account, amount, chainId, selectedDate, stakeCallback, swapCallbackError])
  return (
    <>
      <Header active={'stake'} />
      <BodyMining>
        <RadioCycle selectedDate={selectedDate} setSelectedDate={setSelectedDate}></RadioCycle>
        <Box mt="20px">
          <RowBetween align="center">
            <BoxSB>
              <ClickableText fontWeight={400} fontSize={16} color={'#818DA8'}>
                {t('APY')}
              </ClickableText>
              <Text fontWeight={'bold'} style={{ marginLeft: '10px' }} color={'#E6B37C'}>
                {APY_LIST[selectedDate] * 100 + '%'}
              </Text>
            </BoxSB>
            <RecordLink></RecordLink>
          </RowBetween>
        </Box>
        <Box mt="33px">
          <BoxSB>
            <ClickableText fontWeight={400} fontSize={16} color={theme.text1}>
              {t('stake')} LP (LP: {userPoolBalance ? userPoolBalance.toSignificant(4) : '-'})
            </ClickableText>
            <MaxButton
              onClick={() => {
                userPoolBalance && userPoolBalance.greaterThan(MIN_STAKE)
                  ? setLpInput(userPoolBalance.toExact() ?? '')
                  : Toast.fail({ message: t('text10', { amount: MIN_STAKE }) })
              }}
            >
              <Text fontWeight={'bold'} fontSize={14} color={'#7B7D8A'}>
                {t('max')}
              </Text>
            </MaxButton>
          </BoxSB>
        </Box>
        <Box mt="25px">
          <BoxInput>
            <RowBetween>
              <NumericalInput
                placeholder={t('text8', { amount: 100 })}
                value={lpInput}
                onUserInput={val => setLpInput(val)}
              />
              <Text
                onClick={() => {
                  setVisible(true)
                }}
                fontWeight={'bold'}
                fontSize={14}
                color={'#247FF7'}
              >
                {t('selectInterval')}
              </Text>
            </RowBetween>
          </BoxInput>
        </Box>
        <Box mt="20px">
          <RowBetween style={!showApprove ? { justifyContent: 'center' } : {}}>
            {showApprove && (
              <ButtonConfirmed
                onClick={approveCallback}
                disabled={approval !== ApprovalState.NOT_APPROVED || approvalSubmitted}
                width="48%"
                altDisabledStyle={approval === ApprovalState.PENDING} // show solid button while waiting
                confirmed={approval === ApprovalState.APPROVED}
              >
                <Text fontSize={16} fontWeight={500}>
                  {approval === ApprovalState.PENDING ? (
                    <LoadingButton>
                      {t('approval')} <Loader stroke="white" />
                    </LoadingButton>
                  ) : approvalSubmitted && approval === ApprovalState.APPROVED ? (
                    t('allowed')
                  ) : (
                    t('approval')
                  )}
                </Text>
              </ButtonConfirmed>
            )}

            <ButtonConfirmed
              onClick={handleStake}
              disabled={buttonError || showApprove}
              width={showApprove ? '48%' : '100%'}
            >
              <Text fontSize={16} fontWeight={500}>
                {buttonError || t('stake')}{' '}
              </Text>
            </ButtonConfirmed>
          </RowBetween>
        </Box>
        <ActionSheet
          title={t('stakeInterval')}
          cancelText={t('cancel')}
          visible={visible}
          onCancel={() => setVisible(false)}
          onSelect={(action: any) => {
            setVisible(false)
            return setLpInput(action.value)
          }}
          actions={actions}
        />
      </BodyMining>
      <Box mt="15px">
        <BodyMining>
          <Text fontWeight={400} fontSize={14} color={'#818DA8'}>
            {t('text9')}
          </Text>
        </BodyMining>
      </Box>
    </>
  )
}
