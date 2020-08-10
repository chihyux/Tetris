import React from 'react'

import Stage from './stage'
import Display from './display'
import StartButton from './startButton'
import { createStage } from '../gameHelper'
import { StyledIndexWrapper } from './styles/StyledIndex'
import { StyledTetris } from './styles/StyledTetris'

const Tetris = () => {
    return (
        <StyledIndexWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <>
                <Display text='Score'/>
                <Display text='Rows'/>
                <Display text='Level'/>
                    </>
                <StartButton /> 
                </aside>
            </StyledTetris>
        </StyledIndexWrapper>
    )
}

export default Tetris