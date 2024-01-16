import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RadioButton } from '../../src/components/atoms'
import React from 'react'

export default {
  title: 'UI/Atoms/RadioButtons',
  component: RadioButton
} as ComponentMeta<typeof RadioButton>

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
)

export const Radio = Template.bind({})
