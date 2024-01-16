import styled from '@emotion/styled'
import { Checkbox, CheckboxProps } from '@mui/material'
import React from 'react'

const BaseCheck = styled((props: CheckboxProps) => <Checkbox {...props} />)(
  () => ({
    '&.Mui-checked': {
      color: 'red'
    },
    '&.Mui-disabled': {
      color: 'rgba(0, 0, 0, 0.26)'
    },
    '&.MuiCheckbox-indeterminate + .Mui-checked': {
      color: 'red'
    },
    '&.MuiCheckbox-indeterminate': {
      color: 'rgba(0, 0, 0, 0.26)'
    }
  })
)

export default BaseCheck
