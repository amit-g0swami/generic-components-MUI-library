import React from 'react'
import { IOptionProps } from './option.interface'
import styled from 'styled-components'

const NotificationOptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: #ffffff;
  height: 70px;
`

const NotificationOptionUserIcon = styled.div`
  margin-top: -5px;
`

const NotificationOptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 392px;
  height: 80px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  gap: 10px;
  color: #000000;
  align-items: flex-start;
  text-align: left;
`

const NotificationOptionH3 = styled.h3`
  margin: 0px;
  height: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`

const NotificationOptionH6 = styled.h6`
  margin: 0px;
  height: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #aeaeae;
`

export const NotificationOption = ({
  userIcon,
  handleClick,
  data,
  value,
  width
}: IOptionProps) => {
  return (
    <NotificationOptionContainer
      onClick={handleClick}
      style={{ width: `${width}` }}
    >
      <NotificationOptionUserIcon>{userIcon}</NotificationOptionUserIcon>
      <NotificationOptionDiv>
        <NotificationOptionH3>{data}</NotificationOptionH3>
        <NotificationOptionH6>{value}</NotificationOptionH6>
      </NotificationOptionDiv>
    </NotificationOptionContainer>
  )
}
