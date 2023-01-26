import { ChainId, Token } from '@wagyu-swap/sdk'
import { serializeToken } from '../../state/user/hooks/helpers'
import { SerializedToken } from './types'
import addresses from './addresses.json'

const { MAINNET, TESTNET } = ChainId

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  wmatic: new Token(MAINNET, addresses[137].WMATIC, 18, 'WMATIC', 'Wrapped MATIC', 'https://zolaswap.finance/'),
  lazermoon: new Token(
    MAINNET,
    addresses[137].LAZERMOON,
    18,
    'LAZERMOON',
    'Lazermoon token',
    'https://lazermoon.finance/',
  ),
  matic: new Token(
    MAINNET,
    '0x0000000000000000000000000000000000001010',
    18,
    'MATIC',
    'MATIC',
    'https://polygontechnology.com/',
  ),
  aave: new Token(
    MAINNET,
    '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
    18,
    'AAVE',
    'AAVE Token',
    'https://aave.finance/',
  ),
  shib: new Token(
    MAINNET,
    '0x6f8a06447Ff6FcF75d803135a7de15CE88C1d4ec',
    18,
    'SHIB',
    'Shiba Inu',
    'https://shibainu.finance/',
  ),
  bnb: new Token(MAINNET, '0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3', 18, 'BNB', 'BNB', 'https://binance.com'),
  zolamo: new Token(
    MAINNET,
    '0x108FD4c11d4a2A9a61ED420Ad21A198A6db5E100',
    9,
    'ZOLAMO',
    'Zolamo',
    'https://zolaswap.finance/',
  ),
  elon: new Token(
    MAINNET,
    '0xE0339c80fFDE91F3e20494Df88d4206D86024cdF',
    18,
    'ELON',
    'Elon',
    'https://zolaswap.finance',
  ),
  cake: new Token(
    MAINNET,
    '0x8a226293bC6f697A681B0b29f825c149655fEC2d',
    18,
    'ZOLA',
    'Zola Token',
    'https://zolaswap.finance/',
  ),
  usdc: new Token(MAINNET, '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', 18, 'USDC', 'USDC Token', 'https://centre.io'),
  quick: new Token(MAINNET, '0xB5C064F955D8e7F38fE0460C556a72987494eE17', 18, 'QUICK', 'https://quickswap.exchange/'),
  banana: new Token(MAINNET, '0x5d47bAbA0d66083C52009271faF3F50DCc01023C', 18, 'BANANA', 'https://apeswap.finance/'),
  usdt: new Token(MAINNET, '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', 18, 'USDT', 'https://mapper.matic.today/'),
  kom: new Token(MAINNET, '0xC004e2318722EA2b15499D6375905d75Ee5390B8', 8, 'KOM', 'https://www.kommunitas.net/'),
  luna: new Token(MAINNET, '0x24834BBEc7E39ef42f4a75EAF8E5B6486d3F0e57', 18, 'LUNA', 'https://zolaswap.finance/'),
  wbtc: new Token(MAINNET, '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6', 8, 'WBTC', 'https://zolaswap.finance/'),
  mana: new Token(MAINNET, '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4', 18, 'MANA', 'https://decentraland.org/'),
  dai: new Token(MAINNET, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'https://makerdao.com/'),
  grt: new Token(MAINNET, '0x5fe2B58c013d7601147DcdD68C143A77499f5531', 18, 'GRT', 'https://thegraph.com/'),
  syrup: new Token(MAINNET, addresses[137].ZOLAStake, 18, 'Syrup', 'Syrup Token', 'https://zolaswap.finance/'),
  skilyne: new Token(MAINNET, addresses[137].SKILYNEToken, 18, 'SKILYNE', 'SkiLyne Token', 'https://zolaswap.finance/'),
  gorydz: new Token(MAINNET, addresses[137].GORydzToken, 18, 'GORYDZ', 'GORydz Token', 'https://zolaswap.finance/'),
}

export const testnetTokens = {
  wmatic: new Token(
    TESTNET,
    '0xce2babFcb073bd638C8c63e7b59EDa23d1F15c3b',
    18,
    'WMATIC',
    'Wrapped MATIC',
    'https://zolaswap.finance/',
  ),
  cake: new Token(
    TESTNET,
    '0x4fAa02Adb061EC84666E301C3Cbf02CF0EA5D089',
    18,
    'ZOLA',
    'ZOLA Token',
    'https://zolaswap.finance/',
  ),
}

const tokens = (): TokenList => {
  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (chainId === ChainId.TESTNET) {
    // return Object.keys(mainnetTokens).reduce((accum, key) => {
    //   return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    // }, {})
    return Object.keys(testnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
