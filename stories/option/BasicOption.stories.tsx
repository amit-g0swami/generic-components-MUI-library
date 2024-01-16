import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BasicOption } from '../../src/components/atoms'
import { FaDotCircle } from 'react-icons/fa'

export default {
  title: 'UI/Atoms/Options',
  component: BasicOption
} as ComponentMeta<typeof BasicOption>

const Template: ComponentStory<typeof BasicOption> = (args) => (
  <BasicOption {...args} />
)

export const BasicOptions = Template.bind({})
BasicOptions.args = {
  userIcon: <FaDotCircle />,
  handleClick: () => console.log(),
  value: 'Label',
  data: '100+'
}
