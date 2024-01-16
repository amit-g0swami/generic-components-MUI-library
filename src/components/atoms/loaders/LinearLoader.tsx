import LinearProgress from '@mui/material/LinearProgress'
import { ILinearLoaderProps } from './loader.interface'
import React from 'react'

export const LinearLoader = ({ ...props }: ILinearLoaderProps) => {
  return (
    <LinearProgress
      color={props.color}
      variant={props.variant}
      value={props.value}
    />
  )
}

