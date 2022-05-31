const gameSquares = document.querySelectorAll(".jsgame__layout");

let player = "x";
let playerXArr = [];
let playerOArr = [];

const winningScore = [
  ["1", "5", "9"],
  ["3", "5", "7"],
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
];

const winningPlayer = (playerArr) => {
  let resultArr = [];
  for (let i = 0; i < winningScore.length; i++) {
    const winCondition = winningScore[i];
    console.log("win", winCondition);
    let isWinner = winCondition.every((number) => {
      return playerArr.includes(number);
      // check if the player has the winning condition and if it linked up with the winning combination
      // return it will be true.
    });
    resultArr.push(isWinner);
    // push the true and false values in the array
  }
  return resultArr;
  // pass winning player take the function
};
const buttonClick = (event) => {
  if (player === "x") {
    event.target.innerHTML = "x";
    playerXArr.push(event.target.id);
    console.log(playerXArr);
    player = "o";
    let winArr = winningPlayer(playerXArr);
    checkWinner(winArr);
    console.log("checkX", winningPlayer(playerXArr));
  } else {
    event.target.innerHTML = "o";
    playerOArr.push(event.target.id);
    console.log(playerOArr);
    player = "x";
    let winArr = winningPlayer(playerOArr);
    checkWinner(winArr);
    console.log("checkO", winningPlayer(playerOArr));
  }
};

gameSquares.forEach((square) => {
  square.addEventListener("click", buttonClick);
});

// getting the id from the HTML

let idArr = [];
gameSquares.forEach((square) => {
  let id = square.id;
  idArr.push(id);
});
console.log(idArr);

// create a variable for the winning combination for the game

// create a function to see if the player has won the game.

//.every = condition
// compare two array

const checkWinner = (player) => {
  if (player.includes(true)) alert(" we have a winner");
  else {
    return;
  }
};

// want to add the alert after the x is placed not before.
// see the order of the code
// maybe add the display box.
