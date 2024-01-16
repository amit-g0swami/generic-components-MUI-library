import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IModalProps } from './modal.interface'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContainer = styled.div`
  width: auto;
  height: auto;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  &:hover {
    cursor: pointer;

    svg {
      color: #ff1a3d;
    }
  }
`

const CloseIcon = styled(AiOutlineCloseCircle)`
  color: #aeaeae;
  height: 25px;
  width: 25px;
`

export const Modal = ({ closeModal, isModalOpen, children }: IModalProps) => {
  const handleClick = () => {
    closeModal()
  }

  return (
    <div>
      {isModalOpen && (
        <ModalBackground>
          <ModalContainer>
            <TitleCloseBtn onClick={handleClick}>
              <CloseIcon />
            </TitleCloseBtn>
            <div>{children}</div>
          </ModalContainer>
        </ModalBackground>
      )}
    </div>
  )
}
