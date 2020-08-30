export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export const createStage = () => {
  let setColumns = []
  let setRows = Array(STAGE_WIDTH)
  for (let i = 0; i < STAGE_HEIGHT; i++) {
    setColumns.push(setRows.fill([0, 'clear']))
  }
  return setColumns
}

export const checkBorder = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      if (player.tetromino[y][x] !== 0) {
        if (
          // check movement is inside the game height
          !stage[y + player.position.y + moveY] ||
          // check movement is inside the game width
          !stage[y + player.position.y + moveY][
            x + player.position.x + moveX
          ] ||
          // check cell isn't set to clean
          stage[y + player.position.y + moveY][
            x + player.position.x + moveX
          ][1] !== 'clear'
        ) {
          return true
        }
      }
    }
  }
}
