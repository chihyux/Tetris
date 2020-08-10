export const TETROMINOS = {
    0: {
        shape: [[0]],
        color: '0, 0, 0'
    },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '80, 227, 230'
    },
    J: {
        shape: [
            [0, 'J', 0, 0],
            [0, 'J', 0, 0],
            [0, 'J', 0, 0],
            ['J', 'J', 0, 0]
        ],
        color: '36, 95, 223'
    },
    L: {
        shape: [
            [0, 'L', 0, 0],
            [0, 'L', 0, 0],
            [0, 'L', 0, 0],
            [0, 'L', 'L', 'L']
        ],
        color: '223, 173, 36'
    },
    O: {
        shape: [
            [0, 'O', 'O', 0],
            ['O', 0, 0, 'O'],
            ['O', 0, 0, 'O'],
            [0, 'O', 'O', 0]
        ],
        color: '223, 217, 36'
    },
    S: {
        shape: [
            [0, 0, 'S', 'S'],
            [0, 'I', 0, 0],
            [0, 0, 'S', 0],
            ['S', 'S', 0, 0]
        ],
        color: '48, 211, 36'
    },
    T: {
        shape: [
            ['T', 'I', 'T'],
            [0, 'I', 0],
            [0, 'I', 0],
            [0, 'I', 0]
        ],
        color: '132, 61, 36'
    },
    Z: {
        shape: [
            ['Z', 'Z', 'Z', 0],
            [0, 0, 'Z', 0],
            [0, 'Z', 0, 0],
            ['Z', 'Z', 'Z', 0]
        ],
        color: '227, 78, 78'
    }
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ'
    const random = tetrominos[Math.floor(Math.random() * tetrominos.length)]
    return TETROMINOS[random]
}