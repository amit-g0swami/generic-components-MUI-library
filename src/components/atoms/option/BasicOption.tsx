import React from 'react'
import styled from 'styled-components'
import { IOptionProps } from './option.interface'

const BasicOptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  .basic__option__div {
    padding: 10px;
    border-radius: 100px;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background: rgba(255, 26, 61, 0.1);
    }

    &:focus {
      border: 1px solid #33050c;
    }
  }

  .basic__option__h3 {
    height: 17px;
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #555555;
    margin: 0px;
  }

  .basic__option__data {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #49454f;
  }
`

export const BasicOption = ({
  value,
  handleClick,
  userIcon,
  data,
  border,
  width
}: IOptionProps) => {
  return (
    <BasicOptionWrapper
      style={{ borderBottom: `${border}`, width: `${width}` }}
      onClick={handleClick}
    >
      <div className="basic__option__div">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {userIcon}
          <h3 className="basic__option__h3">{value}</h3>
        </div>
        <div className="basic__option__data">{data}</div>
      </div>
    </BasicOptionWrapper>
  )
}
