import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { DefaultLogo } from '../../src/components/atoms'
// import type { Meta, StoryObj } from '@storybook/react';
// import dummylogo from '../asset/dummylogo.png'

export default {
  title: 'UI/Atoms/Logos',
  component: DefaultLogo
} as ComponentMeta<typeof DefaultLogo>

const Template: ComponentStory<typeof DefaultLogo> = (args) => (
  <DefaultLogo {...args} />
)

export const Logo = Template.bind({})
Logo.args = {
  srcUrl: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
  altText: 'LogoText',
  width: 100,
  height: 100
}
