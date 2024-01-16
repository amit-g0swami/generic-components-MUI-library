import { HTMLInputTypeAttribute, SetStateAction } from 'react'
export interface IInputProps {
  type?: HTMLInputTypeAttribute
  placeholder?: string
  disabled?: boolean
  variant?: 'standard' | 'filled' | 'outlined' | undefined
  className?: HTMLInputTypeAttribute
  onChange?: (e: { target: { value: SetStateAction<string> } }) => void
  value?: string
  required?: boolean
  minLength?: number
  maxLength?: number
  btn?: boolean
  name: string
  width?: string
  label?: string
  labelRequired?: boolean
}

export interface IFormOptionProps {
  options: { label: string; value: string }[]
  width: string
  label?: string
  name: string
  labelRequired?: boolean
}

export enum INPUT_TYPE {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number'
}
