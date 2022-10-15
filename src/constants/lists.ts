// the Uniswap Default token list lives here
// export const DEFAULT_TOKEN_LIST_URL = 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json'
// export const DEFAULT_TOKEN_LIST_URL = 'https://tokens.pancakeswap.finance/pancakeswap-extended.json'
export const DEFAULT_TOKEN_LIST_URL =
  // 'https://raw.githubusercontent.com/EOTCotc/ListTokens/main/bscTokenLists/eotcswap.json'
  'https://raw.githubusercontent.com/XJ525/ListTokens/main/bscTokenLists/eotcswap.json'
export const DEFAULT_LIST_OF_LISTS: string[] = [
  DEFAULT_TOKEN_LIST_URL,
  // 't2crtokens.eth', // kleros
  // 'tokens.1inch.eth', // 1inch
  // 'synths.snx.eth',
  // 'tokenlist.dharma.eth',
  // 'defi.cmc.eth',
  // 'erc20.cmc.eth',
  // 'stablecoin.cmc.eth',
  // 'tokenlist.zerion.eth',
  // 'tokenlist.aave.eth',
  // 'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
  // 'https://app.tryroll.com/tokens.json',
  // 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
  // 'https://defiprime.com/defiprime.tokenlist.json',
  //  'https://umaproject.org/uma.tokenlist.json'
  //  'https://tokens.pancakeswap.finance/coingecko.json'
  //  'https://tokens.pancakeswap.finance/cmc.json'
  'https://tokens.pancakeswap.finance/pancakeswap-extended.json',
  'https://static.optimism.io/optimism.tokenlist.json'
]
export const OPTIMISM_LIST = 'https://static.optimism.io/optimism.tokenlist.json'
export const ARBITRUM_LIST = 'https://bridge.arbitrum.io/token-list-42161.json'
export const CELO_LIST = 'https://celo-org.github.io/celo-token-list/celo.tokenlist.json'
