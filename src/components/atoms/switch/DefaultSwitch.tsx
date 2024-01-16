import BaseSwitch from './BaseSwitch'
import { ISwitchProps } from './switch.interface'
import React from 'react'

export const DefaultSwitch = ({ ...props }: ISwitchProps) => {
  return (
    <BaseSwitch
      onClick={props.onChangeValue}
      disabled={props.disabled}
      checked={props.checked}
    />
  )
}
