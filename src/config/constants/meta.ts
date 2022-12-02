import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ZolaSwap',
  description:
    'Up and coming DEX! Earn ZOLA through yield farming or win it in the Lottery, then stake it in Sizzle Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by ZolaSWAP), NFTs, and more, on a platform you can trust.',
  image: 'https://zolaswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ZolaSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('ZolaSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('ZolaSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('ZolaSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('ZolaSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('ZolaSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ZolaSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ZolaSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('ZolaSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ZolaSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('ZolaSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ZolaSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ZolaSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('ZolaSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ZolaSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ZolaSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('ZolaSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('ZolaSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('ZolaSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('ZolaSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('ZolaSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('ZolaSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('ZolaSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('ZolaSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    default:
      return null
  }
}
