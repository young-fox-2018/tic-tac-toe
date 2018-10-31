function tictactoe() {
    let result = []
    let tempArr = []
    let dict = 'OX'
    let x = 5
    let o = 5
    
    for(let i = 1; i <= 3*3; i++) {
        let random = Math.floor(Math.random()*2)
        if(dict[random] === 'X' && x > 0) {
            tempArr.push(dict[random])
            x -= 1
        } else if(dict[random] === 'O' && o > 0) {
            tempArr.push(dict[random])
            o -= 1
        } else {
            if (x === 0) {
                tempArr.push('O')
            } else {
                tempArr.push('X')
            }
        }

        if(i % 3 === 0) {
            result.push(tempArr)
            tempArr = []
        }
    }
    return result
}

console.log(tictactoe())