import React, { useState } from 'react'
import styled from 'styled-components'
import { TableFilterForm } from '../table-filter-form/TableFilterForm'
import { FilterDisplayOptions } from '../table-filter-form/filter-display-options/FilterDisplayOptions'
import { DefaultButton, IconLabelButton } from '../../../../atoms'
import { BiFilterAlt } from 'react-icons/bi'
import { ITableFilter } from '../table-filter.interfaces'
import { IAppliedFilter } from '../../table.interfaces'

const FilterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Filter = styled.div`
  position: absolute;
  width: 293px;
  height: 287px;
  background: #ffffff;
  overflow-y: auto;
  top: 50px;
  padding: 0px;
  left: 0px;
  border: 1px solid #f8f8f8;
  box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.12);
  z-index: 1;
`

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TableFilter: React.FC<ITableFilter> = ({ ...props }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const setAppliedFilterValues = (
    values: Record<string, string | boolean | number>
  ) => {
    const appliedFilters: IAppliedFilter[] = []
    props.definedFilters.forEach((filter) => {
      const value = values[filter.name]
      if (value) {
        appliedFilters.push({ filter, value })
      }
    })
    props.setAppliedFilters(appliedFilters)
  }

  return (
    <FilterContainer>
      <IconLabelButton
        btnText={'Filters'}
        startIcon={BiFilterAlt}
        color={'primary'}
        size={'medium'}
        name={''}
        value={''}
        onClick={() => setIsFilterOpen((filterOpen) => !filterOpen)}
        btnLabel={
          props.appliedFilters.length !== 0 ? props.appliedFilters.length : ''
        }
      />
      {/* <button onClick={() => props.setAppliedFilters({})}>Clear Filters</button> */}
      <div>
        {isFilterOpen && (
          <Filter>
            <TableFilterForm getFormData={setAppliedFilterValues}>
              <FormHeader>
                <h4 style={{ margin: '10px' }}>Filters</h4>
                <DefaultButton
                  type="submit"
                  btnText="Apply"
                  color="primary"
                  size="small"
                  variant="text"
                  onClick={() => {}}
                />
              </FormHeader>
              {props.definedFilters.map((filterData, index) => (
                <InputContainer key={index}>
                  <FilterDisplayOptions filterData={filterData} />
                </InputContainer>
              ))}
            </TableFilterForm>
          </Filter>
        )}
      </div>
    </FilterContainer>
  )
}
