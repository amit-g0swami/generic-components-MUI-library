import React from 'react'
import ToolTip from '../../src/components/atoms/tooltip/ToolTip'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tooltip } from '@mui/material'
import { TextButton } from '../../src/components/atoms'

export default {
  title: 'UI/Atoms/ToolTip',
  component: ToolTip,
  argTypes: {
    text: 'This is a tooltip'
  }
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof ToolTip> = (args) => <ToolTip {...args} />

export const ToolTips = Template.bind({})

ToolTips.args = {
  text: 'hi',
  position: 'top',
  children: (
    <TextButton
      btnText={'Button'}
      color="primary"
      onClick={() => console.log('clicked')}
      size={'small'}
    />
  )
}
