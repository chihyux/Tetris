import styled from 'styled-components'

export const StyledButton = styled.div`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 1rem;
  min-height: 30px;
  width: 100%;
  border-radius: 10px;
  color: ${(props) => (props.gameOver ? 'red' : '#999')};
  font-family: Pixel, Arial;
  font-size: 1rem;
  background: #e4e4e4;
  outline: none;
  cursor: pointer;
  text-align: center;
  line-height: 1.5;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
`
