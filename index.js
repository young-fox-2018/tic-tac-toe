let row = 3
let column = 3

function createTicTacToeBoard() {
    let board = []
    
    for (let i = 0; i < row; i++) {
        let insideBoard = []

        for (let j = 0; j < column; j++) {
            insideBoard.push('T')
        }
        board.push(insideBoard)
    }
    return board
}

function fillTheBoard() {
    let board = createTicTacToeBoard()
    let xCounter = 0
    let oCounter = 0
    let randomNumber = 0

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            randomNumber = getRandomInt(2)
            
            if (oCounter - xCounter == 2) {
                board[i][j] = 'X'
                xCounter++
            } else if (xCounter - oCounter == 2) {
                board[i][j] = 'O'
                oCounter++
            } else if (randomNumber == 0) {
                board[i][j] = 'X'
                xCounter++
            } else if (randomNumber == 1) {
                board[i][j] = 'O'
                oCounter++
            }
        }
    }

    return board
}

function getRandomInt(maxNumber) {
    return Math.floor(Math.random() * Math.floor(maxNumber))
}


console.log(fillTheBoard())