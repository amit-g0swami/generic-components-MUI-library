import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loader } from '../../src/components/atoms'
import React from 'react'

export default {
  title: 'UI/Atoms/Loaders',
  component: Loader
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = () => <Loader />

export const Loaders = Template.bind({})
