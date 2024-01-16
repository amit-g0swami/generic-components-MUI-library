import { DefaultFloatingButton } from '../../src/components/atoms';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
export default {
  title: 'UI/Atoms/Buttons',
  component: DefaultFloatingButton,
} as ComponentMeta<typeof DefaultFloatingButton>;

const Template: ComponentStory<typeof DefaultFloatingButton> = (args) => (
  <DefaultFloatingButton {...args} />
);

export const FloatingButton = Template.bind({});
FloatingButton.args = {
  color: 'primary',
  icon: AiOutlinePlus,
  size: 'medium',
  name: 'btn',
  value: 'btn',
};