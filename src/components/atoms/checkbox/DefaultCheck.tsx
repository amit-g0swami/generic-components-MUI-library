import BaseCheck from './BaseCheck'

import { ICheckboxProps } from './checkbox.interface'
import React from 'react'

export const DefaultCheck = ({ ...props }: ICheckboxProps) => {
  return (
    <BaseCheck
      disabled={props.disabled}
      defaultChecked={props.defaultChecked}
      checked={props.checked}
      onClick={props.onClick}
      indeterminate={props.indeterminate}
      icon={props.icon}
      checkedIcon={props.checkedIcon}
      name={props.name}
      value={props.value}
    />
  )
}
