function randomXO(){
    var element = 'XO';

    return element[Math.floor(Math.random() * Math.floor(element.length))];
}

function tic_tac_toe(){
    var board = [];
    var countO = 0;
    var countX = 0;

    for (let i = 0; i < 3; i++) {
        let baris = [];
        for (let j = 0; j < 3; j++) {
            let element = randomXO();

            // cek haris random XO dan counternya max 5
            if(element === 'X' && countX < 5){
                countX++;
            } else if(element === 'O' && countO < 5){
                countO++;
            } else {
                if (countX === 5) {
                    element = 'O';
                } else if (countO === 5) {
                    element = 'X';
                }
            }
            
            baris.push(element);
        }
        board.push(baris);
    }

    return board;
}

console.log(tic_tac_toe());