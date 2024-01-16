import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MultipleSelect } from '../../src/components/atoms';
import { fruits } from './data';
import React from 'react';

export default {
  title: 'UI/Atoms/Select',
  component: MultipleSelect,
} as ComponentMeta<typeof MultipleSelect>;

const Template: ComponentStory<typeof MultipleSelect> = (args) => (
  <MultipleSelect {...args} />
);

export const MultiSelect = Template.bind({});

MultiSelect.args = {
  label: 'fruit',
  menuItem: fruits,
  helperText: 'choose favourite fruits',
};
