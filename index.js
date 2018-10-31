function tictactoe(n) {
    var maxX = (Math.round(Math.random())) ? Math.round(n*n/2) : Math.floor(n*n/2)
    var maxO = n*n - maxX 
    console.log(`x max : ${maxX}`)
    console.log(`o max : ${maxO}`)
    var kata = ['X','O']
    var temp = []

    if (n%2 == 0) { return 'Parameter harus ganjil' }

    for(i=0;i<n;i++){
        temp.push([])
        for(j=0;j<n;j++) {
            var generate = true 
            // console.log(randomKata)
            
            while(generate == true) {
                var randomKata = kata[Math.round(Math.random())]
                if(randomKata == 'X' && maxX >0){
                    temp[i].push(randomKata)
                    maxX-=1
                    // console.log(maxX)
                    generate = false
                }else if(randomKata == 'O' && maxO >0){
                    temp[i].push(randomKata)
                    maxO-=1
                    // console.log(maxO)
                    generate = false
                }
            }
        }
    }
    return temp
}

console.log(tictactoe(3))