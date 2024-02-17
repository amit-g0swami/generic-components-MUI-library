import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DefaultChip } from '../../src/components/atoms'
import React from 'react'

export default {
  title: 'UI/Atoms/Chips',
  component: DefaultChip
} as ComponentMeta<typeof DefaultChip>

const Template: ComponentStory<typeof DefaultChip> = (args) => (
  <DefaultChip {...args} />
)

export const Chip = Template.bind({})
Chip.args = {
  label: 'Enabled'
}
