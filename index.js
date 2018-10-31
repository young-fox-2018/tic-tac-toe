function randomXO(){
    var text = ''
    var alfabet = 'XO'
    for (var i = 0; i < 1; i++){
        text += alfabet.charAt(Math.floor(Math.random() * alfabet.length));
        alfabet[0]
    } 
  return text;
}
randomXO()

function ticTac(input){
    var hasil = []
    var x = 5
    var o = 5
    for(var i = 0; i < input; i++){
        hasil.push([])
        for(var j = 0; j < input; j++){
            var temp = randomXO()
            if(temp === 'X' && x === 0){
                hasil[i].push('O')
            }else if(temp === 'O' && o === 0){
                hasil[i].push('X')
            }else if(temp === 'X' && x > 0){
                x--
                hasil[i].push(temp)
            }else if(temp === 'O' && o > 0){
                o--
                hasil[i].push(temp)
            }
        }
    }
    return hasil
}

console.log(ticTac(3));
