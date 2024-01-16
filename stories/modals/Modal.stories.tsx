import React, { useState } from 'react'
import { Modal } from '../../src/components'

export default {
  title: 'UI/Atoms/Modal',
  component: Modal
}

export const Default = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isModalOpen={isModalOpen} closeModal={handleClose}>
        <h4 style={{ margin: '0px' }}>Modal Content</h4>
        <p style={{ margin: '0px' }}>This is the content of the modal.</p>
      </Modal>
    </div>
  )
}
