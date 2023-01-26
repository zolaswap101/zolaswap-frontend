import { ChainId } from '@wagyu-swap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://polygon-rpc.com/',
  // [ChainId.MAINNET]: 'https://wag.mainnet.veladev.net/rpc',
  [ChainId.TESTNET]: 'https://matic-mumbai.chainstacklabs.com',
}

export default NETWORK_URLS
