import React, { useState } from 'react'
import styled from 'styled-components'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { ITableFooter } from '../table.interfaces'

const Pagination = styled.tfoot`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0px;
`

const Rows = styled.tr`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`

const RowsPerPage = styled.select`
  padding: 10px;
`

const Page = styled.tr`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

const Count = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 29px;
  height: 34px;
  border: 1px solid #000000;
  border-radius: 3px;
`

export const TableFooter: React.FC<ITableFooter> = ({
  page,
  setPage,
  pageLimit,
  setPageLimit,
  perPageOptions
}) => {
  const [rowsPerPageOptions] = useState(perPageOptions)

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value, 10)
    setPageLimit(selectedValue)
  }

  const handlePageChange = (type: string) => {
    setPage((prevPage: number) => {
      let newPage
      if (type === 'i') {
        newPage = prevPage + 1
      } else {
        newPage = prevPage === 1 ? prevPage : prevPage - 1
      }
      return newPage
    })
  }

  return (
    <Pagination>
      <Rows>
        <td>View</td>
        <td>
          <RowsPerPage value={pageLimit} onChange={handleOptionChange}>
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </RowsPerPage>
        </td>
        <td>per page</td>
      </Rows>
      <Page>
        <td>Page</td>
        <td onClick={() => handlePageChange('d')} style={{ cursor: 'pointer' }}>
          <GrPrevious />
        </td>
        <td>
          <Count>{page}</Count>
        </td>
        <td onClick={() => handlePageChange('i')} style={{ cursor: 'pointer' }}>
          <GrNext />
        </td>
        <td>of 10,000 pages</td>
      </Page>
    </Pagination>
  )
}
