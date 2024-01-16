import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'
import { ICircularLoaderProps } from './loader.interface'

export const CircularLoader = ({ ...props }: ICircularLoaderProps) => {
  return (
    <CircularProgress
      color={props.color}
      variant={props.variant}
      value={props.value}
    />
  )
}

