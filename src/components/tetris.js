import React from 'react'

import Stage from './stage'
import Display from './display'
import StartButton from './startButton'
import { createStage } from '../gameHelper'

const Tetris = () => {
    return (
        <div>Tetris
        <Stage stage={createStage()} />
        <aside>
            <>
           <Display text='Score'/>
           <Display text='Rows'/>
           <Display text='Level'/>
           </>
           <StartButton /> 
        </aside>
        </div>
    )
}

export default Tetris