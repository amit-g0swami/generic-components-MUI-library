import { ReactNode } from 'react'

export interface IOptionProps {
  value?: string
  userIcon?: ReactNode
  upIcon?: ReactNode
  handleClick?: () => void
  width?: string
  data?: string
  border?: string
}
