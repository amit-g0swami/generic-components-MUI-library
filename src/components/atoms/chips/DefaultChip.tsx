import BaseChip from './BaseChip'
import { IChipsProps } from './chip.interface'
import React from 'react'

export const DefaultChip = ({ ...props }: IChipsProps) => {
  return (
    <BaseChip onClick={props.onClick}>
      <p
        style={{
          width: '50px',
          margin: '0px'
        }}
      >
        {props.label}
      </p>
      {props.icon}
      {props.select}
    </BaseChip>
  )
}
