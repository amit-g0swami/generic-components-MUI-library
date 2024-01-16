import Button from '@mui/material/Button'
import {
  getButtonHeight,
  getButtonFontSize,
  getButtonPadding,
  getButtonWidth
} from './button.common'
import React from 'react'

import { IIconLabelButtonProps } from './button.interface'

export const IconLabelButton: React.FC<IIconLabelButtonProps> = ({
  ...props
}: IIconLabelButtonProps) => {
  return (
    <Button
      sx={{
        height: getButtonHeight(props.size),
        width: getButtonWidth(props.size),
        padding: getButtonPadding(props.size),
        fontSize: getButtonFontSize(props.size),
        borderRadius: '8px',
        '&:focus': {
          backgroundColor: `${props.color}.main`,
          color: `${props.color}.light`
        }
      }}
      variant="outlined"
      color={props.color}
      startIcon={<props.startIcon />}
      onClick={props.onClick}
      name={props.name}
      type={props.type ?? 'button'}
      value={props.value}
    >
      {props.btnText}
      <div style={{ marginLeft: '8px' }}>{props?.btnLabel}</div>
    </Button>
  )
}
