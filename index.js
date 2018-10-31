function TicTacToe(){
    let res = []
    let xCounter = 5
    let oCounter = 5

    for(let row = 0 ; row < 3 ; row ++){
        let arr = []
        for(let col = 0 ; col < 3 ; col++){
            
            let value = randomXO()
            if(xCounter === 0){
                arr.push("O")
            }
            else if(oCounter === 0){
                arr.push("X")
            }

            else if(value === "X"){
                xCounter--
                arr.push("X")
            }
            else if(value === "O"){
                oCounter--
                arr.push("O")
            }
        }
        res.push(arr)
        debugger
    }
    return res
}

function randomXO(){
    var xo = "XO"
    if (Math.random() < 0.5){
        return "X"
    }
    else{
        return "O"
    }
    // var randXO = xo.charAt(Math.floor(Math.random() * xo.length))
    // return randXO
}



console.log(TicTacToe())
console.log(TicTacToe())
console.log(TicTacToe())
console.log(TicTacToe())
console.log(TicTacToe())
