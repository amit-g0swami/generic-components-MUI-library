import { styled } from '@mui/material/styles'
import Switch, { SwitchProps } from '@mui/material/Switch'
import React from 'react'

const BaseSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 49,
  height: 32,
  padding: 2,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 4,
    marginRight: -2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: 'red',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      },
      '&:hover': {
        borderRadius: '50%',
        outline: '4px solid rgba(28, 27, 31, 0.12)'
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '12px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: 'rgba(28, 27, 31, 0.12)'
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      background: 'none',
      outline: '2px solid rgba(28, 27, 31, 0.12)'
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 24,
    height: 24
  },
  '& .MuiSwitch-track': {
    borderRadius: 13,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}))

export default BaseSwitch
