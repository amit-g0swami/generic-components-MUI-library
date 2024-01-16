import React from 'react'
import { Badge, styled } from '@mui/material'
import { IBadgeProps } from './badge.interface'

export const DefaultBadge: React.FC<IBadgeProps> = ({
  ...props
}: IBadgeProps) => {
  const StyledBadge = styled(Badge)<IBadgeProps>(({ theme }) => ({
    '&:hover': {
      color: `${theme.palette.primary.main}`,
      cursor: 'pointer'
    },
    '&:active': {
      color: `${theme.palette.primary.main}`,
      cursor: 'pointer'
    },
    '&:visited': {
      color: `${theme.palette.primary.main}`,
      cursor: 'pointer'
    },
    '& .MuiBadge-badge': {
      top: '2px',
      right: '2px',
      height: '15px',
      width: '15px',
      fontSize: '9px'
    },
    margin: '2px'
    // height: '28px',
    // width: '28px'
  }))
  return (
    <>
      <StyledBadge
        badgeContent={props.badgeContent}
        color={props.color ?? 'primary'}
        // sx={{ margin: '5px' }}
        onClick={props.onClick}
        icon={props.icon}
      >
        {<props.icon />}
      </StyledBadge>
    </>
  )
}
