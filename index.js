function tic_tac_toe() {
    let board = []
    let moves = ["X", "O"]
    let X_counter = 0
    let O_counter = 0
    // let sum = X_counter + O_counter
    for (let i = 0; i < 3; i++) {
        let temp = []
        for (let j = 0; j < 3; j++) {
            let rand = Math.floor(Math.random() * moves.length)
            if (rand === 0 && X_counter === 5) {
                rand = 1
                temp.push(moves[rand])
            } else if (rand === 1 && O_counter === 5) {
                rand = 0
                temp.push(moves[rand])
            } else if (rand === 0) {
                X_counter += 1
                temp.push(moves[rand])
            } else {
                O_counter += 1
                temp.push(moves[rand])
            }
        }
        board.push(temp)
    }

    console.log(`
${board[0]}
${board[1]}
${board[2]}
`)
    let X = 0
    let O = 0
    X += (XCheck(board) + diagonalCheckX(board))
    O += (OCheck(board) + diagonalCheckO(board))
    if (X > O) {
        return `X has won the game!`
    } else if (O > X) {
        return `O has won the game!`
    } else if (X === O && X > 0 && O > 0) {
        if (X_counter > O_counter) {
            return `X has won the game!`
        } else { 
            return `O has won the game`
        }
    } else {
        return `Nobody win the game!`
    }
}

function XCheck(board) {
    let result = 0
    for (let i = 0; i < board.length; i++) {
        if ((board[i][0] === "X" && board[i][1] === "X" && board[i][2] === "X") === true) {
            result += 1
        }
        if ((board[0][i] === "X" && board[1][i] === "X" && board[2][i] === "X") === true) {
            result += 1
        }
    }
    return result
}
function OCheck(board) {
    let result = 0
    for (let i = 0; i < board.length; i++) {
        if ((board[i][0] === "O" && board[i][1] === "O" && board[i][2] === "O") === true) {
            result += 1
        }
        if ((board[0][i] === "O" && board[1][i] === "O" && board[2][i] === "O") === true) {
            result += 1
        }
    }
    return result
}
function diagonalCheckX(board) {
    let result = 0
    if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
        result += 1
    }
    if (board[2][0] === "X" && board[1][1] === "X" && board[0][2] === "X") {
        result += 1
    }
    return result
}

function diagonalCheckO(board) {
    let result = 0
    if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
        result += 1
    }
    if (board[2][0] === "O" && board[1][1] === "O" && board[0][2] === "O") {
        result += 1
    }
    return result
}

console.log(tic_tac_toe())