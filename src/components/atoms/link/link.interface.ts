import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx'
import { Property } from 'csstype'

export interface ILinkProps {
    color?: ResponsiveStyleValue<Property.Color | string[] | undefined>
    underline?: 'none' | 'hover' | 'always'
    title?: string
    url?: string
  }