export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
    let setColumns = []
    let setRows = Array(STAGE_WIDTH)
    for (var i = 0; i< STAGE_HEIGHT; i++) {
        setColumns.push(setRows.fill([0,'clear']))
    }
    return setColumns;
}


