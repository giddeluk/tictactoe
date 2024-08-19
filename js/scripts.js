const Gameboard = (() => {
  // Initialize Tic Tac Toe DOM Elements
  const gameDiv = document.querySelector(".gameDiv");
  const result = document.querySelector(".result");

  let box1;
  let box2;
  let box3;
  let box4;
  let box5;
  let box6;
  let box7;
  let box8;
  let box9;

  // Initialize Player One
  const playerOne = {
    marker: "x",
  };

  const playerTwo = {
    marker: "o",
  };

  const displayGameboard = () => {
    gameDiv.innerHTML = "";
    // 1st row
    let firstRow = document.createElement("div");
    firstRow.setAttribute("class", "row rowOne");
    // 2nd row
    let secondRow = document.createElement("div");
    secondRow.setAttribute("class", "row rowTwo");
    // 3rd row
    let thirdRow = document.createElement("div");
    thirdRow.setAttribute("class", "row rowThree");
    // 1st row
    for (let i = 0; i <= gameboard.length; i++) {
      switch (i) {
        case 0:
          box1 = document.createElement("div");
          box1.setAttribute("class", "box boxOne");
          box1.textContent = gameboard[i];
          box1.addEventListener("click", (e) => {
            setMarker(i);
          });

          firstRow.appendChild(box1);
          break;
        case 1:
          box2 = document.createElement("div");
          box2.setAttribute("class", "box boxTwo");
          box2.textContent = gameboard[i];
          box2.addEventListener("click", (e) => {
            setMarker(i);
          });

          firstRow.appendChild(box2);
          break;
        case 2:
          box3 = document.createElement("div");
          box3.setAttribute("class", "box boxThree");
          box3.textContent = gameboard[i];
          box3.addEventListener("click", (e) => {
            setMarker(i);
          });

          firstRow.appendChild(box3);
          break;
        case 3:
          box4 = document.createElement("div");
          box4.setAttribute("class", "box boxFour");
          box4.textContent = gameboard[i];
          box4.addEventListener("click", (e) => {
            setMarker(i);
          });

          secondRow.appendChild(box4);
          break;
        case 4:
          box5 = document.createElement("div");
          box5.setAttribute("class", "box boxFive");
          box5.textContent = gameboard[i];
          box5.addEventListener("click", (e) => {
            setMarker(i);
          });

          secondRow.appendChild(box5);
          break;
        case 5:
          box6 = document.createElement("div");
          box6.setAttribute("class", "box boxSix");
          box6.textContent = gameboard[i];
          box6.addEventListener("click", (e) => {
            setMarker(i);
          });

          secondRow.appendChild(box6);
          break;
        case 6:
          box7 = document.createElement("div");
          box7.setAttribute("class", "box boxSeven");
          box7.textContent = gameboard[i];
          box7.addEventListener("click", (e) => {
            setMarker(i);
          });

          thirdRow.appendChild(box7);
          break;
        case 7:
          box8 = document.createElement("div");
          box8.setAttribute("class", "box boxEight");
          box8.textContent = gameboard[i];
          box8.addEventListener("click", (e) => {
            setMarker(i);
          });

          thirdRow.appendChild(box8);
          break;
        case 8:
          box9 = document.createElement("div");
          box9.setAttribute("class", "box boxNine");
          box9.textContent = gameboard[i];
          box9.addEventListener("click", (e) => {
            setMarker(i);
          });

          thirdRow.appendChild(box9);
          break;
      }
    }
    gameDiv.appendChild(firstRow);
    gameDiv.appendChild(secondRow);
    gameDiv.appendChild(thirdRow);
  };
  const resetGameboard = () => {
    result.textContent = "";
    gameboard = ["", "", "", "", "", "", "", "", ""];
    displayGameboard();
    currentPlayer = playerOne;
  };

  const checkWinner = (() => {
    // x check

    const hasXWon = () => {
      // Horizontal wins
      if (
        gameboard[0] === "x" &&
        gameboard[1] === "x" &&
        gameboard[2] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
      }
      if (
        gameboard[3] === "x" &&
        gameboard[4] === "x" &&
        gameboard[5] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
      }
      if (
        gameboard[6] === "x" &&
        gameboard[7] === "x" &&
        gameboard[8] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
      }
      // Vertical wins
      if (
        gameboard[0] === "x" &&
        gameboard[3] === "x" &&
        gameboard[6] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
      }
      if (
        gameboard[1] === "x" &&
        gameboard[4] === "x" &&
        gameboard[7] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
      }
      if (
        gameboard[2] === "x" &&
        gameboard[5] === "x" &&
        gameboard[8] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
      }
      // Diagonal wins
      if (
        gameboard[0] === "x" &&
        gameboard[4] === "x" &&
        gameboard[8] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
      }
      if (
        gameboard[2] === "x" &&
        gameboard[4] === "x" &&
        gameboard[6] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
      }
    };
    // O CHECK

    const hasOWon = () => {
      // Horizontal wins
      if (
        gameboard[0] === "o" &&
        gameboard[1] === "o" &&
        gameboard[2] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
      }
      if (
        gameboard[3] === "o" &&
        gameboard[4] === "o" &&
        gameboard[5] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
      }
      if (
        gameboard[6] === "o" &&
        gameboard[7] === "o" &&
        gameboard[8] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
      }
      // Vertical wins
      if (
        gameboard[0] === "o" &&
        gameboard[3] === "o" &&
        gameboard[6] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
      }
      if (
        gameboard[1] === "o" &&
        gameboard[4] === "o" &&
        gameboard[7] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
      }
      if (
        gameboard[2] === "o" &&
        gameboard[5] === "o" &&
        gameboard[8] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
      }
      // Diagonal wins
      if (
        gameboard[0] === "o" &&
        gameboard[4] === "o" &&
        gameboard[8] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
      }
      if (
        gameboard[2] === "o" &&
        gameboard[4] === "o" &&
        gameboard[6] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
      }
    };
    const isTied = () => {
      const tieCheck = gameboard.filter((item) => {
        if (item === "") {
          return true;
        } else {
          return false;
        }
      });
      if (tieCheck.length == 0) {
        result.textContent = `It is a tie!`;
      }
    };
    return { hasXWon, hasOWon, isTied };
  })();
  let currentPlayer = playerOne;
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  const setMarker = (position) => {
    if (gameboard[position] === "") {
      gameboard[position] = currentPlayer.marker;
      if (currentPlayer == playerOne) {
        currentPlayer = playerTwo;
      } else {
        currentPlayer = playerOne;
      }
    }
    displayGameboard();
    checkWinner.hasXWon();
    checkWinner.hasOWon();
    checkWinner.isTied();
  };

  return { playerOne, playerTwo, setMarker, displayGameboard, checkWinner, resetGameboard };
})();

const g = Gameboard.setMarker;
Gameboard.displayGameboard();
// Gameboard.checkWinner.hasXWon();
// Gameboard.checkWinner.hasOWon();
// Gameboard.checkWinner.isTied();
document.querySelector(".reset").addEventListener("click", () => {
  Gameboard.resetGameboard();
});
