function tictactoe() {
  var dic = ["O","X"]
  var result = []
  var countX = 0
  var countO = 0
  for (let i = 0; i < 3; i++) {
    let innerArr = []
    for (let j = 0; j < 3; j++) {
      if (countO > 4) {
        innerArr.push(dic[1])
      }
      else if (countX > 4) {
        innerArr.push(dic[0])
      }
      else {
        let random = Math.floor(Math.random()*2)
        innerArr.push(dic[random])
        if (random === 0) {
          countO++
        }
        else {
          countX++
        }
      }
    }
    result.push(innerArr)
  }
  return result
}

console.log(tictactoe());
