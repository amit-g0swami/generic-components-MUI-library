import { Dispatch, SetStateAction } from 'react'
import {
  IDefinedFilters,
  IDefinedSorts,
  IAppliedFilter,
  IAppliedSort
} from '../table.interfaces'
export interface ITableToolbar {
  definedSorts: IDefinedSorts[]
  definedFilters: IDefinedFilters[]
  appliedSorts: IAppliedSort
  appliedFilters: IAppliedFilter[]
  setAppliedSorts: Dispatch<SetStateAction<IAppliedSort>>
  setAppliedFilters: Dispatch<SetStateAction<IAppliedFilter[]>>
}
export interface ITableSort {
  definedSorts: IDefinedSorts[]
  appliedSorts: IAppliedSort
  setAppliedSorts: Dispatch<SetStateAction<IAppliedSort>>
}
export interface ITableFilter {
  definedFilters: IDefinedFilters[]
  appliedFilters: IAppliedFilter[]
  setAppliedFilters: Dispatch<SetStateAction<IAppliedFilter[]>>
}
export interface ITableFilterForm {
  className?: string
  id?: string
  getFormData: any
  children?: React.ReactNode
}
export interface IFiltersProps {
  filterData: IDefinedFilters
}
