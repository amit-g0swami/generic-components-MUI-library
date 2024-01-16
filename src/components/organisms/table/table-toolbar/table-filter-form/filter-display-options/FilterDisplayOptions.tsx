import React from 'react'
import { IFiltersProps } from '../../table-filter.interfaces'
import { TableBooleanInput } from '../table-filters/TableBooleanInput'
import { TableFilterInput } from '../table-filters/TableFilterInput'
import { TableMultiSelectCheckBox } from '../table-filters/TableMultiSelectCheckBox'
import { TableMultiSelect } from '../table-filters/TableMultiSelect'
import { FILTER_TYPE } from '../../../table.interfaces'

export const FilterDisplayOptions: React.FC<IFiltersProps> = ({
  filterData
}) => {
  return (
    <div>
      {filterData.type === FILTER_TYPE.STRING && (
        <TableFilterInput filterData={filterData} />
      )}
      {filterData.type === FILTER_TYPE.LIST_OF_STRING && (
        <TableMultiSelectCheckBox filterData={filterData} />
      )}
      {filterData.type === FILTER_TYPE.BOOLEAN && (
        <TableBooleanInput filterData={filterData} />
      )}
      {filterData.type === FILTER_TYPE.MULTISELECT && (
        <TableMultiSelect filterData={filterData} />
      )}
    </div>
  )
}
