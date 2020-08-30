import styled from 'styled-components'

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 1rem;
  border: 3px solid #999;
  min-height: 30px;
  width: 100%;
  border-radius: 10px;
  color: ${(props) => (props.gameover ? 'red' : '#999')};
  font-family: Pixel, Arial;
  font-size: 0.8rem;
`
