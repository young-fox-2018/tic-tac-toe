function acak(){
  var text = '';
  var xo = 'XO'

  text += xo.charAt(Math.floor(Math.random() * xo.length))
  return text
}

function ticTacToe(num){
  var result = []
  var counterx = 0;
  var countero = 0;

  for(var i = 1 ; i <= num ; i++){
    var arr = []
    for(var j = 1 ; j <= num; j++){
      var sementara = acak()
      if (countero === 5){
        arr.push('X')
      } else if (counterx === 5 ){
        arr.push('O')
      } else if(sementara === 'X' && counterx < 5){
        arr.push(sementara)
        counterx ++
      } else if(sementara === 'O' && countero < 5){
        arr.push(sementara)
        countero++
      }
    }
    result.push(arr)
  }
  return result
}

console.log(ticTacToe(3))
console.log(ticTacToe(3))
console.log(ticTacToe(3))
console.log(ticTacToe(3))
console.log(ticTacToe(3))

