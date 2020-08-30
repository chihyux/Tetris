import React from 'react'
import { StyledButton } from './styles/StyledButton'

const StartButton = ({ startbutton }) => {
  return <StyledButton onClick={startbutton}>Start Game</StyledButton>
}

export default StartButton
