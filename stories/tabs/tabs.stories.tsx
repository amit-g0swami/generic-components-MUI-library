import React from 'react'
import { Container, Panel, Tabs } from '../../src/components'

export default {
  title: 'UI/Atoms/Tabs',
  component: Tabs
}

export const DefaultTabs = () => (
  <Container className="container">
    <Tabs>
      <Panel title="Tab 1">Content for Tab 1</Panel>
      <Panel title="Tab 2">Content for Tab 2</Panel>
    </Tabs>
  </Container>
)

DefaultTabs.storyName = 'Default Tabs'
