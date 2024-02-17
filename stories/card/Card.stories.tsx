import React from 'react'
import { DefaultCard } from '../../src/components/atoms'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card as muicard } from '@mui/material'

export default {
  title: 'UI/Atoms/Cards',
  component: DefaultCard,
  argTypes: {
    outlined: { control: { type: 'boolean' } }
  }
} as ComponentMeta<typeof muicard>

const Template: ComponentStory<typeof DefaultCard> = (args) => (
  <DefaultCard {...args} />
)

export const Card = Template.bind({})

Card.args = {
  title: 'title',
  content: 'content'
}
