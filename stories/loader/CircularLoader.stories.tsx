import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CircularLoader } from '../../src/components/atoms';
import React from 'react';

export default {
  title: 'UI/Atoms/Loaders',
  component: CircularLoader,
} as ComponentMeta<typeof CircularLoader>;

const Template: ComponentStory<typeof CircularLoader> = (args) => (
  <CircularLoader {...args} />
);

export const CircularLoaders = Template.bind({});