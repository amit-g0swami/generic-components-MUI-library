import CardContent from '@mui/material/CardContent'
import { CardHeader, CardMedia } from '@mui/material'
import StyledCard from './BaseCard'
import React from 'react'
import { ICardProps } from './card.interface'

export const DefaultCard = ({ ...props }: ICardProps) => {
  return (
    <StyledCard>
      {props.img ? (
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
      ) : (
        ''
      )}
      <CardHeader title={props.title} />
      <CardContent>{props.content}</CardContent>
    </StyledCard>
  )
}
