function tic_tac_toe(row, col) {
    let params = ["X", "O"]
    let boards = [], X = 0, O = 0
    for (let i = 0; i < row; i++) {
        let inner = []
        for (let j = 0; j < col; j++) {
            let index = Math.floor(Math.random() * params.length)
            let XO = params[index]
            if (XO === "X") X++
            if (XO === "O") O++
            if (X > 4) inner.push("O")
            else if (O > 4) inner.push("X")
            else inner.push(XO)
        }
        boards.push(inner)
    }
    if (X > O) {
        console.log(boards);
        return " Pemenangnya O"
    }
    else {
        console.log(boards);
        return " Pemenangnya X"
    }

}
console.log(tic_tac_toe(3, 3));
