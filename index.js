function ticTacToe() {
    var row = 3;
    var col = 3;
    var result = [];
    var countX = 0;
    var countO = 0;
    var xo = 'XO'
    for (let i = 0; i < row; i++) {
        result.push([]);
        for (let j = 0; j < col; j++) {
            var random = xo[Math.floor(Math.random() * 2)];
            if (random === 'X') {
                countX++;
                if (countX >= 5) {
                    result[i].push(xo[1]);
                }
                else {
                    result[i].push(xo[0])
                }
            } else {
                countO++;
                if (countO >= 5) {
                    result[i].push(xo[0]);
                }
                else {
                    result[i].push(xo[1])
                }
            }
        }
    }
    // console.log(countX +' '+countO);
    return result;
}

console.log(ticTacToe());