import React, { useState } from 'react'
import { ButtonUnStake as _ButtonUnStake } from './styleds'
// import { unstake } from '../../services'
import { useActiveWeb3React } from '../../hooks'
import Loader from '../../components/Loader'
import { Toast } from 'react-vant'
import { useLpTokenPoolV2Contract } from '../../hooks/useContract'
import { LpTokenList } from '../../constants/lpTokenList'
import { useTranslation } from 'react-i18next'
import { useTransactionAdder } from '../../state/transactions/hooks'

export function ButtonUnStake({
  id,
  delSetUnstakeData,
  children,
  cycle,
  num
}: {
  id: string
  delSetUnstakeData: any
  cycle: string
  num: string
  children?: React.ReactNode
}) {
  const [loading, setLoading] = useState(false)
  const { account, chainId } = useActiveWeb3React()
  const { t } = useTranslation()
  const addTransaction = useTransactionAdder()
  const contract = useLpTokenPoolV2Contract(true)
  function handleUnStake() {
    setLoading(true)
    if (account && chainId) {
      contract
        ?.withdraw(LpTokenList[chainId], id, cycle)
        .then((response: any) => {
          console.log(response)
          const base = `赎回 ${num} EOTC-USDT LP`
          delSetUnstakeData(id)
          addTransaction(response, {
            summary: base
          })

          return response.hash
        })
        .catch((error: any) => {
          // if the user rejected the tx, pass this along
          if (error?.code === 4001) {
            // throw new Error(t('text20'))
            Toast.fail(t('text20'))
          } else {
            console.log(error, 'error')
            console.error(`赎回失败`, error, 'error')
            Toast.fail('赎回失败')
            // throw new Error(`赎回失败: ${error.message}`)
          }
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }
  return (
    <_ButtonUnStake
      onClick={() => {
        handleUnStake()
      }}
    >
      {children}
      {loading && <Loader stroke="white" />}
    </_ButtonUnStake>
  )
}
