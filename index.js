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
                if(counterO < 5) {
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

console.log(tictactoe())