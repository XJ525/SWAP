import { ChainId } from 'eotc-bscswap-sdk'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'

import styled from 'styled-components'

import Logo from '../../assets/svg/logo2.svg'
import LogoDark from '../../assets/svg/logo2.svg'
// import Wordmark from '../../assets/svg/wordmark.svg'
// import WordmarkDark from '../../assets/svg/wordmark_white.svg'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import { useETHBalances } from '../../state/wallet/hooks'
import NetworkSelector from './NetworkSelector'
import { YellowCard } from '../Card'
import Settings from '../Settings'
import Menu from '../Menu'

import Row from '../Row'
import Web3Status from '../Web3Status'
import VersionSwitch from './VersionSwitch'
import { getChainInfo } from '../../constants/chainInfo'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    // margin-top: 0.5rem;
`};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`

const TitleText = styled(Row)`
  width: fit-content;
  white-space: nowrap;
  font-size: 24px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
  margin-right: 10px;
  :hover {
    transform: rotate(-5deg);
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`

    img { 
      width: 1.8rem;
      // position: absolute;
      left: 50%;
      // transform: translateX(-50%);
      top: 28px;
      pointer-events:none;
    }
  `};
`
const RowBetweenHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1rem 0 1rem;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    align-items: center;
  `};
`
const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    // flex-direction: column;
    // align-items: flex-end;
    // margin-top: 50px
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`
// ChainId.BSC是在sdk中添加的， 对应的值Bsc只是一个展示
const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: null,
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TSET]: 'BSC_TSET',
  [ChainId.MATIC]: 'MATIC'
}

export default function Header() {
  const { account, chainId } = useActiveWeb3React()
  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  const [isDark] = useDarkModeManager()
  const nativeCurrency = getChainInfo(chainId)?.nativeCurrency
  return (
    <HeaderFrame>
      <RowBetweenHeader>
        <HeaderElement>
          <Title href=".">
            <UniIcon>
              <img src={isDark ? Logo : LogoDark} alt="logo" />
            </UniIcon>
            <TitleText>
              {/* <img style={{ marginLeft: '4px', marginTop: '4px' }} src={isDark ? Wordmark : WordmarkDark} alt="logo" /> */}
              <span style={isDark ? { color: 'black' } : { color: 'white' }}> EOTC</span>
            </TitleText>
          </Title>
        </HeaderElement>
        <HeaderControls>
          <HeaderElement>
            <NetworkSelector />
          </HeaderElement>

          {!isMobile && (
            <HeaderElement>
              {/* <TestnetWrapper>
                {!isMobile && chainId && NETWORK_LABELS[chainId] && (
                  <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>
                )}
              </TestnetWrapper> */}
              <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
                {account && userEthBalance ? (
                  <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                    {userEthBalance?.toSignificant(4)} {nativeCurrency?.symbol}
                    {/* {userEthBalance?.toSignificant(4)} ETH */}
                  </BalanceText>
                ) : null}
                <Web3Status />
              </AccountElement>
            </HeaderElement>
          )}

          <HeaderElementWrap>
            <VersionSwitch />
            <Settings />
            <Menu />
          </HeaderElementWrap>
        </HeaderControls>
      </RowBetweenHeader>
      {isMobile && (
        <RowBetweenHeader style={{ justifyContent: 'flex-end' }}>
          <HeaderElement>
            <TestnetWrapper>
              {!isMobile && chainId && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
            </TestnetWrapper>
            <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
              {account && userEthBalance ? (
                <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                  {userEthBalance?.toSignificant(4)} {nativeCurrency?.symbol}
                  {/* {userEthBalance?.toSignificant(4)} ETH */}
                </BalanceText>
              ) : null}
              <Web3Status />
            </AccountElement>
          </HeaderElement>
        </RowBetweenHeader>
      )}
    </HeaderFrame>
  )
}
