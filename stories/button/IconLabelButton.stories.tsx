import { IconLabelButton } from '../../src/components/atoms';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {AiFillEdit} from 'react-icons/ai'
import * as React from 'react';

export default {
  title: 'UI/Atoms/Buttons',
  component: IconLabelButton,
} as ComponentMeta<typeof IconLabelButton>;

const Template: ComponentStory<typeof IconLabelButton> = (args) => (
  <IconLabelButton {...args} />
);

export const IconLabelButtons = Template.bind({});
IconLabelButtons.args = {
  color: 'primary',
  startIcon: AiFillEdit,
  btnText: 'Icon label',
  size: 'medium',
  name: 'btn',
  value: 'btn',
  variant:'outlined',
  type: 'button',
  
};
