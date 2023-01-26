import { ChainId } from '@wagyu-swap/sdk'

import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const { MAINNET } = ChainId

export const MATIC_USDC_LP_PID = chainId === MAINNET ? 1 : 4
export const MATIC_ZOLA_LP_PID = chainId === MAINNET ? 2 : 3

const farms: SerializedFarmConfig[] =
  chainId === MAINNET
    ? [
        {
          pid: 0,
          lpSymbol: 'ZOLA',
          lpAddresses: {
            80001: '',
            137: '0x8a226293bC6f697A681B0b29f825c149655fEC2d',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.syrup,
        },
        {
          pid: 1,
          lpSymbol: 'MATIC-USDC LP',
          lpAddresses: {
            80001: '',
            137: '0x0560829c353EfCDA2F2f15bE15753340B48d44A1',
          },
          token: serializedTokens.usdc,
          quoteToken: serializedTokens.matic,
        },
        {
          pid: 2,
          lpSymbol: 'MATIC-ZOLA LP',
          lpAddresses: {
            80001: '',
            137: '0x06C93A0D54dAf0Cd3148A651cEdE3dFa18444d00',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.matic,
        },
        {
          pid: 3,
          lpSymbol: 'SHIB-LAZERMOON LP',
          lpAddresses: {
            80001: '',
            137: '0x0a73a763b1a897db8cc7d77a7db96b10d727487a',
          },
          token: serializedTokens.shib,
          quoteToken: serializedTokens.lazermoon,
        },
        {
          pid: 4,
          lpSymbol: 'MATIC-KOM LP',
          lpAddresses: {
            80001: '',
            137: '0x176cf3B3161FaB36fE6A8d18facDa391745dCd34',
          },
          token: serializedTokens.matic,
          quoteToken: serializedTokens.kom,
        },
        {
          pid: 5,
          lpSymbol: 'MATIC-GRT LP',
          lpAddresses: {
            80001: '',
            137: '0x357926e88da8434e16e3a3b951dbef5cddbd7a7f',
          },
          token: serializedTokens.grt,
          quoteToken: serializedTokens.matic,
        },
        {
          pid: 6,
          lpSymbol: 'BANANA-ZOLA LP',
          lpAddresses: {
            80001: '',
            137: '0x481db2ad06539c8b378647e866679248ddb1b350',
          },
          token: serializedTokens.banana,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 7,
          lpSymbol: 'ZOLAMO-SHIB LP',
          lpAddresses: {
            80001: '',
            137: '0x5c0593b2fd62160ee0f1679bed172ea8c2748e7f',
          },
          token: serializedTokens.zolamo,
          quoteToken: serializedTokens.shib,
        },
        {
          pid: 8,
          lpSymbol: 'ZOLA-KOM LP',
          lpAddresses: {
            80001: '',
            137: '0x64dcbe9ba04ffae0834133c2cf18163a159a34d0',
          },
          token: serializedTokens.kom,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 9,
          lpSymbol: 'SHIB-ELON LP',
          lpAddresses: {
            80001: '',
            137: '0x6ca5d03933d7c02ba0fe4d76f4579b9be3f74dc9',
          },
          token: serializedTokens.elon,
          quoteToken: serializedTokens.shib,
        },
        {
          pid: 10,
          lpSymbol: 'ZOLA-QUICK LP',
          lpAddresses: {
            80001: '',
            137: '0x747af9b21ff5ec6cbf562f77d18bbb08e5da13ee',
          },
          token: serializedTokens.quick,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 11,
          lpSymbol: 'USDC-BANANA LP',
          lpAddresses: {
            80001: '',
            137: '0x7a74669059016a587d2fa5b3c377707a551a2b45',
          },
          token: serializedTokens.banana,
          quoteToken: serializedTokens.usdc,
        },
        {
          pid: 12,
          lpSymbol: 'MATIC-SHIB LP',
          lpAddresses: {
            80001: '',
            137: '0x8871ccd78c68a73b314bcd01dcfcfa2adc66a0da',
          },
          token: serializedTokens.shib,
          quoteToken: serializedTokens.matic,
        },
        {
          pid: 13,
          lpSymbol: 'MATIC-ZOLAMO LP',
          lpAddresses: {
            80001: '',
            137: '0x8a2df6d7d3695d6e620b1e56890e70bdb25f0d95',
          },
          token: serializedTokens.zolamo,
          quoteToken: serializedTokens.matic,
        },
        {
          pid: 14,
          lpSymbol: 'ZOLA-MANA LP',
          lpAddresses: {
            80001: '',
            137: '0x8d55dcd84a9bd2afde95848faf7a00a9bbea0b9b',
          },
          token: serializedTokens.mana,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 15,
          lpSymbol: 'ZOLA-LAZERMOON LP',
          lpAddresses: {
            80001: '',
            137: '0x9fd38c0ba9b6c69545db1e265f17a4464b00062d',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.lazermoon,
        },
        {
          pid: 16,
          lpSymbol: 'SHIB-ZOLA LP',
          lpAddresses: {
            80001: '',
            137: '0xa65bc835a3087f3f646914f14cfdeb55b6dfcd58',
          },
          token: serializedTokens.shib,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 17,
          lpSymbol: 'ZOLA-DAI LP',
          lpAddresses: {
            80001: '',
            137: '0xb4ee217f4b37ca079f654bcf3da1b6e76bfbe01e',
          },
          token: serializedTokens.dai,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 18,
          lpSymbol: 'ZOLA-LUNA LP',
          lpAddresses: {
            80001: '',
            137: '0xc44582cd763d8a38a8abdcdcb5c7aff77debcb22',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.luna,
        },
        {
          pid: 19,
          lpSymbol: 'MATIC-MANA LP',
          lpAddresses: {
            80001: '',
            137: '0xc7283b4dac72bbb7754cf61359ea9d253ef7b73b',
          },
          token: serializedTokens.matic,
          quoteToken: serializedTokens.mana,
        },
        {
          pid: 20,
          lpSymbol: 'MATIC-WBTC LP',
          lpAddresses: {
            80001: '',
            137: '0xd324191782ba5e37afd262c08d67997fc6ffe70d',
          },
          token: serializedTokens.wbtc,
          quoteToken: serializedTokens.matic,
        },
        {
          pid: 21,
          lpSymbol: 'MATIC-QUICK LP',
          lpAddresses: {
            80001: '',
            137: '0xe2ee5a6738ce4ac42c94433d4cbae764b6fc7d09',
          },
          token: serializedTokens.matic,
          quoteToken: serializedTokens.quick,
        },
        {
          pid: 22,
          lpSymbol: 'MATIC-ELON LP',
          lpAddresses: {
            80001: '',
            137: '0xf0ce4c5150c2bf1f36582f7375075e1ffae1245c',
          },
          token: serializedTokens.elon,
          quoteToken: serializedTokens.matic,
        },
        {
          pid: 23,
          lpSymbol: 'ZOLA-USDT LP',
          lpAddresses: {
            80001: '',
            137: '0xf72088149604e36a745f4d76fab03fd3ac39dcdc',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.usdt,
        },
        {
          pid: 24,
          lpSymbol: 'MATIC-LAZERMOON LP',
          lpAddresses: {
            80001: '',
            137: '0xffb233ca5c6afcfedb9292080e6a45ed1c997a75',
          },
          token: serializedTokens.matic,
          quoteToken: serializedTokens.lazermoon,
        },
         {
          pid: 25,
          lpSymbol: 'MATIC-SKILYNE LP',
          lpAddresses: {
            80001: '',
            137: '0x7ddC0E80eBA600DbF15B1e80a008d2Eb2053B024',
          },
          token: serializedTokens.matic,
          quoteToken: serializedTokens.skilyne,
        },
      ]
    : [
        /**
         * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
         */
        {
          pid: 0,
          lpSymbol: 'ZOLA',
          lpAddresses: {
            80001: '',
            137: '0xDA5B294F6a8Af4236F853D17d33ba584D7787f10',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 251,
          lpSymbol: 'MATIC-ZOLA LP',
          lpAddresses: {
            80001: '',
            137: '0x06C93A0D54dAf0Cd3148A651cEdE3dFa18444d00',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.matic,
        },
        {
          pid: 252,
          lpSymbol: 'MATIC-USDC LP',
          lpAddresses: {
            80001: '',
            137: '0x0560829c353EfCDA2F2f15bE15753340B48d44A1',
          },
          token: serializedTokens.usdc,
          quoteToken: serializedTokens.matic,
        },
        {
          pid: 1,
          lpSymbol: 'MATIC-QUICK LP',
          lpAddresses: {
            80001: '',
            137: '0x8a226293bC6f697A681B0b29f825c149655fEC2d',
          },
          token: serializedTokens.quick,
          quoteToken: serializedTokens.matic,
        },
        {
          pid: 3,
          lpSymbol: 'MATIC-ZOLA LP',
          lpAddresses: {
            80001: '',
            137: '0x06C93A0D54dAf0Cd3148A651cEdE3dFa18444d00',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.matic,
        },
        {
          pid: 4,
          lpSymbol: 'MATIC-ZOLAMO LP',
          lpAddresses: {
            80001: '',
            137: '0x8a2Df6D7d3695D6E620B1E56890e70Bdb25F0D95',
          },
          token: serializedTokens.matic,
          quoteToken: serializedTokens.zolamo,
        },
      ]

export default farms

/*
"MATIC_TE6_LP": {
        "pair": "0x04394d1d07F24C30d82D06097301Da1f9732E54f",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x24f1a66765601999c853136611f5AC999Ca77F50"
    },
    "MATIC_TE9_LP": {
        "pair": "0x3124E72d06f181a225e9E587C1ca4Da5E905Bd37",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0xb8075860b634c367dA432a8Bc84ad1556AB19679"
    },
    "MATIC_TE12_LP": {
        "pair": "0xBBf16449Aa3D7cd988810bf966982f68d1154023",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x660F4DfEe75a28525DdB7916556418CDc9b329D3"
    },
    "MATIC_TE18_LP": {
        "pair": "0x4522640cF08B6acba90dDA9D4e6Ae3003b4e0ED7",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0xE76592830037d81e1cD5A49d912e8BFf029901Be"
    },
    "MATIC_ETH_LP": {
        "pair": "0x2537C7D256D7aec0f41BEf15C93Ec269D263F772",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x3538C7f88aDbc8ad1F435f7EA70287e26b926344"
    },
    "MATIC_USDT_LP": {
        "pair": "0x681Ce22f568720eeFA34548d360c94721aCE1A50",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x6Ef054B3E3C3C83E14527E8fa593c2c4435A6ea4"
    },
    "MATIC_USDC_LP": {
        "pair": "0xe29d45F71C3132391dFD0F92e54fcA74DE37c45A",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x6b82bDB5a1AdFfa3816D1F942D60f0269647C646"
    },
    "MATIC_BUSD_LP": {
        "pair": "0x02d14903A8423027643e185ae0277D1d09e22497",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0xe2172a8E1762ae9962A59EE88a731522A61a4cc9"
    },
    "MATIC_ZOLA_LP": {
        "pair": "0x518F4Fea9084D981f5faA63F7b549eC922333e54",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x1bC60cFc522A264639866D47C634EfCdddd624eA"
    }
*/
