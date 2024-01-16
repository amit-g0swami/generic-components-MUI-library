import React from 'react'
import styled from 'styled-components'
import { IOptionProps } from './option.interface'

const MenuOptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
  height: 37px;
  width: 100%;
  cursor: pointer;
  border-bottom: 0.3px solid #d6d6d7;

  & .menu__option__h3 {
    height: 17px;
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #555555;
    margin: 0px;
  }

  & .menu__option__div {
    display: flex;
    gap: 13px;
  }

  & .upIcon {
    transform: rotate(40deg);
    margin-right: 10px;
  }
`

export const MenuOption = ({
  value,
  userIcon,
  upIcon,
  handleClick,
  width
}: IOptionProps) => {
  return (
    <MenuOptionWrapper style={{ width: `${width}` }} onClick={handleClick}>
      <div className="menu__option__div">
        {userIcon}
        <h3 className="menu__option__h3">{value}</h3>
      </div>
      <div className="upIcon">{upIcon}</div>
    </MenuOptionWrapper>
  )
}

export default MenuOption
