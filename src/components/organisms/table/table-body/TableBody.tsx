import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { IColumnData, IRowData, ITableBody } from '../table.interfaces'
import { TableCell } from './table-cell'

export const TableBody: React.FC<ITableBody> = ({ ...props }) => {
  const handleEditClick = (row: IRowData) => {
    props.handleEdit(row)
  }
  return (
    <tbody>
      {props.rows?.map((row) => (
        <tr key={row.id.toString()}>
          {props.column.map((col: IColumnData) => (
            <TableCell
              key={`${col.key}-${row.id}`}
              col={col}
              rowId={row.id.toString()}
              rowData={row}
            />
          ))}
          <td
            key={`${row.id}`}
            style={{
              width: '50px'
            }}
            onClick={() => handleEditClick(row)}
          >
            <CiEdit />
          </td>
        </tr>
      ))}
    </tbody>
  )
}
