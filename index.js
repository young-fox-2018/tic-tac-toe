function tictactoe() {
    const xo = 'XO'
    let counterX = 0
    let counterO = 0
    let board = []
    for (let i = 0; i < 3; i++) {
        let arr = []
        for (let j = 0; j < 3; j++) {
            const random = Math.floor(Math.random() * xo.length)
            if (xo[random] === 'X') {
                counterX += 1
                if (counterX < 5) {
                    arr.push(xo[random])
                }
                else {
                    arr.push('O')
                }
            }
            else if (xo[random] === 'O') {
                counterO += 1
                if (counterO < 5) {
                    arr.push(xo[random])
                }
                else {
                    arr.push('X')
                }
            }
        }
        board.push(arr)
    }
    return board
}

function winner(game) {

    let scoreX = 0
    let scoreO = 0
    for (let i = 0; i < game.length; i++) {
        if (i === 0) {
            // horizontal check
            if(game[i][0] === 'X' && game[i][1] === 'X' && game[i][2] === 'X') scoreX += 1
            if(game[i][0] === 'O' && game[i][1] === 'O' && game[i][2] === 'O') scoreO += 1

            // vertical check
            if(game[0][i] === 'X' && game[1][i] === 'X' && game[2][i] === 'X') scoreX += 1
            if(game[0][i] === 'O' && game[1][i] === 'O' && game[2][i] === 'O') scoreO += 1

            // diagonal check
            if(game[i][0] === 'X' && game[i + 1][1] === 'X' && game[i + 2][2] === 'X') scoreX += 1
            if(game[i][0] === 'O' && game[i + 1][1] === 'O' && game[i + 2][2] === 'O') scoreX += 1
        }
        else if (i === 2) {
                // horizontal check
                if(game[i][0] === 'X' && game[i][1] === 'X' && game[i][2] === 'X') scoreX += 1
                if(game[i][0] === 'O' && game[i][1] === 'O' && game[i][2] === 'O') scoreO += 1
    
                // vertical check
                if(game[0][i] === 'X' && game[1][i] === 'X' && game[2][i] === 'X') scoreX += 1
                if(game[0][i] === 'O' && game[1][i] === 'O' && game[2][i] === 'O') scoreO += 1
    
                // diagonal check
                if(game[i][0] === 'X' && game[i - 1][1] === 'X' && game[i - 2][2] === 'X') scoreX += 1
                if(game[i][0] === 'O' && game[i - 1][1] === 'O' && game[i - 2][2] === 'O') scoreX += 1
        }
        else {
            // horizontal check
            if(game[i][0] === 'X' && game[i][1] === 'X' && game[i][2] === 'X') scoreX += 1
            if(game[i][0] === 'O' && game[i][1] === 'O' && game[i][2] === 'O') scoreO += 1

            // vertical check
            if(game[0][i] === 'X' && game[1][i] === 'X' && game[2][i] === 'X') scoreX += 1
            if(game[0][i] === 'O' && game[1][i] === 'O' && game[2][i] === 'O') scoreO += 1
        }
    }
    console.log(`X vs O
${scoreX} vs ${scoreO}`)
    if (scoreX > scoreO) {
        return 'X Win!'
    }
    else if (scoreX < scoreO) {
        return 'O Win!'
    }
    else {
        return 'Draw'
    }
}

let array = tictactoe()
console.log(array.join('\n'))
console.log('')
console.log(winner(array))