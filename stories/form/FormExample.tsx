import React from 'react'
import Joi from 'joi'
import { DefaultButton, FormInput } from '../../src/components/atoms'
import { Form } from '../../src/components/molecules'

const schema = Joi.object({
  userName: Joi.string(),
  number: Joi.number()
})

export const FormExample = () => {
  const getFormData = (data) => {
    console.log(data)
  }

  return (
    <div>
      <DefaultButton
        btnText="Save"
        color="inherit"
        onClick={() => ''}
        size="small"
        name=""
        value=""
        form="my-form"
        type="submit"
      />
      <Form validationSchema={schema} getFormData={getFormData} id="my-form">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '40px'
            }}
          >
            <div style={{ flex: '0.5' }}>
              <FormInput
                placeholder="Username"
                name="userName"
                width="100%"
                label="Username"
                labelRequired={true}
              />
            </div>
            <div style={{ flex: '0.5' }}>
              <FormInput
                label="Number"
                placeholder="Number"
                name="number"
                width="100%"
                type="number"
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}
