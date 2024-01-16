import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { RadioButton } from '../../../../../atoms'
import { IFiltersProps } from '../../table-filter.interfaces'
import { TableFilterFormContext } from '../TableFilterForm'

const FilterHeader = styled.div`
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

const FilterContent = styled.div`
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

export const TableBooleanInput: React.FC<IFiltersProps> = ({ filterData }) => {
  const { values, setValues }: any = useContext(TableFilterFormContext)
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionValue: any = event.target.value
    if (selectedValues.includes(optionValue)) {
      setSelectedValues((prevSelectedValues) =>
        prevSelectedValues.filter((val) => val !== optionValue)
      )
    } else {
      setSelectedValues([optionValue])
    }
  }

  useEffect(() => {
    setValues({ ...values, [filterData.name]: selectedValues[0] })
  }, [selectedValues])

  return (
    <div>
      <FilterHeader onClick={handleToggle}>
        {open === false ? <BiChevronDown /> : <BiChevronUp />}
        <FilterTitle>{filterData.displayName}</FilterTitle>
      </FilterHeader>
      {open && (
        <FilterContent>
          <label>
            <RadioButton
              checked={selectedValues.includes('true')}
              onClick={handleChange}
              value="true"
            />
            True
          </label>
          <label>
            <RadioButton
              checked={selectedValues.includes('false')}
              onClick={handleChange}
              value="false"
            />
            False
          </label>
        </FilterContent>
      )}
    </div>
  )
}
