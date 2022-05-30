const gameSquares = document.querySelectorAll(".jsgame__layout");

let player = "x";

const buttonClick = (event) => {
  if (player === "x") {
    event.target.innerHTML = "x";
    player = "o";
  } else {
    event.target.innerHTML = "o";
    player = "x";
  }
};

gameSquares.forEach((square) => {
  square.addEventListener("click", buttonClick);
});

// create a variable for the winning combination for the game
const winningScore = [(1, 5, 9)][(3, 5, 7)][(1, 2, 3)][(4, 5, 6)][(7, 8, 9)][
  (1, 4, 7)
][(2, 5, 8)][(3, 6, 9)];

// craete a function to see if the player has won the game.

const winningPlayer = (player) => {
  if (player === winningScore) {
    alert("you have won");
  } else {
    alert("you have lose");
  }
};

gameSquares.addEventListener("click", winningPlayer);
