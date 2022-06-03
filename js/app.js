/*-------------------------------- Constants --------------------------------*/

let board
let turn 
let winner
let sum   


 

/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.squares')
const messageEl = document.querySelector('#message')
const gameboard = document.querySelector('.board')

// console.log(gameboard)
// console.log(squareEls)
// console.log(messageEl)

/*----------------------------- Event Listeners -----------------------------*/

gameboard.addEventListener('click', handleClick)



// console.log(gameboard)


/*-------------------------------- Functions --------------------------------*/
// here we are calling the init function
init()

function init() {

    board = [null, null, null, null, null, null, null, null, null,]
    turn = 1
    winner = null


    render()
}


// for the render function we are looping through board to check square and the index of it
// so if square equalts to 1 return the index of squareEls and set it equalt to X
// else its equal to -1 we return O


function render(){
    board.forEach(function (square, idx){
        if(square === 1){
            squareEls[idx].textContent = 'X'
        } else if (square === -1){
            squareEls[idx].textContent = 'O'
        }
        // console.log(squareEls[idx])
    })
    // if winner equal null we are going to promp a message
    // but if it equal to a tie its going to prompt with a tie
    // if its -1 or 1 return there is a winner now
    console.log(winner)
    if (winner === null) {
        messageEl.textContent = `It is player ${turn}'s turn!`
      } else if (winner === 'T') {
        messageEl.textContent = `It's a tie!`
      } else {
        winnerName()
    }
  } 
//   console.log(squareEls)
//   console.log(winner)
//   console.log(turn)


  // here we are just declearing every single combination of the boared that we are going to loop through it
const winningCombos = 
    [
        
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]



// we created a handleClick functoin and we set sqIdx to the target were the event is presses
// and if boared is equal to null return the index
// if there is no winner return index as well
// we are setting the index of the board = to turn
//and turn we are able to define which turn by multiplying it by -1 so it flips the sign
// and then we are calling the winner function
// and the render 

// there is going to be an issue here 
function handleClick(evt) {
    const sqIdx = (evt.target.id.slice(2)) // i dont get this part ask someone
    
    if(board[sqIdx] !== null){
        return
    } else if(winner !== null){
        return
    }
    
board[sqIdx] = turn
turn *= -1
 getWinner()
render()
}

// we are looping inside the get winner function
// we are finding the length of the array which .length is going to return 
// and then im doing the absolute value of sum so its always postive 
// equals to the board and we are finding the length at index 0 and adding till 2
// if sum = 3 return 1 which is player X as the winner and vice versa
// but if tie return T
// else return null
// .contains : The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
function getWinner() {
    for(let i = 0; i < winningCombos.length; i++) {
        sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]  
        console.log('Hello')
     if (sum === 3){
        winner = 1
    } else if(sum === -3){
        winner = -1
    }else if (board.includes(null) !== true){
        winner = 'T'
    } 
}

}

function winnerName() {
    if(winner === 1){
        messageEl.textContent = `player X's won`
    } else if(winner === -1){
        messageEl.textContent = `player O's won`
    }
}


