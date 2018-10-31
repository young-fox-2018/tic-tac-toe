
function random_tictac_toe(number){

    let result = [];
    let exesOhs = "XO";
    let counterX = [5, 4];
    let counterO = [4, 5];
    // console.log(randomCounterO, randomCounterX)
    
    for(let i = 0; i < number; i++){
        result.push([]);
        for(let j = 0; j < number; j++){
            // check sudah berapa jumlah x / o nya 
            let randomize = exesOhs[Math.floor(Math.random()*Math.floor(exesOhs.length))];
            let randomCounterX = counterX[Math.floor(Math.random()*Math.floor(counterX.length))];
            let randomCounterO = counterO[Math.floor(Math.random()*Math.floor(counterO.length))];

            if(randomize === "X" && randomCounterX > 0){
                result[i].push(randomize);
                randomCounterX++; // counter harus di update 
            } else {
                result[i].push("O");
                randomCounterO++;
            }
        }
    }
    return result;
}
console.log(random_tictac_toe(3));