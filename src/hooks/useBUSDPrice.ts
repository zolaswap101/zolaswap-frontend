import { ChainId, Currency, currencyEquals, JSBI, Price } from '@wagyu-swap/sdk'
import { useMemo } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import tokens, { mainnetTokens } from 'config/constants/tokens'
import { PairState, usePairs } from './usePairs'
import { wrappedCurrency } from '../utils/wrappedCurrency'

const USDT_MAINNET = mainnetTokens.usdt
const { wmatic: WMATIC } = tokens

/**
 * Returns the price in BUSD of the input currency
 * @param currency currency to compute the BUSD price of
 */
export default function useBUSDPrice(currency?: Currency): Price | undefined {
  const { chainId } = useActiveWeb3React()
  const wrapped = wrappedCurrency(currency, chainId)
  const tokenPairs: [Currency | undefined, Currency | undefined][] = useMemo(
    () => [
      [chainId && wrapped && currencyEquals(WMATIC, wrapped) ? undefined : currency, chainId ? WMATIC : undefined],
      [wrapped?.equals(USDT_MAINNET) ? undefined : wrapped, chainId === ChainId.MAINNET ? USDT_MAINNET : undefined],
      [chainId ? WMATIC : undefined, chainId === ChainId.MAINNET ? USDT_MAINNET : undefined],
    ],
    [chainId, currency, wrapped],
  )

  const [[ethPairState, ethPair], [usdtPairState, usdtPair], [usdtEthPairState, usdtEthPair]] = usePairs(tokenPairs)

  return useMemo(() => {
    if (!currency || !wrapped || !chainId) {
      return undefined
    }
    // handle weth/eth
    if (wrapped.equals(WMATIC)) {
      if (usdtPair) {
        const price = usdtPair.priceOf(WMATIC)
        return new Price(currency, USDT_MAINNET, price.denominator, price.numerator)
      }
      return undefined
    }
    // handle busd
    if (wrapped.equals(USDT_MAINNET)) {
      return new Price(USDT_MAINNET, USDT_MAINNET, '1', '1')
    }

    const ethPairETHAmount = ethPair?.reserveOf(WMATIC)

    const ethPairETHBUSDValue: JSBI =
      ethPairETHAmount &&
      usdtEthPair &&
      ethPairETHAmount.toFixed(0) !== '0' &&
      Number((usdtEthPair as any).tokenAmounts[0].toFixed()) !== 0
        ? usdtEthPair.priceOf(WMATIC).quote(ethPairETHAmount).raw
        : JSBI.BigInt(0)

    // all other tokens
    // first try the busd pair
    if (
      usdtPairState === PairState.EXISTS &&
      usdtPair &&
      usdtPair.reserveOf(USDT_MAINNET).greaterThan(ethPairETHBUSDValue)
    ) {
      const price = usdtPair.priceOf(wrapped)
      return new Price(currency, USDT_MAINNET, price.denominator, price.numerator)
    }
    if (ethPairState === PairState.EXISTS && ethPair && usdtEthPairState === PairState.EXISTS && usdtEthPair) {
      if (usdtEthPair.reserveOf(USDT_MAINNET).greaterThan('0') && ethPair.reserveOf(WMATIC).greaterThan('0')) {
        const ethBusdPrice = usdtEthPair.priceOf(USDT_MAINNET)
        const currencyEthPrice = ethPair.priceOf(WMATIC)
        const busdPrice = ethBusdPrice.multiply(currencyEthPrice).invert()

        return new Price(currency, USDT_MAINNET, busdPrice.denominator, busdPrice.numerator)
      }
    }

    return undefined
  }, [chainId, currency, ethPair, ethPairState, usdtEthPair, usdtEthPairState, usdtPair, usdtPairState, wrapped])
}

export const useCakeBusdPrice = (): Price | undefined => {
  const cakeBusdPrice = useBUSDPrice(tokens.cake)
  return cakeBusdPrice
}

export const useBNBBusdPrice = (): Price | undefined => {
  const bnbBusdPrice = useBUSDPrice(tokens.wmatic)
  return bnbBusdPrice
}
