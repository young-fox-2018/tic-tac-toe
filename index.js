function ticTacToe(size) {
    let board = []
    let countX = 5
    let countO = 5
    let value = 'XO'
    for (let i = 0; i < size; i++) {
        let inner = []
        for (let j = 0; j < size; j++) {
            let random = Math.floor(Math.random() * value.length)
            if (value[random] === 'X' && countX > 0) {
                inner.push(value[random])
                countX--
            } else if (value[random] === 'O' && countO > 0) {
                inner.push(value[random])
                countO--
            } else {
                if (countX === 0) {
                    inner.push('O')
                } else if (countO === 0) {
                    inner.push('X')
                }
            }
        }
        board.push(inner)
    }
    console.log(`[${board[0]}] \n[${board[1]}] \n[${board[2]}]`)
    let winnerX = 0
    let winnerO = 0
    let result = ''
    for (let i = 0; i < board.length - 2; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (checkWinnerX(board[i][j]) && checkWinnerX(board[i][j + 1]) && checkWinnerX(board[i][j + 2])) {
                winnerX++
                result = `The winner is X`
            }
            if (checkWinnerO(board[i][j]) && checkWinnerO(board[i][j + 1]) && checkWinnerO(board[i][j + 2])) {
                winnerO++
                result = `The winner is O`
            }
            if (checkWinnerX(board[i + 1][j]) && checkWinnerX(board[i + 1][j + 1]) && checkWinnerX(board[i + 1][j + 2])) {
                winnerX++
                result = `The winner is X`
            }
            if (checkWinnerO(board[i + 1][j]) && checkWinnerO(board[i + 1][j + 1]) && checkWinnerO(board[i + 1][j + 2])) {
                winnerO++
                result = `The winner is O`
            }
            if (checkWinnerX(board[i + 2][j]) && checkWinnerX(board[i + 2][j + 1]) && checkWinnerX(board[i + 2][j + 2])) {
                winnerX++
                result = `The winner is X`
            }
            if (checkWinnerO(board[i + 2][j]) && checkWinnerO(board[i + 2][j + 1]) && checkWinnerO(board[i + 2][j + 2])) {
                winnerO++
                result = `The winner is O`
            }
            else {
                if (checkWinnerX(board[i][j]) && checkWinnerX(board[i + 1][j]) && checkWinnerX(board[i + 2][j])) {
                    winnerX++
                    result = `The winner is X`
                }
                if (checkWinnerO(board[i][j]) && checkWinnerO(board[i + 1][j]) && checkWinnerO(board[i + 2][j])) {
                    winnerO++
                    result = `The winner is O`
                } else {
                    if (checkWinnerX(board[i][j]) && checkWinnerX(board[i + 1][j + 1]) && checkWinnerX(board[i + 2][j + 2])) {
                        winnerX++
                        result = `The winner is X`
                    }
                    if (checkWinnerO(board[i][j]) && checkWinnerO(board[i + 1][j + 1]) && checkWinnerO(board[i + 2][j + 2])) {
                        winnerO++
                        result = `The winner is O`
                    }
                    if (checkWinnerX(board[i][j + 2]) && checkWinnerX(board[i + 1][j + 1]) && checkWinnerX(board[i + 2][j])) {
                        winnerX++
                        result = `The winner is X`
                    }
                    if (checkWinnerO(board[i][j + 2]) && checkWinnerO(board[i + 1][j + 1]) && checkWinnerO(board[i + 2][j])) {
                        winnerO++
                        result = `The winner is O`
                    }
                }
            }
        }
    }
    console.log(winnerX, winnerO)
    if (winnerO && winnerX) {
        result = `Draw`
    } else if (!winnerO && !winnerX) {
        result = `Draw, Random again`
    }
    return result
}
function checkWinnerX(player) {
    if (player === 'X') {
        return true
    }
    return false
}
function checkWinnerO(player) {
    if (player === 'O') {
        return true
    }
    return false
}
console.log(ticTacToe(3))