import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { TableFilterFormContext } from '../TableFilterForm'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { DefaultChip } from '../../../../../atoms'
import { IFiltersProps } from '../../table-filter.interfaces'
import BaseCheck from '../../../../../atoms/checkbox/BaseCheck'

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
const ChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 37px;
  background: white;
  border-radius: 8px;
  overflow-x: auto;
`

const Filter = styled.div`
  background: #f8f8f8;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FilterOptions = styled.div`
  height: 115px;
  overflow-y: auto;
`

const InputField = styled.input`
  padding: 8px 10px 10px;
  height: 37px;
  border: 1px solid #33050c;
  border-radius: 8px;
  width: 100%;
`

const FilterTitle = styled.h4`
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #011729;
`

export const TableMultiSelect: React.FC<IFiltersProps> = ({ filterData }) => {
  const { values, setValues }: any = useContext(TableFilterFormContext)
  const [searchValue, setSearchValue] = useState('')
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<any>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setValues({ ...values, [filterData.name]: selectedCheckboxes.join(',') })
  }, [selectedCheckboxes])

  const handleToggle = () => {
    setOpen(!open)
  }
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }
  const handleCheckboxChange = (event) => {
    const { value } = event.target
    if (selectedCheckboxes.includes(value)) {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((checkboxId) => checkboxId !== value)
      )
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, value])
    }
  }
  const handleChipClick = (value) => {
    setSelectedCheckboxes(
      selectedCheckboxes.filter((checkboxId) => checkboxId !== value)
    )
  }
  const filteredData = filterData.options?.filter(({ label }) =>
    label.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div>
      <FilterHeader onClick={handleToggle}>
        {open === false ? <BiChevronDown /> : <BiChevronUp />}
        <FilterTitle>{filterData.displayName}</FilterTitle>
      </FilterHeader>
      {open && (
        <Filter>
          {selectedCheckboxes.length > 0 && (
            <ChipContainer>
              {selectedCheckboxes.map((value) => (
                <DefaultChip
                  key={value}
                  onClick={() => handleChipClick(value)}
                  label={
                    filterData.options?.find(
                      ({ value: checkboxId }) => checkboxId === value
                    )?.label
                  }
                  icon={<AiOutlineCloseCircle />}
                />
              ))}
            </ChipContainer>
          )}
          <div style={{ width: '100%' }}>
            <InputField
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <FilterOptions>
              {filteredData?.map(({ value, label }) => (
                <div key={value}>
                  <label>
                    <BaseCheck
                      name={label}
                      value={value}
                      checked={selectedCheckboxes.includes(value)}
                      onChange={handleCheckboxChange}
                    />
                    {label}
                  </label>
                </div>
              ))}
            </FilterOptions>
          </div>
        </Filter>
      )}
    </div>
  )
}
