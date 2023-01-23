import { ChainId } from '@wagyu-swap/sdk'
import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const { MAINNET } = ChainId

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] =
  chainId === MAINNET
    ? [
        {
          sousId: 0,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.cake,
          contractAddress: {
            80001: '0x0FE7711dD2A622725FfB30f378145e1D40127f80',
            137: '0xa7e8280b8CE4f87dFeFc3d1F2254B5CCD971E852',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '3.25',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 2,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.scar,
          contractAddress: {
            80001: '',
            137: '0x9907B73574245fF0e538C49088B522b5f004FDEf',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.064',
          sortOrder: 2,
          isFinished: true,
        },
        {
          sousId: 3,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.astro,
          contractAddress: {
            80001: '',
            137: '0xA0e9F28837325f5718AFE497e0B73fDDE99c3dA9',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.13',
          sortOrder: 3,
          isFinished: true,
        },
        {
          sousId: 4,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.swapz,
          contractAddress: {
            80001: '',
            137: '0xd6E00EA52eb7bdb5E15A8445Ea7e25c70Dc763a4',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.1286',
          sortOrder: 4,
          isFinished: true,
        },
        {
          sousId: 5,
          stakingToken: serializedTokens.swapz,
          earningToken: serializedTokens.swapz,
          contractAddress: {
            80001: '',
            137: '0x0b7c46E1f729972499a9Ab45D307101198Ab9BA9',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.239',
          sortOrder: 4,
          isFinished: false,
        },
        {
          sousId: 6,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.vdgt,
          contractAddress: {
            80001: '',
            137: '0xbedeBB4c7D336E6E5e5B8685d33Fb3bbfebc4B6B',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.317',
          sortOrder: 5,
          isFinished: false,
        },
        {
          sousId: 7,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.wvlx,
          contractAddress: {
            80001: '',
            137: '0xe68a572CEc1C021d8a13DbDd0bDBCFEdc8F1901f',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.03145',
          sortOrder: 6,
          isFinished: true,
        },
        {
          sousId: 8,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.vlxpad,
          contractAddress: {
            80001: '',
            137: '0x2ABe5242d36E3A0f643EF4748d35Bd8B7FC56C5d',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.0629',
          sortOrder: 7,
          isFinished: true,
        },
      ]
    : [
        {
          sousId: 0,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.cake,
          contractAddress: {
            80001: '0x0FE7711dD2A622725FfB30f378145e1D40127f80',
            137: '0xa7e8280b8CE4f87dFeFc3d1F2254B5CCD971E852',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '1.3',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 1,
          stakingToken: serializedTokens.te6,
          earningToken: serializedTokens.cake,
          contractAddress: {
            80001: '0x77e631209Cc3151c2835fF2B7585d8f0Db781aff',
            137: '0x77e631209Cc3151c2835fF2B7585d8f0Db781aff',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '1',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 2,
          stakingToken: serializedTokens.te9,
          earningToken: serializedTokens.cake,
          contractAddress: {
            80001: '0xf4BB219600ad1680cA381331bF9ADd4422844BcC',
            137: '0xf4BB219600ad1680cA381331bF9ADd4422844BcC',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '1',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 3,
          stakingToken: serializedTokens.te12,
          earningToken: serializedTokens.cake,
          contractAddress: {
            80001: '0x98a6816Cd29F063Fe3c1ECA3492Bb2D5E36f467a',
            137: '0x98a6816Cd29F063Fe3c1ECA3492Bb2D5E36f467a',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '1',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 4,
          stakingToken: serializedTokens.te18,
          earningToken: serializedTokens.cake,
          contractAddress: {
            80001: '0xccE4829D6D2c04A006F774968bc41d1d2fe714cB',
            137: '0xccE4829D6D2c04A006F774968bc41d1d2fe714cB',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '1',
          sortOrder: 1,
          isFinished: false,
        },
      ]

export default pools
