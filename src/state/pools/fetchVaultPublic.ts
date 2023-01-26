import BigNumber from 'bignumber.js'
import { convertSharesToCake } from 'views/Pools/helpers'
import multicall, { multicallv2 } from 'utils/multicall'
import cakeVaultAbi from 'config/abi/ZOHLAVault.json'
import masterChefAbi from 'config/abi/ZOHLAFarm.json'
import { getCakeVaultAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { getMulticallContract } from 'utils/contractHelpers'

export const fetchPublicVaultData = async () => {
  try {
    const calls = [
      'getPricePerFullShare',
      'totalShares',
      'calculateHarvestCakeRewards',
      'calculateTotalPendingCakeRewards',
    ].map((method) => ({
      address: getCakeVaultAddress(),
      name: method,
    }))

    const [[sharePrice], [shares], [estimatedCakeBountyReward], [totalPendingCakeHarvest]] = await multicallv2(
      cakeVaultAbi,
      calls,
    )

    const farmCalls = [
      {
        address: getMasterChefAddress(),
        name: 'userInfo',
        params: [0, getCakeVaultAddress()],
      },
    ]

    const [userInfo] = await multicall(masterChefAbi, farmCalls)

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    const totalCakeInVaultEstimate = convertSharesToCake(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalCakeInVault: totalCakeInVaultEstimate.cakeAsBigNumber.toJSON(),
      estimatedCakeBountyReward: new BigNumber(estimatedCakeBountyReward.toString()).toJSON(),
      totalPendingCakeHarvest: new BigNumber(totalPendingCakeHarvest.toString()).toJSON(),
      amountInFarm: new BigNumber(userInfo[0].toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalCakeInVault: null,
      estimatedCakeBountyReward: null,
      totalPendingCakeHarvest: null,
      amountInFarm: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const calls = ['performanceFee', 'callFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: getCakeVaultAddress(),
      name: method,
    }))

    const [[performanceFee], [callFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2(cakeVaultAbi, calls)

    return {
      performanceFee: performanceFee.toNumber(),
      callFee: callFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
