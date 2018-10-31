function playTicTacToe(){
    const XO = ["X","O"]
    var result = []

    for(let i = 1 ; i <= 3; i++ ){
        let countX = 0
        let countO = 0
        var array = []
        for(let j = 1 ; j <= 3 ; j++){
            var randomXO = Math.floor(Math.random()*Math.floor(XO.length))
            if(randomXO === 0 && countX < 5){
                array.push(XO[randomXO])
                countX++
            }if(randomXO === 1 && countO < 5){
                array.push(XO[randomXO])
                countO++
            }
        }

        result.push(array)
    }

    return result
}



console.log(playTicTacToe())