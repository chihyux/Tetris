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
import { useGameStatus } from '../hooks/useGameStatus'

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer()
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer)
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  )

  const movePlayer = (xpos) => {
    if (!checkBorder(player, stage, { x: xpos, y: 0 })) {
      updatePlayerPosition({ x: xpos, y: 0 })
    }
  }
  const startGame = () => {
    setStage(createStage())
    setDropTime(1000)
    resetPlayer()
    setScore(0)
    setLevel(0)
    setRows(0)
    setGameOver(false)
  }

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1)
      setDropTime(1000 / (level + 1) + 200)
    }
    if (!checkBorder(player, stage, { x: 0, y: 1 })) {
      updatePlayerPosition({ x: 0, y: 1, collided: false })
    } else {
      if (player.position.y < 1) {
        setGameOver(true)
        setDropTime(null)
      }
      updatePlayerPosition({ x: 0, y: 0, collided: true })
    }
  }

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1))
      }
    }
  }

  const dropPlayer = () => {
    setDropTime(null)
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
    <StyledIndexWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </>
          )}
          <StartButton startbutton={startGame} />
        </aside>
      </StyledTetris>
    </StyledIndexWrapper>
  )
}

export default Tetris
