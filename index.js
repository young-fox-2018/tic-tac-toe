function ticTacToe(r, c) {
    let str = "XO"
    let result = []
    let arrTemp = []
    let xCounter = 0
    let oCounter = 0
    let check = true



    for (let i = 0; i < c * r; i++) {
       

        if (xCounter == 5) {
            arrTemp.push("O")
            check = false
        } else if (oCounter == 5) {
            arrTemp.push("X")
            check = false
        } else {
            
        }   

        if (check == true) {
            arrTemp.push(
                str[Math.floor(Math.random() * 2)]
            )    
            if (arrTemp[arrTemp.length-1] == "X") {
                xCounter++
            } else if (arrTemp[arrTemp.length-1] == "O") {
                oCounter++
            }
        }

        if (arrTemp.length == r) {
            result.push(arrTemp)
            arrTemp = []
        }
        
    }

    return result


}

console.log(ticTacToe(3, 3));
