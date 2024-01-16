import styled from '@emotion/styled'

const BaseChip = styled.div`
  border-radius: 8px;
  padding: 0px 12px;
  height: 32px;
  background: #f5f5f5;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  gap: 12px;
  font-family: 'Lato';
  font-style: normal;
  font-size: 14px;
  color: #49454f;
  & .MuiChip-root {
  }
  ,
  &:hover {
    outline: 1px solid #bdbdbd;
  }
  ,
  &:focus {
    border: 2px solid pink;
    box-shadow: 0px 0px 10px 5px pink;
  }
`

export default BaseChip
