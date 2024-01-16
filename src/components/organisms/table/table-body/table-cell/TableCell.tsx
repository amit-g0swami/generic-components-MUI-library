import React from 'react'

export const TableCell = ({ col, rowId, rowData }) => {
  if (col.render) {
    const RenderComponent = col.render
    return (
      <td key={`${col.key}-${rowId}`}>
        <RenderComponent col={col} rowData={rowData} />
      </td>
    )
  } else {
    return <td key={`${col.key}-${rowId}`}>{rowData[col.key]}</td>
  }
}
