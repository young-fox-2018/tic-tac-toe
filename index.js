function ticTacToe(size) {
    let board = []
    let countX = 5
    let countO = 5
    let value = 'XO'
    for (let i = 0; i < size; i++) {
        let inner = []
        for (let j = 0; j < size; j++) {
            let random = Math.floor(Math.random() * value.length)
            if (value[random] === 'X' && countX) {
                inner.push(value[random])
                countX--
            } else if (value[random] === 'O' && countO) {
                inner.push(value[random])
                countO--
            } else {
                if (!countX) {
                    inner.push('X')
                } else {
                    inner.push('O')
                }
            }
        }
        board.push(inner)
    }
    return board
}

console.log(ticTacToe(3))