import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationOption } from '../../src/components/atoms'
import { FaDotCircle } from 'react-icons/fa'

export default {
  title: 'UI/Atoms/Options',
  component: NotificationOption
} as ComponentMeta<typeof NotificationOption>

const Template: ComponentStory<typeof NotificationOption> = (args) => (
  <NotificationOption {...args} />
)

export const NotificationOptions = Template.bind({})
NotificationOptions.args = {
  userIcon: <FaDotCircle />,
  handleClick: () => console.log(''),
  value: 'Today at 9:42 AM',
  data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
}
