const tic_tac_toe = () => {
    let board = [],
        idxWin = Math.floor(Math.random() * 2),
        values = 'XO',
        totalLose = 0
    for (let i = 0; i < 3; i++) {
        let line = []
        for (let j = 0; j < 3; j++) {
            let idxRdm = Math.floor(Math.random() * 2)
            if (idxRdm !== idxWin) totalLose++
            if (totalLose > 4) line.push(values[idxWin])
            else line.push(values[idxRdm])

        }
        board.push(line)
    }
    return board
}
console.log(tic_tac_toe())