import React from 'react'
import { PancakeStack, PancakeInput, PancakeLabel } from './StyledPancakeToggle'
import { PancakeToggleProps, scales } from './types'

const PancakeToggle: React.FC<PancakeToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <PancakeStack scale={scale}>
    <PancakeInput id={props.id || 'pancake-toggle'} scale={scale} type="checkbox" checked={checked} {...props} />
    <PancakeLabel scale={scale} checked={checked} htmlFor={props.id || 'pancake-toggle'}>
      <div className="pancakes">
        <div className="pancake" />
        <img alt="tst" className="wagyu" src="/images/toggle/wagyu.png" />
      </div>
    </PancakeLabel>
  </PancakeStack>
)

export default PancakeToggle
