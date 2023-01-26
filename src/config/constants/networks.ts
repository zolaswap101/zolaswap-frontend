import { ChainId } from '@wagyu-swap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://polygon-rpc.com/',
  // [ChainId.MAINNET]: 'https://polygon-rpc.com/',
  [ChainId.TESTNET]: 'https://traces-api.testnet.veladev.net/bridges',
}

export default NETWORK_URLS
