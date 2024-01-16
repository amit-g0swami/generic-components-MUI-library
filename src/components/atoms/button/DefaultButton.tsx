import Button from '@mui/material/Button'
import {
  getButtonFontSize,
  getButtonHeight,
  getButtonPadding,
  getButtonWidth
} from './button.common'
import { IButtonProps } from './button.interface'
import React from 'react'

export const DefaultButton: React.FC<IButtonProps> = ({
  ...props
}: IButtonProps) => {
  return (
    <Button
      sx={{
        height: getButtonHeight(props.size),
        width: getButtonWidth(props.size),
        padding: getButtonPadding(props.size),
        fontSize: getButtonFontSize(props.size),
        '&:focus': {
          backgroundColor: `${props.color}.main`,
          color: `${props.color}.light`
        },
        '&.Mui-disabled': {
          borderColor: `${props.color}.light`,
          color: `${props.color}.light`,
          cursor: 'not-allowed'
        },
        backgroundColor: `${props.bgcolor}`,
        borderRadius: '8px'
      }}
      variant={props.variant ?? 'outlined'}
      color={props.color ?? 'primary'}
      size="large"
      disabled={props.disable ?? false}
      onClick={props?.onClick}
      name={props?.name}
      type={props.type ?? 'button'}
      value={props.value}
      form={props.form}
    >
      {props.btnText}
    </Button>
  )
}
