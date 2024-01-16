import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  FILTER_TYPE,
  IAppliedFilter,
  IAppliedSort,
  IRowData,
  ITableComponentProps
} from './table.interfaces'
import { TableToolbar } from './table-toolbar'
import { TableHeader } from './table-header'
import { TableBody } from './table-body'
import { TableFooter } from './table-footer'

const Table = styled.table`
  width: 100%;
  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  thead {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 56px;
    td {
      width: 102px;
      height: 24px;
      font-family: Lato;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.17px;
      color: rgba(0, 0, 0, 0.87);
    }
  }
  tbody {
    display: block;
    height: 480px;
    overflow: auto;
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.17px;
    tr > td {
      height: 42px;
    }
  }
`

export const TableComponent: React.FC<ITableComponentProps> = ({
  fetchData,
  ...props
}: ITableComponentProps) => {
  const [queryString, setQueryString] = useState<string>(props.baseUrl)
  const [appliedFilters, setAppliedFilters] = useState<IAppliedFilter[]>([])
  const [appliedSorts, setAppliedSorts] = useState<IAppliedSort>({})
  const [rows, setRows] = useState<IRowData[]>([])
  const [page, setPage] = useState<number>(1)
  const [pageLimit, setPageLimit] = useState<number>(10)

  const buildQuery = () => {
    let queryParams: string[] = []
    let filterQuery: string[] = []
    const queryFilterValues: { name: string; value: string }[] = []
    if (appliedFilters && appliedFilters.length > 0) {
      appliedFilters.map((filter: any) => {
        let filterValue: string
        switch (filter.filter.type) {
          case FILTER_TYPE.STRING:
          case FILTER_TYPE.NUMBER:
          case FILTER_TYPE.DATE:
          case FILTER_TYPE.DATETIME:
            filterValue = filter.value
            break
          case FILTER_TYPE.BOOLEAN:
            filterValue = filter.value
            break
          case FILTER_TYPE.REGEX:
            filterValue = `/${filter.value}/`
            break
          case FILTER_TYPE.LIST_OF_STRING:
          case FILTER_TYPE.LIST_OF_NUMBERS:
            const valuesArray = filter.value.split(',')
            valuesArray.sort()
            filterValue = valuesArray.join('|')
            break
          case FILTER_TYPE.NUMERIC_RANGE:
            const [min, max] = filter.value.split('-')
            filterValue = `${min}-${max}`
            break
          case FILTER_TYPE.DATE_RANGE:
          case FILTER_TYPE.DATETIME_RANGE:
            const [start, end] = filter.value.split(',')
            filterValue = `${start}-${end}`
            break
          default:
            filterValue = filter.value
        }
        queryFilterValues.push({
          name: filter.filter.name,
          value: filterValue
        })
        return queryFilterValues
      })

      queryFilterValues.sort((filter1, filter2) => {
        let f1 = filter1.name.toLowerCase(),
          f2 = filter2.name.toLowerCase()
        if (f1 < f2) {
          return -1
        }
        if (f1 > f2) {
          return 1
        }
        return 0
      })
      queryFilterValues.forEach((e) => {
        filterQuery.push(`${e.name}:${e.value}`)
      })
      if (filterQuery) {
        queryParams.push(`filters=${filterQuery.join(',')}`)
      }
    }

    let sortQuery = ''
    if (appliedSorts) {
      const sortedObj = Object.fromEntries(Object.entries(appliedSorts).sort())
      for (const [key, value] of Object.entries(sortedObj)) {
        sortQuery += `${key}:${value},`
      }
    }
    sortQuery = sortQuery.slice(0, -1)

    if (sortQuery) {
      queryParams.push(`sorts=${sortQuery}`)
    }

    if (page && page !== 1) {
      queryParams.push(`page=${page}`)
    }

    if (pageLimit && pageLimit !== 10) {
      queryParams.push(`limit=${pageLimit}`)
    }

    const newQueryString =
      queryParams.length > 0
        ? `${props.baseUrl}?${queryParams.join('&')}`
        : props.baseUrl
    setQueryString(newQueryString)
    return newQueryString
  }

  useEffect(() => {
    buildQuery()
    async function getData() {
      const fetchedData: IRowData[] = await fetchData(queryString)
      setRows(fetchedData)
    }
    getData()
  }, [queryString, appliedFilters, appliedSorts, page, pageLimit])

  return (
    <div>
      <TableToolbar
        definedFilters={props.definedFilters}
        definedSorts={props.definedSorts}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
        appliedSorts={appliedSorts}
        setAppliedSorts={setAppliedSorts}
      />
      <Table>
        <TableHeader column={props.column} />
        <TableBody
          rows={rows}
          column={props.column}
          handleEdit={props.handleEdit}
        />
        <TableFooter
          page={page}
          pageLimit={pageLimit}
          setPage={setPage}
          setPageLimit={setPageLimit}
          perPageOptions={props.rowsPerPageOptions}
        />
      </Table>
    </div>
  )
}
