import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuOption } from '../../src/components/atoms'
import { FaArrowLeft } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'

export default {
  title: 'UI/Atoms/Options',
  component: MenuOption
} as ComponentMeta<typeof MenuOption>

const Template: ComponentStory<typeof MenuOption> = (args) => (
  <MenuOption {...args} />
)

export const MenuOptions = Template.bind({})
MenuOptions.args = {
  value: 'Options 1',
  userIcon: <FaUserAlt />,
  upIcon: <FaArrowLeft />
}
