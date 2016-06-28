var board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
var turn = 'x';
// selector
var squares = document.querySelectorAll('.square');

// listeners
for (var i = 0; i < 9 ; i++){
  squares[i].addEventListener('click',function(e){
    for (var j=0; j < 9; j++){
      if(squares[j] === e.target){
        board[j] = turn;
        drawBoard();
        switchTurn();
      }
    }
  })
}

function drawBoard(){
  for (var i = 0; i < 9; i++){
    squares[i].innerHTML = board[i];
  }
}
function switchTurn(){
  if (turn === 'x'){
    turn ='o';
  }else {
    turn ='x';
  }
}
