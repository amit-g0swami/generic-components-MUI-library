import React from 'react'
import { Panel } from '../../src/components'

export default {
  title: 'UI/Atoms/Panel',
  component: Panel
}

export const DefaultPanel = () => (
  <Panel title="Panel Title">Panel Content</Panel>
)

DefaultPanel.storyName = 'Default Panel'
