import React from 'react'
import styled, { keyframes } from 'styled-components'

interface CircleProps {
  delay: number
}

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #fff;
  display: flex;
`

const LoaderContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
`

const jump = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-7px);
  }
  50% {
    transform: translateY(-15px);
  }
  75% {
    transform: translateY(-7px);
  }
  100% {
    transform: translateY(0px);
  }
`

const Circle = styled.div<CircleProps>`
  animation: ${jump} 1s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`

const CircleA = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 12px solid #ff1a3d;
  margin: 12.39px;
`

const CircleB = styled.div`
  width: 13.73px;
  height: 13.73px;
  background: #00cfce;
  border-radius: 50%;
`

const CircleC = styled.div`
  width: 13.56px;
  height: 13.06px;
  background: #fdb933;
  margin: 12.39px;
`

export const Loader = () => {
  return (
    <Container>
      <LoaderContainer>
        <Circle delay={0}>
          <CircleA />
        </Circle>
        <Circle delay={0.2}>
          <CircleB />
        </Circle>
        <Circle delay={0.4}>
          <CircleC />
        </Circle>
      </LoaderContainer>
    </Container>
  )
}
