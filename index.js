function ticTacToe(num) {
    const xo = [{
        x: 0
    },{
        o: 0
    }]
    let board = []
    for (let i = 0; i < num; i++) {
        let tmp = []
        for (let j = 0; j < num; j++) {
            if (xo[0].x === 5) {
                tmp.push('o')
            }
            else if (xo[1].o === 5) {
                tmp.push('x')
            }
            else{
                tmp.push(Object.keys(xo[Math.floor(Math.random() * 2)])[0])
            }
            if (tmp[j] === 'x') {
                xo[0].x += 1
            }
            else {
                xo[1].o += 1
            }
        }
        board.push(tmp)
    }
    return board
}
console.log(ticTacToe(3))