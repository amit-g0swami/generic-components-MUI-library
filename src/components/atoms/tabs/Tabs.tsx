import React, { useState } from 'react'
import styled from 'styled-components'
import { TabsProps } from './tabs.interface'

const TabList = styled.ul`
  display: flex;
  background-color: #f0f0f0;
  gap: 12px;
  padding-left: 16px;
`

const TabItem = styled.li<{ selected: boolean }>`
  cursor: pointer;
  height: 48px;
  display: flex;
  align-items: center;
  ${({ selected }) =>
    selected
      ? 'color: #ff5722; border-bottom: 2px solid #ff5722;'
      : 'color: #757575;'}
`

const TabContent = styled.div`
  margin-top: 16px;
`

export const Tabs: React.FC<TabsProps> = ({
  selected: initialSelected = 0,
  children
}) => {
  const [selected, setSelected] = useState<number>(initialSelected)

  const handleChange = (index: number) => {
    setSelected(index)
  }

  return (
    <>
      <TabList>
        {React.Children.map(
          children as React.ReactElement[],
          (elem: React.ReactElement, index: number) => (
            <TabItem
              key={index}
              selected={index === selected}
              onClick={() => handleChange(index)}
            >
              {elem.props.title}
            </TabItem>
          )
        )}
      </TabList>
      <TabContent>{React.Children.toArray(children)[selected]}</TabContent>
    </>
  )
}
