import { ChainId } from '@wagyu-swap/sdk'

const getTokenLogoURL = (address: string) => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  return `https://github.com/mrandall101/assets/blob/master/blockchains/polygon/assets/${address}/logo.png?raw=true`
}

export default getTokenLogoURL
