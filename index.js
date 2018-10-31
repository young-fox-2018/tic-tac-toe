function ticTacToe(size) {
    let board = []
    let countX = 5
    let countO = 5
    let value = 'XO'
    let winnerO = 0
    let winnerX = 0
    let winner = ''
    for (let i = 0; i < size; i++) {
        let inner = []
        for (let j = 0; j < size; j++) {
            let random = Math.floor(Math.random() * value.length)
            if (value[random] === 'X' && countX > 0) {
                inner.push(value[random])
                countX--
                winnerX++
            } else if (value[random] === 'O' && countO > 0) {
                inner.push(value[random])
                countO--
                winnerO++
            } else {
                if (countX === 0) {
                    inner.push('O')
                } else if (countO === 0) {
                    inner.push('X')
                }
            }
        }
        board.push(inner)
        if (winnerX > winnerO) {
            winner = `The winner is player X`
        } else {
            winner = `The winner is player O`
        }
    }
    return `${board}: ${winner}`
}

console.log(ticTacToe(3))