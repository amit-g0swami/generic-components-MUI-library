import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export interface IBadgeProps {
  icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>
  badgeContent: number
  color:
    | 'default'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'primary'
    | 'secondary'
  onClick?: () => void
}
