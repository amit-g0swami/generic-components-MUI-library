import { DefaultButton } from '../../src/components/atoms/button/DefaultButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// import React from 'react'
import * as React from 'react'

export default {
  title: 'UI/Atoms/Buttons',
  component: DefaultButton
} as ComponentMeta<typeof DefaultButton>

const Template: ComponentStory<typeof DefaultButton> = (args) => (
  <DefaultButton {...args} />
)

export const Button = Template.bind({})
Button.args = {
  color: 'primary',
  btnText: 'Large Primary',
  size: 'medium',
  name: 'btn',
  value: 'btn'
}
