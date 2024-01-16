import { ReactNode } from 'react'
export interface IForm {
  children?: ReactNode
  className?: string
  validationSchema?: any
  initialValues?: { [key: string]: any }
  getFormData?: any
  id?: string
}
