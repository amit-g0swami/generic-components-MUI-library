import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { BiChevronUp, BiChevronDown } from 'react-icons/bi'
import { IFiltersProps } from '../../table-filter.interfaces'
import { TableFilterFormContext } from '../TableFilterForm'

const Header = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.17px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  align-items: center;
  gap: 13px;
  height: 44px;
  margin: 0px 10px;
`

const Filter = styled.div`
  background: #f8f8f8;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

const FilterTitle = styled.h4`
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #011729;
`

const InputField = styled.input`
  padding: 8px 10px 10px;
  height: 37px;
  border: 1px solid #33050c;
  border-radius: 8px;
`

export const TableFilterInput: React.FC<IFiltersProps> = ({ filterData }) => {
  const { values, setValues }: any = useContext(TableFilterFormContext)
  const [open, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!open)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [filterData.name]: e.target.value })
  }
  return (
    <div>
      <Header onClick={handleToggle}>
        {open === false ? <BiChevronDown /> : <BiChevronUp />}
        <FilterTitle>{filterData.displayName}</FilterTitle>
      </Header>
      {open && (
        <Filter>
          <InputField
            type={filterData?.type}
            name={filterData?.name}
            onChange={(e) => handleChange(e)}
            value={values[filterData.name] || ''}
          />
        </Filter>
      )}
    </div>
  )
}
