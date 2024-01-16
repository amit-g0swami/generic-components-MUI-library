import React from 'react'
import styled from 'styled-components'
import { PanelProps } from './panel.interface'

const PanelContainer = styled.div`
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-top: 8px;
`

export const Panel: React.FC<PanelProps> = (props) => {
  return (
    <PanelContainer>
      <h2>{props.title}</h2>
      {props.children}
    </PanelContainer>
  )
}
