import { useState, useEffect } from 'react'
import { request, gql } from 'graphql-request'
import { INFO_CLIENT } from 'config/constants/endpoints'
import { TOKEN_BLACKLIST } from 'config/constants/info'
import { getDeltaTimestamps } from 'views/Info/utils/infoQueryHelpers'

interface TopPoolsResponse {
  pairDayDatas: {
    id: string
  }[]
}

/**
 * Initial pools to display on the home page
 */
// TODO: REVERT
const fetchTopPools = async (timestamp24hAgo: number): Promise<string[]> => {
  try {
    const query = gql`
      query topPools($blacklist: [String!], $timestamp24hAgo: Int) {
        pairDayDatas(
          first: 30
          where: { dailyTxns_gt: 30, token0_not_in: $blacklist, token1_not_in: $blacklist, date_gt: $timestamp24hAgo }
          orderBy: dailyVolumeUSD
          orderDirection: desc
        ) {
          id
        }
      }
    `
    const data = await request<TopPoolsResponse>(INFO_CLIENT, query, { blacklist: TOKEN_BLACKLIST, timestamp24hAgo })
    // pairDayDatas id has compound id "0xPOOLADDRESS-NUMBERS", extracting pool address with .split('-')
    return data.pairDayDatas.map((p) => p.id.split('-')[0])
  } catch (error) {
    console.error('Failed to fetch top pools', error)
    return []
  }
}

/**
 * Fetch top addresses by volume
 */
const useTopPoolAddresses = (): string[] => {
  const [topPoolAddresses, setTopPoolAddresse] = useState([])
  const [timestamp24hAgo] = getDeltaTimestamps()
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      const addresses = await fetchTopPools(timestamp24hAgo)
      setFetched(true)
      setTopPoolAddresse(addresses)
    }
    if (topPoolAddresses.length === 0 && !fetched) {
      fetch()
    }
  }, [topPoolAddresses, timestamp24hAgo, fetched])

  return topPoolAddresses
}

export default useTopPoolAddresses
