const Gameboard = (() => {
  // Initialize Player One
  const playerOne = {
    marker: "x",
  };

  const playerTwo = {
    marker: "o",
  };

  const displayGameboard = () => {
    let firstRow = [];
    let secondRow = [];
    let thirdRow = [];

    for (let i = 0; i <= 2; i++) {
      firstRow.push(gameboard[i]);
    }
    for (let i = 3; i <= 5; i++) {
      secondRow.push(gameboard[i]);
    }
    for (let i = 6; i <= 8; i++) {
      thirdRow.push(gameboard[i]);
    }

    console.log(firstRow);
    console.log(secondRow);
    console.log(thirdRow);
    console.log("-----------------------");
  };
  const resetGameboard = () => {
    gameboard = ["e", "e", "e", "e", "e", "e", "e", "e", "e"];
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
        console.log(`${playerOne.marker}, Player One is the Winner`);
        resetGameboard();
      }
      if (
        gameboard[3] === "x" &&
        gameboard[4] === "x" &&
        gameboard[5] === "x"
      ) {
        console.log(`${playerOne.marker}, Player One is the Winner`);
        resetGameboard();
      }
      if (
        gameboard[6] === "x" &&
        gameboard[7] === "x" &&
        gameboard[8] === "x"
      ) {
        console.log(`${playerOne.marker}, Player One is the Winner`);
        resetGameboard();
      }
      // Vertical wins
      if (
        gameboard[0] === "x" &&
        gameboard[3] === "x" &&
        gameboard[6] === "x"
      ) {
        console.log(`${playerOne.marker}, Player One is the Winner`);
        resetGameboard();
      }
      if (
        gameboard[1] === "x" &&
        gameboard[4] === "x" &&
        gameboard[7] === "x"
      ) {
        console.log(`${playerOne.marker}, Player One is the Winner`);
        resetGameboard();
      }
      if (
        gameboard[2] === "x" &&
        gameboard[5] === "x" &&
        gameboard[8] === "x"
      ) {
        console.log(`${playerOne.marker}, Player One is the Winner`);
        resetGameboard();
      }
      // Diagonal wins
      if (
        gameboard[0] === "x" &&
        gameboard[4] === "x" &&
        gameboard[8] === "x"
      ) {
        console.log(`${playerOne.marker}, Player One is the Winner`);
        resetGameboard();
      }
      if (
        gameboard[2] === "x" &&
        gameboard[4] === "x" &&
        gameboard[6] === "x"
      ) {
        console.log(`${playerOne.marker}, Player One is the Winner`);
        resetGameboard();
      }
    };
    // O CHECK

    const hasOWon = () => {
      // Horizontal wins
      if (
        gameboard[0] === "const g = Gameboard.setMarker;o" &&
        gameboard[1] === "o" &&
        gameboard[2] === "o"
      ) {
        console.log(`${playerTwo.marker}, Player Two is the Winner`);
        resetGameboard();
      }
      if (
        gameboard[3] === "o" &&
        gameboard[4] === "o" &&
        gameboard[5] === "o"
      ) {
        console.log(`${playerTwo.marker}, Player Two is the Winner`);
        resetGameboard();
      }
      if (
        gameboard[6] === "o" &&
        gameboard[7] === "o" &&
        gameboard[8] === "o"
      ) {
        console.log(`${playerTwo.marker}, Player Two is the Winner`);
        resetGameboard();
      }
      // Vertical wins
      if (
        gameboard[0] === "o" &&
        gameboard[3] === "o" &&
        gameboard[6] === "o"
      ) {
        console.log(`${playerTwo.marker}, Player Two is the Winner`);
        resetGameboard();
      }
      if (
        gameboard[1] === "o" &&
        gameboard[4] === "o" &&
        gameboard[7] === "o"
      ) {
        console.log(`${playerTwo.marker}, Player Two is the Winner`);
        resetGameboard();
      }
      if (
        gameboard[2] === "o" &&
        gameboard[5] === "o" &&
        gameboard[8] === "o"
      ) {
        console.log(`${playerTwo.marker}, Player Two is the Winner`);
        resetGameboard();
      }
      // Diagonal wins
      if (
        gameboard[0] === "o" &&
        gameboard[4] === "o" &&
        gameboard[8] === "o"
      ) {
        console.log(`${playerTwo.marker}, Player Two is the Winner`);
        resetGameboard();
      }
      if (
        gameboard[2] === "o" &&
        gameboard[4] === "o" &&
        gameboard[6] === "o"
      ) {
        console.log(`${playerTwo.marker}, Player Two is the Winner`);
        resetGameboard();
      }
    };
    const isTied = () => {
      const tieCheck = gameboard.filter((item) => {
        if (item === "e") {
          return true;
        } else {
          return false;
        }
      });
      if (tieCheck.length == 0) {
        console.log("Its a tie");
        resetGameboard();
      }
    };
    return { hasXWon, hasOWon, isTied };
  })();
  let currentPlayer = playerOne;
  let gameboard = ["e", "e", "e", "e", "e", "e", "e", "e", "e"];
  const setMarker = (position) => {
    if (gameboard[position] === "e") {
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

  return { playerOne, playerTwo, setMarker, gameboard, checkWinner };
})();

const g = Gameboard.setMarker;
