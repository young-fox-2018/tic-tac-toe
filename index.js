//console.log(Math.floor(Math.random() * 2))
function createNested() {
    let output = []
    for (let i = 0; i < 3; i++) {
            output.push([])
    }
    return output
}
function tictacToe() {
    let arr = createNested()
    let dict = ["X", "O"]
    let count_x = 0
    let count_o = 0
    let temp = null

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {         
            temp = dict[Math.floor(Math.random() * 2)]
            if (temp == "X" && count_x < 5) {
                arr[i].push(temp)
                count_x += 1
            }
            else if (temp == "O" && count_o < 5) {
                arr[i].push(temp)
                count_o += 1
            }
            else if (count_x == 5) {
                arr[i].push("O")
            }
            else if (count_o == 5) {
                arr[i].push("X")
            }
        }
    }
    return arr
}

console.log(tictacToe())