import { Currency /**Currency.ETHER**/, Token } from 'eotc-bscswap-sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'

import EthereumLogo from '../../assets/images/ethereum-logo.png'
// import EthereumLogo from '../../assets/images/bnb.png'
// import EotcLogo from '../../assets/images/eotclogo.png'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'
import { getChainInfo } from '../../constants/chainInfo'
import { useWeb3React } from '@web3-react/core'
// const getTokenLogoURL = (address: string) =>
//   // `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`
//   `https://raw.githubusercontent.com/xiaoMocygz/ListTokens/bscImg/img/${address}/logo.png`
// // `https://raw.githubusercontent.com/EOTCotc/ListTokens/main/img/eotc.png`
const getTokenLogoURL1 = (address: string, chainName: string) =>
  `https://raw.githubusercontent.com/XJ525/assets/master/blockchains/${chainName}/assets/${address.toLowerCase()}/logo.png`
import { logoUrlKey } from '../../constants/logoUrlKey'
const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)
  const { chainId } = useWeb3React()
  const srcs: string[] = useMemo(() => {
    if (currency === Currency.ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL1(currency.address, logoUrlKey[chainId as number])]
      }

      return [getTokenLogoURL1(currency.address, logoUrlKey[chainId as number])]
    }
    return []
  }, [chainId, currency, uriLocations])
  console.log('srcs', srcs)

  if (currency === Currency.ETHER) {
    const isETH = currency?.symbol?.toUpperCase() === 'ETH'
    return (
      <StyledEthereumLogo
        src={isETH ? EthereumLogo : getChainInfo(chainId)?.circleLogoUrl || getChainInfo(chainId)?.logoUrl}
        size={size}
        style={style}
      />
    )
  }

  return (
    <>
      {/* <img src={EotcLogo} style={{width:'24px',height:'24px'}} alt=""/> */}
      <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
    </>
  )
}
