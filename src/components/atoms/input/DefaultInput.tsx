import React from 'react'
import BaseInput from './BaseInput'
import { IInputProps } from './input.interface'

export const DefaultInput = ({ ...props }: IInputProps) => {
  return (
    <BaseInput
      type={props.type}
      placeholder={props.placeholder}
      disabled={props.disabled}
      variant={props.variant}
      className={props.className ? 'error' : ''}
      onChange={props.onChange}
      value={props.value}
      required={props.required}
      inputProps={{
        minLength: `${props.minLength}`,
        maxLength: `${props.maxLength}`
      }}
      style={{ width: `${props.width}` }}
    />
  )
}
