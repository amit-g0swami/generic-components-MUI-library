import { SvgIconProps } from '@mui/material'

export interface IChipsProps {
  icon?: React.ReactElement<SvgIconProps>
  label?: string
  select?: React.ReactElement<SvgIconProps>
  onClick?: () => void
}
