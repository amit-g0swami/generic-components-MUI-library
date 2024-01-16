import React, { useState } from 'react'
import { ITableFilterForm } from '../table-filter.interfaces'
export const TableFilterFormContext = React.createContext({})

export const TableFilterForm: React.FC<ITableFilterForm> = ({ ...props }) => {
  const [values, setValues] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
    props.getFormData(values)
  }
  return (
    <TableFilterFormContext.Provider value={{ values, setValues }}>
      <form className={props.className} onSubmit={handleSubmit} id={props.id}>
        {props.children}
      </form>
    </TableFilterFormContext.Provider>
  )
}
