var board = ['','','','','','','','',''];
var turn = 'X';
var squares = document.querySelectorAll('.square');
// selector

function onLoad(){
// loop through squares    
  for (var i = 0; i < 9 ; i++){
    // add Event Listener to each square
    squares[i].addEventListener('click',function(e){
        // get index of square
       var squareIndex = getSquareIndex(e.target)
       if(board[squareIndex] == ''){
         board[squareIndex] = turn;
         drawBoard();
         switchTurn();
       }
    })
  };
  // click Listener Reset
  document.getElementById('reset').addEventListener('click',function(event){
    board = ['','','','','','','','',''];
    drawBoard();
  });
}
// listeners


// return index of target square
function getSquareIndex(target){
  for (var j=0;j<9;j++){
    if(squares[j] == target){
      return j;
    }
  }
}

// draw array of values to screen
function drawBoard(){
  for (var i = 0; i < 9; i++){
    squares[i].innerHTML = board[i];
  }
       checkWin();
}
// change turns
function switchTurn(){
  if (turn === 'X'){
    turn ='O';
  }else {
    turn ='X';
  }
}
function checkWin(){
  var winCombos = [
    [0,3,6],
    [1,4,7],
    [2,6,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,6],
    [2,4,6]
  ];
  for (var k = 0; k < winCombos.length; k++){
    var winCombo = winCombos[k];
    if ((board[winCombo[0]] === board[winCombo[1]]) && (board[winCombo[2]] === board[winCombo[1]]) && (board[winCombo[0]] !== '')) {alert(turn + ' is the winner !');};
  }
}
window.addEventListener('load',onLoad,false);
