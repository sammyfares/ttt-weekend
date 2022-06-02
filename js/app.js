/*-------------------------------- Constants --------------------------------*/

let board
let turn 
let winner  
 
 

/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.squares')
const messageEl = document.querySelector('message')

// console.log(squareEls)
// console.log(messageEl)

/*----------------------------- Event Listeners -----------------------------*/

init()

/*-------------------------------- Functions --------------------------------*/
function init() {

    board = [null, 1, null, -1, null, null, null, null, null,]
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
  console.log(winner)
  console.log(turn)
  
    






