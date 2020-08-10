import React from 'react'
import { StyledCell } from './styles/StyledCell'
import { TETROMINOS } from '../tetrominos'

const Cell = ({ type }) => {
    console.log('type',type)
    return (
        <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>
    )
}

export default Cell