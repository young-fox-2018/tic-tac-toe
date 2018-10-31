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
    console.log("* GAME TIC-TAC-TOE *");
    console.log("+------------------+");

    console.log("+--+-+--+");
    console.log(`| ${boards[0]} | \n| ${boards[1]} |\n| ${boards[2]} |`);
    console.log("+--+-+--+");
    console.log(" ");

    let hasil = []
    for (let i = 0; i < boards.length; i++) {
        if (i === 0) {
            let patern = boards[i][0]
            if (boards[i][1] === patern && boards[i][2] === patern) hasil.push(patern)
            if (boards[i + 1][0] === patern && boards[i + 2][0] === patern) hasil.push(patern)
            if (boards[i + 1][1] === patern && boards[i + 2][2] === patern) hasil.push(patern)
        }
        else if (i === 2) {
            let patern = boards[i][0]
            if (boards[i][1] === patern && boards[i][2] === patern) hasil.push(patern)
            if (boards[i - 1][1] === patern && boards[i - 2][2] === patern) hasil.push(patern)
        }
        else {
            let patern = boards[i][0]
            if (boards[i][1] === patern && boards[i][2] === patern) hasil.push(patern)
            if (boards[i - 1][1] === boards[i][1] && boards[i + 1][1] === boards[i][1] && boards[i][1]) hasil.push(boards[i][1])
            if (boards[i - 1][2] === boards[i][2] && boards[i + 1][2] === boards[i][2] && boards[i][2]) hasil.push(boards[i][2])

        }
    }
    let winnerX = 0, winnerO = 0
    for (let i = 0; i < hasil.length; i++) {
        if (hasil[i] === "X") winnerX++
        if (hasil[i] === "O") winnerO++
    }
    console.log("X : " + winnerX);
    console.log("O : " + winnerO);
    console.log(" ");
    console.log("Status: ");



    if (winnerX > winnerO) {
        return "X is winner"
    }
    else if (winnerX === 0 && winnerO === 0) {
        if (X > O) return "O is winner"
        else return "X is winner"
    }
    else if (winnerX === winnerO) {
        return "Draw"
    }
    else if (winnerO > winnerX) {
        return "O is winner"
    }


}

console.log(tic_tac_toe(3, 3));
