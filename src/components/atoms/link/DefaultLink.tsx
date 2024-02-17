import Link from '@mui/material/Link'
import React from 'react'
import { ILinkProps } from './link.interface'

export const DefaultLink = ({ ...props }: ILinkProps) => {
  return (
    <Link
      href={props.url}
      color={props.color}
      underline={props.underline}
      sx={{ color: 'red', textDecorationColor: 'red' }}
    >
      {props.title}
    </Link>
  )
}
