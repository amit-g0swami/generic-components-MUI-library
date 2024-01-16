import React, { useState } from 'react'
import styled from 'styled-components'
import { GrAscend, GrDescend } from 'react-icons/gr'
import { RadioButton } from '../../../../atoms'
import { ITableSort } from '../table-filter.interfaces'

const TableFilter = styled.div`
  display: flex;
  gap: 10px;
`

const TableFilterSortContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: relative;
  align-items: center;
`

const TableFilterSortInputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`

const TableFilterSortBy = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #000000;
`

const TableFilterSort = styled.div`
  position: absolute;
  overflow-y: auto;
  top: 40px;
  left: -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  width: 190px;
  height: 124px;
  background: #ffffff;
  border: 1px solid #f8f8f8;
  box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.12);
  margin: 10px;
  padding: 10px;
`

const TableFilterToggle = styled.div`
  margin-left: 10px;
`

export const TableSort: React.FC<ITableSort> = ({ ...props }) => {
  const [isSortOpen, setIsSortOpen] = useState(false)

  const handleSortInputChange = (name: string, direction?: 'asc' | 'desc') => {
    props.setAppliedSorts(() => {
      const newValues = {}
      if (direction) {
        newValues[name] = direction
      }
      return newValues
    })
    setIsSortOpen(false)
  }

  return (
    <TableFilter>
      <TableFilterSortContainer>
        <TableFilterSortBy
          onClick={() => setIsSortOpen((sortOpen) => !sortOpen)}
        >
          Sort By
          {/* <button onClick={() => setAppliedSorts({})}>Clear Sorts</button> */}
        </TableFilterSortBy>
        {isSortOpen && (
          <TableFilterSort>
            {props.definedSorts.map((sort) => (
              <TableFilterSortInputs key={sort.name}>
                <div style={{ width: '130px' }}>
                  <RadioButton
                    checked={!!props.appliedSorts[sort.name]}
                    onChange={(e) =>
                      handleSortInputChange(
                        sort.name,
                        e.target.checked ? 'asc' : undefined
                      )
                    }
                  />
                  {sort.displayName}
                </div>
                {!!props.appliedSorts[sort.name] && (
                  <TableFilterToggle
                    onClick={() =>
                      handleSortInputChange(
                        sort.name,
                        props.appliedSorts[sort.name] === 'asc' ? 'desc' : 'asc'
                      )
                    }
                  >
                    {props.appliedSorts[sort.name] === 'asc' ? (
                      <GrAscend />
                    ) : (
                      <GrDescend />
                    )}
                  </TableFilterToggle>
                )}
              </TableFilterSortInputs>
            ))}
          </TableFilterSort>
        )}
      </TableFilterSortContainer>
    </TableFilter>
  )
}
