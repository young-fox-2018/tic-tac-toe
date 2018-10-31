function tic_tac_toe(){
let board = []
let moves = ["X","O"]
let X_counter = 0
let O_counter = 0
// let sum = X_counter + O_counter
for(let i = 0; i < 3; i++){
    let temp = []
    for(let j = 0; j < 3; j++){
        let rand = Math.floor(Math.random()* moves.length)
        if(rand === 0 && X_counter === 5){
            rand = 1
            temp.push(moves[rand])
        }else if(rand === 1 && O_counter === 5){
            rand = 0
            temp.push(moves[rand])
        }else if(rand === 0){
            X_counter += 1
            temp.push(moves[rand])
        }else {
            O_counter += 1 
            temp.push(moves[rand])
        }
    }
    board.push(temp)
}
return board
}

console.log(tic_tac_toe())