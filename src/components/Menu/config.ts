import { MenuEntry } from 'packages/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { BASE_BSC_SCAN_URL } from 'config'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  // {
  //   label: t('Home'),
  //   icon: 'HomeIcon',
  //   href: '/',
  // },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      // {
      //   label: t('LP Migration'),
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  // {
  //   label: t('Lottery'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: '/info',
  },
  // {
  //   label: t('IFO'),
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      // {
      //   label: t('Contact'),
      //   href: 'https://docs.wagyuswap.app/wagyuswap/',
      // },
      // {
      //   label: t('Voting'),
      //   href: '/voting',
      // },
      {
        label: t('Github'),
        href: 'https://github.com/wagyuswapapp',
      },
      {
        label: t('Cross chain swapz'),
        href: 'https://cross2.swapz.app',
      },
      {
        label: t('Docs'),
        href: 'https://docs.wagyuswap.app/wagyuswap/',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/@wagyuswap.app',
      },
      {
        label: t('Support'),
        href: 'mailto:support@wagyuswap.app',
      },
      {
        label: t('Telegram'),
        href: 'http://t.me/wagyuswapofficial',
      },
      {
        label: t('Velascan'),
        href: BASE_BSC_SCAN_URL,
      },
      // {
      //   label: t('Merch'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
