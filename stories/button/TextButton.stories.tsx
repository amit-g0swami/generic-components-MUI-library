import { TextButton } from '../../src/components/atoms'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// import React from 'react'
import * as React from 'react'

export default {
  title: 'UI/Atoms/Buttons',
  component: TextButton
} as ComponentMeta<typeof TextButton>

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
)

export const TextButtons = Template.bind({})
TextButtons.args = {
  color: 'primary',
  btnText: 'Large Primary',
  size: 'medium',
  name: 'btn',
  value: 'btn'
}
