import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormExample } from './FormExample'

export default {
  title: 'UI/Molecules/Form',
  component: FormExample,
  argTypes: {}
} as ComponentMeta<typeof FormExample>

const Template: ComponentStory<typeof FormExample> = () => <FormExample />

export const Forms = Template.bind({})
