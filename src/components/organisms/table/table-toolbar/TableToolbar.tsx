import React from 'react'
import styled from 'styled-components'
import { ITableToolbar } from './table-filter.interfaces'
import { TableFilter } from './table-filter/TableFilter'
import { TableSort } from './table-sort/TableSort'

const StyledTableFilters = styled.div`
  display: flex;
  gap: 20px;
`

export const TableToolbar: React.FC<ITableToolbar> = ({ ...props }) => {
  return (
    <StyledTableFilters>
      <TableSort
        definedSorts={props.definedSorts}
        appliedSorts={props.appliedSorts}
        setAppliedSorts={props.setAppliedSorts}
      />
      <TableFilter
        definedFilters={props.definedFilters}
        appliedFilters={props.appliedFilters}
        setAppliedFilters={props.setAppliedFilters}
      />
    </StyledTableFilters>
  )
}
