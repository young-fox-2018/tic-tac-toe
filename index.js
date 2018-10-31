function playTicTacToe(){
    const XO = ["X","O"]
    var result = []
    var batas = [4,5]
    
    var countO = 0
    var countX = 0
    var randombatas = Math.floor(Math.random()*Math.floor(batas.length))
    for(let i = 1 ; i <= 3; i++ ){
        var array = []
        for(let j = 1 ; j <= 3 ; j++){
            console.log(randombatas)
            if(countX < batas[randombatas]){
                array.push("X")
                countX++
            }else{
                array.push("O")
                countO++
            }
            console.log("countX =>",countX)
            console.log("countO =>",countO)
        }

        result.push(array)
    }

    return result
}



console.log(playTicTacToe())