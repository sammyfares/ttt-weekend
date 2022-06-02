/*-------------------------------- Constants --------------------------------*/

let board
let turn 
let winner  


 

/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.squares')
const messageEl = document.querySelectorAll('.message')
const gameboard = document.querySelector('.board')

console.log(gameboard)
console.log(squareEls)
// console.log(messageEl)

/*----------------------------- Event Listeners -----------------------------*/

gameboard.addEventListener('click', function(evt){
evt.handleClick()

})
console.log(gameboard)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {

    board = [null, null, null, 1, null, null, null, null, null,]
    turn = 1
    winner = null


    render()
}



function render(){
    board.forEach(function (square, idx){
        if(square === 1){
            squareEls[idx].textContent = 'X'
        } else if (square === -1){
            squareEls[idx].textContent = 'O'
        }
        console.log(squareEls[idx])
    })
    if (winner = null) {
        messageEl.textContent = `It is player ${turn}'s turn!`
      } else if (winner === 'T') {
        messageEl.textContent = `It's a tie!`
      } else {
        messageEl.textContent = `Player ${winner} won!`
    }
  } 
  console.log(squareEls)
//   console.log(winner)
//   console.log(turn)
  
const winningCombos = 
    [
        
    [0, 1, 2]
    [0, 3, 6]
    [3, 4, 5]
    [6, 7, 8]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]

]





function handleClick(evt) {
const sqIdx = gameboard[idx]
 }






