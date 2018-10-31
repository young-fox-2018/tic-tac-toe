function tictactoe(row){
    result = [];
    alphabet = "XO";
    string = "";
    total = 0;
    xsum = 0;
    osum = 0;

    while(total < 9){
        
        if(xsum.length === 5){
            string += "O";
        }else if (osum.length === 5){
            string += "X";
        }else{
            string += alphabet[Math.floor(Math.random()*2)]
        }


        if(string[string.length-1] == "X"){
            xsum++
        }else{
            osum++
        }

        total++
    }
    console.log(string)

    for(var i = 0; i < row; i++){
        cont = [];
        for(var j = 0; j <row; j++){
            cont.push(string[j+(i*3)])
        }
        result.push(cont)
    }
    



    return result
}

console.log(tictactoe(3))