import React from 'react'
import { IContainerProps } from './container.interface'

export const Container = ({
  children,
  className
}: IContainerProps): JSX.Element => {
  return <div className={className}>{children}</div>
}
