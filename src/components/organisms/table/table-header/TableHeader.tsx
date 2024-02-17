import React from 'react'
import { ITableHeader } from '../table.interfaces'

export const TableHeader: React.FC<ITableHeader> = ({
  ...props
}: ITableHeader) => {
  return (
    <thead>
      <tr>{props.column?.map((i) => <td key={i.key}>{i.title}</td>)}</tr>
    </thead>
  )
}
