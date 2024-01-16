import { IconButton } from '@mui/material'
import { IIconButtonProps } from './button.interface'
import React from 'react'
import { theme } from '../../../theme'

export const DefaultIconButton: React.FC<IIconButtonProps> = ({
  ...props
}: IIconButtonProps) => {
  return (
    <IconButton
      sx={{
        background: 'none',
        borderRadius: '8px',
        '&:hover': {
          color: `${theme.palette.primary.main}`,
          background: 'none'
        },
        '&:focus': {
          color: `${theme.palette.primary.main}`,
          background: 'none'
        },
        '&:active': {
          color: `${theme.palette.primary.main}`,
          background: 'none'
        },
        '&:visited': {
          color: `${theme.palette.primary.main}`,
          background: 'none'
        }
      }}
      size={props.size}
      onClick={props.onClick}
      name={props.name}
      type={props.type ?? 'button'}
      value={props.value}
    >
      {<props.icon />}
    </IconButton>
  )
}
