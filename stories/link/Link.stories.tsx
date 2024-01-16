import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLink } from '../../src/components/atoms/link';
import React from 'react';

export default {
  title: 'UI/Atoms/Links',
  component: DefaultLink,
} as ComponentMeta<typeof DefaultLink>;

const Template: ComponentStory<typeof DefaultLink> = (args) => (
  <DefaultLink {...args} />
);

export const Link = Template.bind({});
Link.args = {
  title: 'Link',
  url: '#',
  underline: 'hover',
};
