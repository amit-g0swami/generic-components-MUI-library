import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultSwitch } from '../../src/components/atoms';
import React from 'react';

export default {
  title: 'UI/Atoms/Switches',
  component: DefaultSwitch,
} as ComponentMeta<typeof DefaultSwitch>;

const Template: ComponentStory<typeof DefaultSwitch> = (args) => (
  <DefaultSwitch {...args} />
);

export const Switch = Template.bind({});
