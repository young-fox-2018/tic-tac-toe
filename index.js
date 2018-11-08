function board(num){
    let result = []
    let limit = Math.ceil((num*num)/2)
    let xCounter = 0
    let oCounter = 0
    for (let i = 0; i < num; i++) {
        let arr = []
        for (let j = 0; j < num; j++) {
            let random = Math.round(Math.random())
            if (random === 0 && xCounter < limit) {
                arr.push("X")
                xCounter++
            } else if (oCounter < limit) { // random 1 dan oCounter belum limit ATAU xcounter limit
                arr.push("O")
                oCounter++
            } else {
                arr.push("X") // random 1 tapi oCounter limit
                xCounter++
            }            
        }
        result.push(arr)
    }

    console.log(result.join("\n"))
    console.log("")

    let xWin = 0
    let oWin = 0
    for (let i = 0; i < num; i++) {
        let xHorizontalSame = 0
        let xVerticalSame = 0
        let xDiagonalSame = 0
        let oHorizontalSame = 0
        let oVerticalSame = 0
        let oDiagonalSame = 0

        for (let j = 0; j < num; j++) {
            if (result[i][j] === "X") xHorizontalSame++
            else oHorizontalSame++

            if (result[j][i] === "X") xVerticalSame++
            else oVerticalSame++

            if (i === 0) {
                if (result[i+j][j] === "X") xDiagonalSame++
                else oDiagonalSame++
            }

            if (i === num-1) {
                if (result[i-j][j] === "X") xDiagonalSame++
                else oDiagonalSame++
            }
            
        }
        if (xHorizontalSame === num || xVerticalSame === num || xDiagonalSame === num) xWin++
        if (oHorizontalSame === num || oVerticalSame === num || oDiagonalSame === num) oWin++
    }

    if (xWin > 0 && oWin > 0) return "it's a draw!"
    if (xWin > oWin) return "X win!" // kalo oWin = 0 & xWin diatas 0
    if (oWin > xWin) return "O win!" // kalo xWin = 0 & oWin diatas 0
    // kalo oWin & xWin = 0
    if (xCounter > oCounter) return "X win!" 
    if (oCounter > xCounter) return "O win!"
    else return "it's a draw!" // kalo counter jumlahnya sama
}

console.log(board(3))