import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { DefaultLabel } from '../../src/components/atoms'

export default {
  title: 'UI/Atoms/Labels',
  component: DefaultLabel
} as ComponentMeta<typeof DefaultLabel>

const Template: ComponentStory<typeof DefaultLabel> = (args) => (
  <DefaultLabel {...args} />
)

export const Label = Template.bind({})
Label.args = {
  labelText: 'Rentickle',
  for: 'Rentickle'
}
