import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { DefaultCheck } from '../../src/components/atoms'

export default {
  title: 'UI/Atoms/Checkbox',
  component: DefaultCheck
} as ComponentMeta<typeof DefaultCheck>

const Template: ComponentStory<typeof DefaultCheck> = (args) => (
  <DefaultCheck {...args} />
)

export const Check = Template.bind({})
