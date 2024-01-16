import { SvgIconProps } from '@mui/material'

export interface ICheckboxProps {
  disabled?: boolean
  defaultChecked?: boolean
  checked?: boolean
  indeterminate?: boolean
  icon?: React.ReactElement<SvgIconProps>
  checkedIcon?: React.ReactElement<SvgIconProps>
  onClick?: (e: any) => void
  name?: string
  value?: string
}
export interface IRadioProps {
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  onClick?: any
  value?: string
  onChange?: (e: any) => void
}
