import styled from '@emotion/styled'
import { Card, CardProps } from '@mui/material'
import React from 'react'

const StyledCard = styled((props: CardProps) => <Card {...props} />)(() => ({
  maxWidth: 500,
  margin: '0 auto',
  marginBottom: '1rem',
  marginTop: '1rem'
}))

export default StyledCard
