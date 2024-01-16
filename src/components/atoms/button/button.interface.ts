import { IconType } from 'react-icons/lib'

interface IButtonCommonProps {
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  disable?: boolean
  onClick: () => void
  size: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'
  name?: string
  value?: string
  variant?: 'text' | 'outlined' | 'contained'
  className?: string
  styles?: string
  form?: string
  bgcolor?: string
}
export interface IButtonProps extends IButtonCommonProps {
  btnText: string
}
export interface IIconButtonProps extends IButtonCommonProps {
  icon: IconType
}
export interface IIconLabelButtonProps extends IButtonCommonProps {
  btnText: string
  startIcon: IconType
  btnLabel?: string | number
}

export interface ITextButtonProps extends IButtonCommonProps {
  btnText: string
}
