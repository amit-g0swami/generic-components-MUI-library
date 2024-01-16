import { IconButton } from '@mui/material'
import {
  getButtonHeight,
  getButtonFontSize,
  getButtonPadding
} from './button.common'
import { IIconButtonProps } from './button.interface'
import React from 'react'

export const DefaultFloatingButton: React.FC<IIconButtonProps> = ({
  ...props
}: IIconButtonProps) => {
  return (
    <IconButton
      sx={{
        height: getButtonHeight(props.size),
        width: getButtonHeight(props.size),
        padding: getButtonPadding(props.size),
        fontSize: getButtonFontSize(props.size),
        '&:focus': {
          backgroundColor: `${props.color}.main`,
          color: `${props.color}.light`
        },
        borderRadius: '8px'
      }}
      color={props.color ?? 'primary'}
      onClick={props.onClick}
      name={props.name}
      type={props.type ?? 'button'}
      value={props.value}
    >
      {<props.icon />}
    </IconButton>
  )
}
