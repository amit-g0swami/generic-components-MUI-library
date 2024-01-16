import Button from '@mui/material/Button'
import {
  getButtonHeight,
  getButtonFontSize,
  getButtonPadding,
  getButtonWidth
} from './button.common'

import { ITextButtonProps } from './button.interface'
import * as React from 'react'

export const TextButton: React.FC<ITextButtonProps> = ({
  ...props
}: ITextButtonProps) => {
  return (
    <Button
      sx={{
        height: getButtonHeight(props.size),
        width: getButtonWidth(props.size),
        padding: getButtonPadding(props.size),
        fontSize: getButtonFontSize(props.size),
        borderRadius: '8px'
      }}
      variant={props.variant ?? 'text'}
      color={props.color ?? 'primary'}
      size={props.size ?? 'small'}
      disabled={props.disable ?? false}
      onClick={props.onClick}
      name={props.name}
      value={props.value}
      type={props.type ?? 'button'}
    >
      {props.btnText}
    </Button>
  )
}
