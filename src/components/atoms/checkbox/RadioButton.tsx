import { Radio } from '@mui/material'
import React from 'react'
import { IRadioProps } from './checkbox.interface'

export const RadioButton = ({ ...props }: IRadioProps) => {
  return (
    <Radio
      checked={props.checked}
      disabled={props.disabled}
      defaultChecked={props.defaultChecked}
      onClick={props.onClick}
      value={props.value}
      onChange={props.onChange}
    />
  )
}
