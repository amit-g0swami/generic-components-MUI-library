import React from 'react'
import axios from 'axios'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DefaultSwitch, TableComponent } from '../../src/components'
import {
  FILTER_TYPE,
  IRowData
} from '../../src/components/organisms/table/table.interfaces'

export default {
  title: 'UI/Table/Table',
  component: TableComponent
} as ComponentMeta<typeof TableComponent>

const Template: ComponentStory<typeof TableComponent> = (args) => (
  <TableComponent {...args} />
)

export const TableComponents = Template.bind({})

const column = [
  { title: 'Id', key: 'id' },
  {
    title: 'Post Id',
    key: 'postId',
    comparedValues: ['postId', 1],
    render: ({ col, rowData }) => (
      <DefaultSwitch
        checked={rowData[col.comparedValues?.[0]] === col.comparedValues?.[1]}
        onChangeValue={() => handleSwitch(rowData)}
      />
    )
  },
  {
    title: 'Email',
    key: 'email'
  },
  { title: 'Name', key: 'name' }
]

const definedFilters = [
  {
    name: 'name',
    type: FILTER_TYPE.STRING,
    displayName: 'Name'
  },
  {
    name: 'department',
    type: FILTER_TYPE.LIST_OF_STRING,
    displayName: 'Department',
    options: [
      { label: 'Account', value: 'account' },
      { label: 'Customer Care', value: 'customerCare' },
      { label: 'Finance', value: 'finance' }
    ]
  },
  {
    name: 'status',
    type: FILTER_TYPE.BOOLEAN,
    displayName: 'Status'
  },
  {
    name: 'email',
    type: FILTER_TYPE.STRING,
    displayName: 'Email'
  },
  {
    name: 'addOn',
    type: FILTER_TYPE.MULTISELECT,
    displayName: 'MultiSelect Add On Filter',
    options: [
      { label: 'Account', value: 'account' },
      { label: 'Some', value: 'some' },
      { label: 'Finance', value: 'finance' }
    ]
  }
]

const definedSorts = [
  {
    name: 'email',
    displayName: 'Email'
  },
  {
    name: 'name',
    displayName: 'Name'
  },
  {
    name: 'postId',
    displayName: 'Post Id'
  }
]

const baseUrl = 'https://jsonplaceholder.typicode.com/comments'

const rowsPerPageOptions = [10, 20, 50, 100]

const handleEdit = (data) => {
  console.log('edit', data)
}

const handleSwitch = (data) => {
  console.log('switch', data)
}

const fetchData = async (query: string): Promise<IRowData[]> => {
  const response = await axios.get(query)
  const data: IRowData[] = response.data
  return data
}

TableComponents.args = {
  column: column,
  baseUrl: baseUrl,
  definedFilters: definedFilters,
  definedSorts: definedSorts,
  rowsPerPageOptions: rowsPerPageOptions,
  handleEdit: handleEdit,
  fetchData: fetchData
}
