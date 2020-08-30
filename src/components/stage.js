import React from 'react'
import Cell from './cell'
import { StyledStage } from './styles/StyledStage'

const Stage = ({ stage }) => {
  return (
    <StyledStage width={stage[2].length} height={stage.length}>
      {stage.map((row) =>
        row.map((cell, x) => {
          return <Cell key={x} type={cell[0]} />
        })
      )}
    </StyledStage>
  )
}

export default Stage
