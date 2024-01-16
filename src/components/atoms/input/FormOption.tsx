import React, { useContext } from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import { FormContext } from '../../molecules'
import { IFormOptionProps } from './input.interface'
import { MenuItem, Select } from '@mui/material'
import styled from 'styled-components'

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

export const FormOption = ({ name, options, ...props }: IFormOptionProps) => {
  const { values, setValues, errors }: any = useContext(FormContext)

  const handleSelectChange = (e) => {
    setValues({ ...values, [name]: e.target.value })
  }

  return (
    <div>
      <FormOptionContainer>
        <FormLabel>{props.label}</FormLabel>
        <FormStar>{props.labelRequired && '*'}</FormStar>
      </FormOptionContainer>
      <div style={{ width: `${props.width}` }}>
        <Select
          name={name}
          value={values[name] || ''}
          onChange={handleSelectChange}
          sx={{
            display: 'flex',
            alignItems: 'center',
            background: '#F8F8F8',
            borderRadius: '8px',
            height: '45px'
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {errors[name] && (
          <ErrorParagraph>
            <BiInfoCircle />
            {errors[name]}
          </ErrorParagraph>
        )}
      </div>
    </div>
  )
}
