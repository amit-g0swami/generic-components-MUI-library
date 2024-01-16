import {DefaultIconButton} from '../../src/components/atoms'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as React from 'react';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
export default {
  title: 'UI/Atoms/Buttons',
  component: DefaultIconButton,
} as ComponentMeta<typeof DefaultIconButton>;

const Template: ComponentStory<typeof DefaultIconButton> = (args) => (
  <DefaultIconButton {...args} />
);

export const IconButtons= Template.bind({});
IconButtons.args = {
  color: 'primary',
  icon: BorderColorRoundedIcon,
  size: 'medium',
  name: 'btn',
  value: 'btn',
};
