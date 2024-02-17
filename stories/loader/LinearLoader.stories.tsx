import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LinearLoader } from '../../src/components/atoms'
import React from 'react'

export default {
  title: 'UI/Atoms/Loaders',
  component: LinearLoader
} as ComponentMeta<typeof LinearLoader>

const Template: ComponentStory<typeof LinearLoader> = (args) => (
  <LinearLoader {...args} />
)

export const LinearLoaders = Template.bind({})
