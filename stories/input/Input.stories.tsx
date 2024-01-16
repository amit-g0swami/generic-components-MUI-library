import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DefaultInput } from '../../src/components/atoms'
import React from 'react'

export default {
  title: 'UI/Atoms/Inputs',
  component: DefaultInput
} as ComponentMeta<typeof DefaultInput>

const Template: ComponentStory<typeof DefaultInput> = (args) => (
  <DefaultInput {...args} />
)

export const Input = Template.bind({})
Input.args = {
  type: 'text',
  placeholder: 'Name',
  width: '400px'
}
