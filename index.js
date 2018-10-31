function tictactoe(dimensi){
    let result = []
    let randomAngka
    let countX = 0 
    let countO = 0

    for(let i=0 ; i<dimensi ; i++){
        arrRow = []
        for(let j=0 ; j<dimensi ; j++){
            randomAngka = Math.round(Math.random()) //get random number 0 or other

            if(randomAngka === 0){ //if random number = 0 print "O"
                if(countO>4){
                    arrRow.push("X")
                } else{
                    arrRow.push("O")
                    countO++
                }
            }
            else{ //if random number != 0 print "X"
                if(countX>4){
                    arrRow.push("O")
                }
                else{
                    arrRow.push("X")
                    countX++
                }
            }
        }
        result.push(arrRow)
    }
    return result
}

console.log(tictactoe(3))