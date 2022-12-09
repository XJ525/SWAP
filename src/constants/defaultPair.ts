import { SupportedChainId } from './chains'
export const DefaultPair: { [key in SupportedChainId]: { inputCurrencyId: string; outputCurrencyId: string } } = {
  [SupportedChainId.MAINNET]: {
    inputCurrencyId: 'ETH',
    outputCurrencyId: '0xdAC17F958D2ee523a2206206994597C13D831ec7' //USDT
  },
  [SupportedChainId.ROPSTEN]: { inputCurrencyId: 'ETH', outputCurrencyId: '' },
  [SupportedChainId.RINKEBY]: { inputCurrencyId: 'ETH', outputCurrencyId: '' },
  [SupportedChainId.GOERLI]: { inputCurrencyId: 'ETH', outputCurrencyId: '' },
  [SupportedChainId.KOVAN]: { inputCurrencyId: 'ETH', outputCurrencyId: '' },
  [SupportedChainId.POLYGON]: {
    inputCurrencyId: 'ETH',
    outputCurrencyId: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
  },
  [SupportedChainId.POLYGON_MUMBAI]: { inputCurrencyId: 'ETH', outputCurrencyId: '' },
  [SupportedChainId.CELO]: { inputCurrencyId: 'ETH', outputCurrencyId: '' },
  [SupportedChainId.CELO_ALFAJORES]: { inputCurrencyId: 'ETH', outputCurrencyId: '' },
  [SupportedChainId.ARBITRUM_ONE]: {
    inputCurrencyId: 'ETH',
    outputCurrencyId: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9'
  },
  [SupportedChainId.ARBITRUM_RINKEBY]: { inputCurrencyId: 'ETH', outputCurrencyId: '' },
  [SupportedChainId.OPTIMISM]: {
    inputCurrencyId: 'ETH',
    outputCurrencyId: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58'
  },
  [SupportedChainId.OPTIMISTIC_KOVAN]: { inputCurrencyId: 'ETH', outputCurrencyId: '' },
  [SupportedChainId.BSC]: {
    inputCurrencyId: '0x55d398326f99059fF775485246999027B3197955',
    outputCurrencyId: '0x52445374E55a63C0De647445D5B6a4244702980C'
  },
  [SupportedChainId.OKEXCHAIN]: {
    inputCurrencyId: 'ETH',
    outputCurrencyId: '0x382bb369d343125bfb2117af9c149795c6c65c50'
  },
  [SupportedChainId.HUOBI]: {
    inputCurrencyId: 'ETH',
    outputCurrencyId: '0xa71EdC38d189767582C38A3145b5873052c3e47a'
  },
  [SupportedChainId.GNOSIS]: {
    inputCurrencyId: 'ETH',
    outputCurrencyId: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6'
  },
  [SupportedChainId.AVALANCHE]: {
    inputCurrencyId: 'ETH',
    outputCurrencyId: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7'
  },
  [SupportedChainId.FANTOM]: {
    inputCurrencyId: 'ETH',
    outputCurrencyId: '0x049d68029688eAbF473097a2fC38ef61633A3C7A'
  },
  [SupportedChainId.KLAYTN]: {
    inputCurrencyId: 'ETH',
    outputCurrencyId: '0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167'
  },
  [SupportedChainId.AURORA]: {
    inputCurrencyId: 'ETH',
    outputCurrencyId: '0x4988a896b1227218e4A686fdE5EabdcAbd91571f'
  }
}
