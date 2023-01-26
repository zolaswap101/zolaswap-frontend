import React from 'react'
import styled from 'styled-components'
import { PancakeRoundIcon } from '../../../components/Svg'
import Text from '../../../components/Text/Text'
import Skeleton from '../../../components/Skeleton/Skeleton'

interface Props {
  cakePriceUsd?: number
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.6s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`

const ImgWrapper = styled.img`
  width: 32px;
`

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://zolaswap.finance/swap?outputCurrency=0x8a226293bC6f697A681B0b29f825c149655fEC2d"
      target="_blank"
    >
      <ImgWrapper alt="logo" className="mr-24" src="/images/tokens/zolaswap.png" />
      <Text color="textSubtle" bold>{`$${cakePriceUsd}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  )
}

export default React.memo(CakePrice)
