import React, { useState } from 'react'

import { createStage, checkBorder } from '../gameHelper'

import Stage from './stage'
import Display from './display'
import StartButton from './startButton'
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'
import { useInterval } from '../hooks/useInterval'
import { StyledIndexWrapper } from './styles/StyledIndex'
import { StyledTetris } from './styles/StyledTetris'

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer()
  const [stage, setStage] = useStage(player, resetPlayer)
  console.log('re-render')

  const movePlayer = (xpos) => {
    if (!checkBorder(player, stage, { x: xpos, y: 0 })) {
      updatePlayerPosition({ x: xpos, y: 0 })
    }
  }
  const startGame = () => {
    setStage(createStage())
    resetPlayer()
    setGameOver(false)
  }

  const drop = () => {
    if (!checkBorder(player, stage, { x: 0, y: 1 })) {
      updatePlayerPosition({ x: 0, y: 1, collided: false })
    } else {
      if (player.position.y < 1) {
        console.log('game over')
        setGameOver(true)
        setDropTime(null)
      }
      updatePlayerPosition({ x: 0, y: 0, collided: true })
    }
  }

  const dropPlayer = () => {
    drop()
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1)
      } else if (keyCode === 39) {
        movePlayer(1)
      } else if (keyCode === 40) {
        dropPlayer()
      } else if (keyCode === 38) {
        playerRotate(stage, 1)
      }
    }
  }

  useInterval(() => {
    drop()
  }, dropTime)

  return (
    <StyledIndexWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </>
          )}
          <StartButton startbutton={startGame} />
        </aside>
      </StyledTetris>
    </StyledIndexWrapper>
  )
}

export default Tetris
