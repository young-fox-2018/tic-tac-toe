function board(num){
    let result = []
    let limit = Math.ceil((num*num)/2)
    let xCounter = 0
    let oCounter = 0
    for(let i = 0; i < num; i++){
        let arr = []
        for(let j = 0; j < num; j++){
            let random = Math.round(Math.random())
            if(random === 0 && xCounter < limit){
                arr.push("X")
                xCounter++
            }else if(oCounter < limit){ // random 1 dan oCounter belum limit ATAU xcounter limit
                arr.push("O")
                oCounter++
            }else{
                arr.push("X") // random 1 tapi oCounter limit
                xCounter++
            }            
        }
        result.push(arr)
    }
    return result
}

console.log(board(3))
console.log("")
console.log(board(5))