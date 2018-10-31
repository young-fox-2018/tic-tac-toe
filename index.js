function board() {
  let countO = 0, countX = 0;
  let result = [];

  for (var row = 0; row < 3; row++) {
    result.push([]);
    for (var j = 0; j < 3; j++) {
      let random = Math.random();
      if (countO < 5 && random < 0.4) {
        countO++;
        result[row].push('O');
      } else if(countX < 5 && random > 0.6) {
        countX++;
        result[row].push('X');
      } else if(countO < 5){
        countO++;
        result[row].push('O');
      } else if(countX < 5){
        countX++;
        result[row].push('X');
      }
    }
  }
  return result;
}

console.log(board());
