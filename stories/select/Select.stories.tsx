import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultSelect } from '../../src/components/atoms';
import { ages } from './data';
import React from 'react';

export default {
  title: 'UI/Atoms/Select',
  component: DefaultSelect,
} as ComponentMeta<typeof DefaultSelect>;

const Template: ComponentStory<typeof DefaultSelect> = (args) => (
  <DefaultSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  helperText: 'ages',
  label: 'age',
  menuItem: ages,
};
