import React, { useState } from 'react'
import { IForm } from './form.interface'
export const FormContext = React.createContext({})

export const Form = ({ validationSchema, ...props }: IForm) => {
  const [values, setValues] = useState(
    props.initialValues ? props.initialValues : {}
  )
  const [errors, setErrors] = useState({})

  const handleValidation = (event) => {
    event.preventDefault()
    const result = validationSchema.validate(values, { abortEarly: false })
    if (result.error) {
      const error = {}
      result.error.details.map((data) => {
        return (error[data.path[0]] = data.message)
      })
      setErrors(error)
    } else {
      setErrors({})
      props.getFormData(values)
    }
  }
  return (
    <FormContext.Provider value={{ values, setValues, errors }}>
      <form
        className={props.className}
        onSubmit={handleValidation}
        id={props.id}
      >
        {props.children}
      </form>
    </FormContext.Provider>
  )
}
