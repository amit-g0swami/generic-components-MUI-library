import React from 'react'
import { DefaultAlert } from '../../src/components/atoms'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Alert as muialert } from '@mui/material'

export default {
  title: 'UI/Atoms/Alerts',
  component: DefaultAlert,
  argTypes: {
    border: { control: 'color' }
  }
} as ComponentMeta<typeof muialert>

const Template: ComponentStory<typeof DefaultAlert> = (args) => (
  <DefaultAlert {...args} />
)

export const Alert = Template.bind({})

Alert.args = { severity: 'error', message: 'error' }
