import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import BaseInput from './BaseInput'
import InputAdornment from '@mui/material/InputAdornment'
import { IInputProps, INPUT_TYPE } from './input.interface'
import IconButton from '@mui/material/IconButton'
import { BiHide, BiInfoCircle, BiShowAlt } from 'react-icons/bi'
import { FormContext } from '../../molecules'

const FormOptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const FormLabel = styled.label`
  height: 19px;
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #373330;
`

const FormStar = styled.div`
  color: #ff1a3d;
  margin-left: 2px;
  line-height: 19px;
`

const ErrorParagraph = styled.p`
  margin: 0px 0px;
  color: #b3261e;
  font-family: Lato;
  font-weight: 400;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  line-height: 28px;
`

export const FormInput = ({ ...props }: IInputProps) => {
  const { values, setValues, errors }: any = useContext(FormContext)
  const [showPassword, setShowPassword] = useState(true)
  const [type, setType] = useState(props.type)
  const handleChange = (e) => {
    let value = e.target.value
    value = type === INPUT_TYPE.NUMBER ? parseFloat(value) : value
    setValues({ ...values, [props.name]: value })
  }
  const handleClick = () => {
    setShowPassword(!showPassword)
    setType(showPassword === true ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD)
  }
  return (
    <div>
      <FormOptionContainer>
        <FormLabel>{props.label}</FormLabel>
        <FormStar>{props.labelRequired && '*'}</FormStar>
      </FormOptionContainer>
      <BaseInput
        type={type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        variant={props.variant}
        className={props.className ? 'error' : ''}
        name={props.name}
        onChange={(e) => handleChange(e)}
        value={values[props.name] || ''}
        required={props.required}
        InputProps={{
          endAdornment: props.btn && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}
              >
                {showPassword ? <BiHide /> : <BiShowAlt />}
              </IconButton>
            </InputAdornment>
          )
        }}
        style={{ width: `${props.width}` }}
      />
      {errors[props.name] && (
        <ErrorParagraph>
          <BiInfoCircle />
          {errors[props.name]}
        </ErrorParagraph>
      )}
    </div>
  )
}
