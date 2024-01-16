import React from 'react'
import { FormInput } from '../../src/components/atoms'
import { Form } from '../../src/components/molecules'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'UI/Atoms/Inputs',
  component: FormInput
} as ComponentMeta<typeof FormInput>

const Template: ComponentStory<typeof FormInput> = (args) => (
  <Form>
    <FormInput {...args} />
  </Form>
)
export const FormInputs = Template.bind({})

FormInputs.args = {
  type: 'password',
  placeholder: 'Name',
  btn: true,
  width: '400px'
}
