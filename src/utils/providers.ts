import { ethers } from 'ethers'
import getRpcUrl from 'utils/getRpcUrl'

const RPC_URL = getRpcUrl()

// export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(
//   RPC_URL,
//   parseInt(process.env.REACT_APP_CHAIN_ID, 10),
// )

export const simpleRpcProvider = new ethers.providers.StaticJsonRpcProvider(
  RPC_URL,
  parseInt(process.env.REACT_APP_CHAIN_ID, 10),
)

export default null
