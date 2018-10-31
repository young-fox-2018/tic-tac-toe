function  tictactoe () {
    let board = []
    for (let i = 0; i < 3; i++) {
        board.push([])
    }
    
    let counterX = 0
    let counterO = 0
    for (let j = 0; j < 9; j++) {
        let x = position()
        let y = position()
        while (board[x][y] !== undefined) {
            x = position()
            y = position()
        }

        let bidak = randomXO()

        if (bidak === 0) {
            if (counterO < 5) {
                board[x][y] = 'O'
                counterO++
            } else {
                board[x][y] = 'X'
            }
        } else {
            if (counterX < 5) {
                board[x][y] = 'X'
                counterX++
            }else {
                board[x][y] = 'O'
            }
        }
    }
    return board
}

function randomXO () {
    let XO = Math.floor(Math.random()*2)
    return XO
}

function position () {
    let pos = Math.floor(Math.random()*3)
    return pos
}

console.log(tictactoe())