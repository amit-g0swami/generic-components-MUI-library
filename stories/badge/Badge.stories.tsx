import { ComponentStory, ComponentMeta } from '@storybook/react'
import * as React from 'react'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import { DefaultBadge } from '../../src/components/atoms'
export default {
  title: 'UI/Atoms/Badges',
  component: DefaultBadge
} as ComponentMeta<typeof DefaultBadge>

const Template: ComponentStory<typeof DefaultBadge> = (args) => (
  <DefaultBadge {...args} />
)
const Logging = () => {
  alert('logging')
}
export const Badge = Template.bind({})
Badge.args = {
  badgeContent: '99',
  color: 'primary',
  icon: NotificationsNoneRoundedIcon,
  clickHandler: Logging
}
