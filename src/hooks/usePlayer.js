import { useState, useCallback } from 'react'
import { TETROMINOS, randomTetromino } from '../tetrominos'
import { STAGE_WIDTH, checkBorder } from '../gameHelper'

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  })

  const rotate = (matrix, dir) => {
    const rotatedTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    )
    if (dir > 0) return rotatedTetro.map((row) => row.reverse())
    return rotatedTetro.reverse()
  }

  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player))
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir)

    const pos = clonedPlayer.position.x
    let offset = 1
    while (checkBorder(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.position.x += offset
      offset = -(offset + (offset > 0 ? 1 : -1))
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir)
        clonedPlayer.position.x = pos
        return
      }
    }
    setPlayer(clonedPlayer)
  }

  const updatePlayerPosition = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      position: { x: (prev.position.x += x), y: (prev.position.y += y) },
      collided,
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      position: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    })
  }, [])
  return [player, updatePlayerPosition, resetPlayer, playerRotate]
}
