function tictactoe() {
    var result = generateRow(3)
    var xo = 'X0'
    var countX = 5
    var countO = 5
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            var random = xo.charAt(Math.floor(Math.random() * xo.length));      
            if(random === 'X') countX--
            if(random === '0') countO--
            if (countX === 0) {
                result[i].push('0') 
            } else if (countO === 0) {
                result[i].push('X')
            } else {
                result[i].push(random) 
            }
        }   
    }
    return result
}

function generateRow(numRow) {
    var array = []
    for (let i = 0; i < numRow; i++) {
           array.push([])
    }
    return array
}

console.log(tictactoe())