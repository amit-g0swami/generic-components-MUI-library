import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiChevronUp, BiChevronDown } from 'react-icons/bi'
import BaseCheck from '../../../../../atoms/checkbox/BaseCheck'
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
  height: 44px;
  margin: 0px 10px;
`

const FilterContent = styled.div`
  background: #f8f8f8;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

const FilterHeading = styled.h4`
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

export const TableMultiSelectCheckBox: React.FC<IFiltersProps> = ({
  filterData
}) => {
  const { values, setValues }: any = useContext(TableFilterFormContext)
  const [selectedValues, setSelectedValues] = useState<any>([])
  const [open, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!open)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionValue = event.target.value
    if (selectedValues.includes(optionValue)) {
      setSelectedValues((prevSelectedValues) => {
        return prevSelectedValues.filter((value) => value !== optionValue)
      })
    } else {
      setSelectedValues((prevSelectedValues) => {
        return [...prevSelectedValues, optionValue]
      })
    }
  }

  useEffect(() => {
    setValues({ ...values, [filterData.name]: selectedValues.join(',') })
  }, [selectedValues])

  return (
    <div>
      <FilterHeader onClick={handleToggle}>
        {open === false ? <BiChevronDown /> : <BiChevronUp />}
        <FilterHeading>{filterData.displayName}</FilterHeading>
      </FilterHeader>
      {open && (
        <FilterContent>
          {filterData?.options?.map((option) => (
            <label key={option.value}>
              <BaseCheck
                name={option.value}
                value={option.value}
                checked={selectedValues.includes(option.value)}
                onChange={handleChange}
              />
              {option.label}
            </label>
          ))}
        </FilterContent>
      )}
    </div>
  )
}
