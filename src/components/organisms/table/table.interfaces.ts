import { Dispatch, ReactNode, SetStateAction } from 'react'

export enum FILTER_TYPE {
  STRING = 'string',
  LIST_OF_STRING = 'list_of_string',
  REGEX = 'regex',
  DATE = 'date',
  DATE_RANGE = 'date_range',
  DATETIME = 'datetime',
  DATETIME_RANGE = 'datetime_range',
  NUMBER = 'number',
  LIST_OF_NUMBERS = 'list_of_numbers',
  NUMERIC_RANGE = 'numeric_range',
  BOOLEAN = 'boolean',
  MULTISELECT = 'multiSelect'
}
export interface IColumnData {
  title: string
  key: string
  render?: () => ReactNode
  comparedValues?: [any, any]
}
export interface IFilterOption {
  label: string
  value: string
}
export interface IDefinedFilters {
  name: string
  type: FILTER_TYPE
  displayName: string
  options?: IFilterOption[]
}
export interface IDefinedSorts {
  name: string
  displayName: string
}
export interface ITableComponentProps {
  column: IColumnData[]
  baseUrl: string
  definedFilters: IDefinedFilters[]
  definedSorts: IDefinedSorts[]
  rowsPerPageOptions: number[]
  handleEdit: (rowData: IRowData) => void
  fetchData: (queryString: string) => IRowData[]
}
export interface ITableHeader {
  column: IColumnData[]
}
export interface IRowData {
  body: string
  email: string
  id: number
  name: string
  postId: number
}
export interface ITableBody {
  column: IColumnData[]
  rows: IRowData[]
  handleEdit: (rowData: IRowData) => void
}
export interface ITableCell {
  col: IColumnData
  rowId: string
  rowData: IRowData
}
export interface ITableFooter {
  page: number
  pageLimit: number
  perPageOptions: number[]
  setPage: Dispatch<SetStateAction<number>>
  setPageLimit: Dispatch<SetStateAction<number>>
}
export interface IAppliedFilter {
  filter: IDefinedFilters
  value: string | boolean | number
}
export interface IAppliedSort {
  [key: string]: 'asc' | 'desc'
}
