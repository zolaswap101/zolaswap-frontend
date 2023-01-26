import addresses from './addresses.json'

export default {
  masterChef: {
    80001: addresses[80001].ZOLAFarm,
    137: addresses[137].ZOLAFarm,
  },
  sousChef: {
    8001: addresses[80001].ZOLAStakingFactory,
    137: addresses[137].ZOLAStakingFactory,
  },
  lotteryV2: {
    137: addresses[137].ZolaSwapLottery,
    80001: '',
  },
  multiCall: {
    80001: addresses[80001].Multicall2,
    137: addresses[137].Multicall2,
  },
  // not
  pancakeProfile: {
    8001: '0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a',
    137: '0x4B683C7E13B6d5D7fd1FeA9530F451954c1A7c8A',
  },
  //
  pancakeRabbits: {
    137: '0xDf7952B35f24aCF7fC0487D01c8d10690a60DBa07',
    80001: '0x60935F36e4631F73f0f407e68642144e07aC7f5E',
  },
  //
  bunnyFactory: {
    137: '0xfa249Caa1D16f75fa159F7DFBAc0cC5EaB48CeFf',
    80001: '0x707CBF373175fdB601D34eeBF2Cf665d08f01148',
  },
  //
  claimRefund: {
    137: '0xE7e53A7e9E3Cf6b840f167eF69519175c4111e149',
    80001: '',
  },
  pointCenterIfo: {
    137: '0x3C6919b132462C1FEc572c6300E83191f4F0012a',
    80001: '0xd2Ac1B1728Bb1C11ae02AB6e75B76Ae41A29111e3',
  },
  bunnySpecial: {
    137: '0xFee8A195570a18461146F401d6033f5ab3380849',
    80001: '0x7b7b1583De1DeB32Ce6605F6deEbF24A0671c17C',
  },
  tradingCompetition: {
    137: '0xd718baa0B1F4f70dcC8458154042120FFE0DEFFA',
    80001: '0xC787F45B833721ED3aC46E99b703B3E1E01abb111',
  },
  easterNft: {
    137: '0x23c41D28A239dDCAABd1bb1deF8d057189510066',
    80001: '0x24ec6962dbe874F6B67B5C5085710610667fA0854F',
  },
  cakeVault: {
    137: addresses[137].ZOLAVault,
    80001: addresses[80001].ZOLAVault,
  },
  predictions: {
    137: '0x18B2A687610328590Bc8F2e5fEdDe3b582A49cdA',
    80001: '',
  },
  chainlinkOracle: {
    137: '0xD276fCF34D54A926773c399eBAa772C12ec394aC',
    80001: '',
  },
  bunnySpecialCakeVault: {
    137: '0x5B4a770Abe7Eafb2601CA4dF9d73EA99363E60a4',
    80001: '',
  },
  bunnySpecialPrediction: {
    137: '0x342c99e9aC24157657095eC69CB04b73257e7A9C',
    80001: '',
  },
  bunnySpecialLottery: {
    137: '0x24ED31d31C5868e5a96aA77fdcB890f3511fa0b2',
    80001: '0x382cB4111110F398F0f152cae82821476AE51c9cF',
  },
  farmAuction: {
    137: '0xb92Ab7c1edcb273AbA24b06106cEb3681654805D2',
    80001: '0x3F9602593b4f7C67ab045DB51BbDEa94E40fA9Fe',
  },
}
