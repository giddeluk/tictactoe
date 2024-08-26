const Gameboard = (() => {
  // Initialize Tic Tac Toe DOM Elements
  // Start Game dialog elements
  const gameDialog = document.querySelector("#newGameDialog");
  const playerOneNameInput = document.querySelector("#playerOneName");
  const playerTwoNameInput = document.querySelector("#playerTwoName");
  const dialogSubmitButton = document.querySelector("#dialogSubmitButton");
  const dialogCloseButton = document.querySelector("#dialogCloseButton");

  // Other DOM Elements
  const resetGameboardButton = document.querySelector(".reset");
  const startNewGameButton = document.querySelector(".startNewGame");
  const gameDiv = document.querySelector(".gameDiv");
  const result = document.querySelector(".result");

  // Scores div elements
  // Player 1
  const playerOneName = document.querySelector(".playerOneName");
  const playerOneScore = document.querySelector(".playerOneScore");
  // Tie
  const tieName = document.querySelector(".tieName");
  const tieScore = document.querySelector(".tieScore");
  // Player 2
  const playerTwoName = document.querySelector(".playerTwoName");
  const playerTwoScore = document.querySelector(".playerTwoScore");

  // Created Tic tac toe boxes
  let box1;
  let box2;
  let box3;
  let box4;
  let box5;
  let box6;
  let box7;
  let box8;
  let box9;

  // DOM Functions
  // Reset Gameboard button
  resetGameboardButton.addEventListener("click", () => {
    Gameboard.resetGameboard();
  });
  //  Open start game modal
  startNewGameButton.addEventListener("click", () => {
    dialog("open");
  });
  // Close start game modal
  dialogCloseButton.addEventListener("click", () => {
    dialog("close");
  });
  // Submit Names
  dialogSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (playerOneNameInput.value != "") {
      playerOne.name = playerOneNameInput.value;
    } else {
      playerOne.name = "Player 1";
    }
    if (playerTwoNameInput.value != "") {
      playerTwo.name = playerTwoNameInput.value;
    } else {
      playerOne.name = "Player 2";
    }
    dialog("close");
    resetGameboard();
    displayGameboard();
    // // Display each Player's name on the scoreboard
    playerOneName.textContent = playerOne.name;
    playerTwoName.textContent = playerTwo.name;
    // Show the scoreboard
    document.querySelector(".scores").style.display = "";
  });

  // Remove the Reset button when a player first loads the page
  resetGameboardButton.style.display = "none";
  // Remove the scoreboard when the page is first loaded
  document.querySelector(".scores").style.display = "none";
  // Initialize Players
  const playerOne = {
    marker: "x",
    name: "Player 1",
  };

  const playerTwo = {
    marker: "o",
    name: "Player 2",
  };
  // Scores Object
  const scores = (() => {
    let playerOneNumScore = 0;
    let playerTwoNumScore = 0;
    let tieNumScore = 0;
    const increaseScore = (scoreToBeIncreased, pointsToBeIncreasedBy) => {
      switch (scoreToBeIncreased) {
        case "playerOne":
          playerOneNumScore += pointsToBeIncreasedBy;
          break;
        case "playerTwo":
          playerTwoNumScore += pointsToBeIncreasedBy;
          break;
        case "ties":
          tieNumScore += pointsToBeIncreasedBy;
          break;
      }
    };
    const displayScores = () => {
      // Player One output
      playerOneScore.textContent = playerOneNumScore;
      // Player Two Output
      playerTwoScore.textContent = playerTwoNumScore;
      // Tie score output
      tieScore.textContent = tieNumScore;
    };
    return { increaseScore, displayScores };
  })();
  // Start new game Dialog functions
  const dialog = (event) => {
    switch (event) {
      case "open":
        gameDialog.showModal();
        break;
      case "close":
        gameDialog.close();
    }
  };
  // Gameboard functions
  const setMarker = (position) => {
    if (gameboard[position] === "") {
      gameboard[position] = currentPlayer.marker;
      if (currentPlayer == playerOne) {
        currentPlayer = playerTwo;
      } else {
        currentPlayer = playerOne;
      }
    }
    // Display each player's turn on the UI
    result.textContent = `${currentPlayer.name}'s turn!`;

    displayGameboard();
    checkWinner.hasXWon();
    checkWinner.hasOWon();
    checkWinner.isTied();
  };
  const placeMarkerOnUI = (() => {
    const setMarkerOne = function () {
      setMarker(0);
    };
    const setMarkerTwo = function () {
      setMarker(1);
    };
    const setMarkerThree = function () {
      setMarker(2);
    };
    const setMarkerFour = function () {
      setMarker(3);
    };
    const setMarkerFive = function () {
      setMarker(4);
    };
    const setMarkerSix = function () {
      setMarker(5);
    };
    const setMarkerSeven = function () {
      setMarker(6);
    };
    const setMarkerEight = function () {
      setMarker(7);
    };
    const setMarkerNine = function () {
      setMarker(8);
    };
    return {
      setMarkerOne,
      setMarkerTwo,
      setMarkerThree,
      setMarkerFour,
      setMarkerFive,
      setMarkerSix,
      setMarkerSeven,
      setMarkerEight,
      setMarkerNine,
    };
  })();
  const concludeGame = () => {
    // Display the New game button
    startNewGameButton.style.display = "block";
    // Show the reset/next round button
    resetGameboardButton.style.display = "block";
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
    for (let i = 1; i <= 10; i++) {
      switch (i) {
        case 1: //1
          box1 = document.createElement("div");
          box1.setAttribute("class", "box boxOne");
          box1.textContent = gameboard[0];
          box1.addEventListener("click", placeMarkerOnUI.setMarkerOne);

          firstRow.appendChild(box1);
          break;
        case 2: //2
          box2 = document.createElement("div");
          box2.setAttribute("class", "box boxTwo");
          box2.textContent = gameboard[1];
          box2.addEventListener("click", placeMarkerOnUI.setMarkerTwo);

          firstRow.appendChild(box2);
          break;
        case 3:
          box3 = document.createElement("div");
          box3.setAttribute("class", "box boxThree");
          box3.textContent = gameboard[2];
          box3.addEventListener("click", placeMarkerOnUI.setMarkerThree);

          firstRow.appendChild(box3);
          break;
        case 4:
          box4 = document.createElement("div");
          box4.setAttribute("class", "box boxFour");
          box4.textContent = gameboard[3];
          box4.addEventListener("click", placeMarkerOnUI.setMarkerFour);

          secondRow.appendChild(box4);
          break;
        case 5:
          box5 = document.createElement("div");
          box5.setAttribute("class", "box boxFive");
          box5.textContent = gameboard[4];
          box5.addEventListener("click", placeMarkerOnUI.setMarkerFive);

          secondRow.appendChild(box5);
          break;
        case 6:
          box6 = document.createElement("div");
          box6.setAttribute("class", "box boxSix");
          box6.textContent = gameboard[5];
          box6.addEventListener("click", placeMarkerOnUI.setMarkerSix);

          secondRow.appendChild(box6);
          break;
        case 7:
          box7 = document.createElement("div");
          box7.setAttribute("class", "box boxSeven");
          box7.textContent = gameboard[6];
          box7.addEventListener("click", placeMarkerOnUI.setMarkerSeven);

          thirdRow.appendChild(box7);
          break;
        case 8:
          box8 = document.createElement("div");
          box8.setAttribute("class", "box boxEight");
          box8.textContent = gameboard[7];
          box8.addEventListener("click", placeMarkerOnUI.setMarkerEight);

          thirdRow.appendChild(box8);
          break;
        case 9:
          box9 = document.createElement("div");
          box9.setAttribute("class", "box boxNine");
          box9.textContent = gameboard[8];
          box9.addEventListener("click", placeMarkerOnUI.setMarkerNine);

          thirdRow.appendChild(box9);
          break;
      }
    }
    gameDiv.appendChild(firstRow);
    gameDiv.appendChild(secondRow);
    gameDiv.appendChild(thirdRow);
    // Display the first player's turn, immediately the game starts
    result.textContent = `${currentPlayer.name}'s turn!`;
    // Remove the Start New Game button when a player starts a game
    startNewGameButton.style.display = "none";
    // Remove the Reset button when a player starts a game
    resetGameboardButton.style.display = "none";
  };
  const changeBoxTextColor = (b1, b2, b3) => {
    b1.style.color = "Red";
    b2.style.color = "Red";
    b3.style.color = "Red";
  };
  const resetGameboard = () => {
    result.textContent = "";
    gameboard = ["", "", "", "", "", "", "", "", ""];
    // Ensures the opposite player starts every new game
    switch (startingPlayer) {
      case playerOne:
        startingPlayer = playerTwo;
        currentPlayer = playerTwo;
        break;
      case playerTwo:
        startingPlayer = playerOne;
        currentPlayer = playerOne;
    }
    displayGameboard();
  };
  const disableGameboard = () => {
    box1.removeEventListener("click", placeMarkerOnUI.setMarkerOne);
    box2.removeEventListener("click", placeMarkerOnUI.setMarkerTwo);
    box3.removeEventListener("click", placeMarkerOnUI.setMarkerThree);
    box4.removeEventListener("click", placeMarkerOnUI.setMarkerFour);
    box5.removeEventListener("click", placeMarkerOnUI.setMarkerFive);
    box6.removeEventListener("click", placeMarkerOnUI.setMarkerSix);
    box7.removeEventListener("click", placeMarkerOnUI.setMarkerSeven);
    box8.removeEventListener("click", placeMarkerOnUI.setMarkerEight);
    box9.removeEventListener("click", placeMarkerOnUI.setMarkerNine);
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
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box1, box2, box3);
        scores.increaseScore("playerOne", 1);
        scores.displayScores();
        concludeGame();
      }
      if (
        gameboard[3] === "x" &&
        gameboard[4] === "x" &&
        gameboard[5] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box4, box5, box6);
        scores.increaseScore("playerOne", 1);
        scores.displayScores();
        concludeGame();
      }
      if (
        gameboard[6] === "x" &&
        gameboard[7] === "x" &&
        gameboard[8] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box7, box8, box9);
        scores.increaseScore("playerOne", 1);
        scores.displayScores();
        concludeGame();
      }
      // Vertical wins
      if (
        gameboard[0] === "x" &&
        gameboard[3] === "x" &&
        gameboard[6] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box1, box4, box7);
        scores.increaseScore("playerOne", 1);
        scores.displayScores();
        concludeGame();
      }
      if (
        gameboard[1] === "x" &&
        gameboard[4] === "x" &&
        gameboard[7] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box2, box5, box8);
        scores.increaseScore("playerOne", 1);
        scores.displayScores();
        concludeGame();
      }
      if (
        gameboard[2] === "x" &&
        gameboard[5] === "x" &&
        gameboard[8] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box3, box6, box9);
        scores.increaseScore("playerOne", 1);
        scores.displayScores();
        concludeGame();
      }
      // Diagonal wins
      // X
      if (
        gameboard[0] === "x" &&
        gameboard[4] === "x" &&
        gameboard[8] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box1, box5, box9);
        scores.increaseScore("playerOne", 1);
        scores.displayScores();
        concludeGame();
      }
      if (
        gameboard[2] === "x" &&
        gameboard[4] === "x" &&
        gameboard[6] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box3, box5, box7);
        scores.increaseScore("playerOne", 1);
        scores.displayScores();
        concludeGame();
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
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box1, box2, box3);
        scores.increaseScore("playerTwo", 1);
        scores.displayScores();
        concludeGame();
      }
      if (
        gameboard[3] === "o" &&
        gameboard[4] === "o" &&
        gameboard[5] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box4, box5, box6);
        scores.increaseScore("playerTwo", 1);
        scores.displayScores();
        concludeGame();
      }
      if (
        gameboard[6] === "o" &&
        gameboard[7] === "o" &&
        gameboard[8] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box7, box8, box9);
        scores.increaseScore("playerTwo", 1);
        scores.displayScores();
        concludeGame();
      }
      // Vertical wins
      if (
        gameboard[0] === "o" &&
        gameboard[3] === "o" &&
        gameboard[6] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box1, box4, box7);
        scores.increaseScore("playerTwo", 1);
        scores.displayScores();
        concludeGame();
      }
      if (
        gameboard[1] === "o" &&
        gameboard[4] === "o" &&
        gameboard[7] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box2, box5, box8);
        scores.increaseScore("playerTwo", 1);
        scores.displayScores();
        concludeGame();
      }
      if (
        gameboard[2] === "o" &&
        gameboard[5] === "o" &&
        gameboard[8] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box3, box6, box9);
        scores.increaseScore("playerTwo", 1);
        scores.displayScores();
        concludeGame();
      }
      // Diagonal wins
      // O
      if (
        gameboard[0] === "o" &&
        gameboard[4] === "o" &&
        gameboard[8] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box1, box5, box9);
        scores.increaseScore("playerTwo", 1);
        scores.displayScores();
        concludeGame();
      }
      if (
        gameboard[2] === "o" &&
        gameboard[4] === "o" &&
        gameboard[6] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box3, box5, box7);
        scores.increaseScore("playerTwo", 1);
        scores.displayScores();
        concludeGame();
      }
    };
    // Check if x has won without increasing the score value
    const checkHasXWon = () => {
      // Horizontal wins
      if (
        gameboard[0] === "x" &&
        gameboard[1] === "x" &&
        gameboard[2] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box1, box2, box3);
        concludeGame();
        return true;
      }
      if (
        gameboard[3] === "x" &&
        gameboard[4] === "x" &&
        gameboard[5] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box4, box5, box6);
        concludeGame();
        return true;
      }
      if (
        gameboard[6] === "x" &&
        gameboard[7] === "x" &&
        gameboard[8] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box7, box8, box9);
        concludeGame();
        return true;
      }
      // Vertical wins
      if (
        gameboard[0] === "x" &&
        gameboard[3] === "x" &&
        gameboard[6] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box1, box4, box7);
        concludeGame();
        return true;
      }
      if (
        gameboard[1] === "x" &&
        gameboard[4] === "x" &&
        gameboard[7] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box2, box5, box8);
        concludeGame();
        return true;
      }
      if (
        gameboard[2] === "x" &&
        gameboard[5] === "x" &&
        gameboard[8] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box3, box6, box9);
        concludeGame();
        return true;
      }
      // Diagonal wins
      // X
      if (
        gameboard[0] === "x" &&
        gameboard[4] === "x" &&
        gameboard[8] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box1, box5, box9);
        concludeGame();
        return true;
      }
      if (
        gameboard[2] === "x" &&
        gameboard[4] === "x" &&
        gameboard[6] === "x"
      ) {
        result.textContent = `${playerOne.marker}, ${playerOne.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box3, box5, box7);
        concludeGame();
        return true;
      }
    };
    // Check if o has won without increasing the score value
    const checkHasOWon = () => {
      // Horizontal wins
      if (
        gameboard[0] === "o" &&
        gameboard[1] === "o" &&
        gameboard[2] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box1, box2, box3);
        concludeGame();
        return true;
      }
      if (
        gameboard[3] === "o" &&
        gameboard[4] === "o" &&
        gameboard[5] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box4, box5, box6);
        concludeGame();
        return true;
      }
      if (
        gameboard[6] === "o" &&
        gameboard[7] === "o" &&
        gameboard[8] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box7, box8, box9);
        concludeGame();
        return true;
      }
      // Vertical wins
      if (
        gameboard[0] === "o" &&
        gameboard[3] === "o" &&
        gameboard[6] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box1, box4, box7);
        concludeGame();
        return true;
      }
      if (
        gameboard[1] === "o" &&
        gameboard[4] === "o" &&
        gameboard[7] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box2, box5, box8);
        concludeGame();
        return true;
      }
      if (
        gameboard[2] === "o" &&
        gameboard[5] === "o" &&
        gameboard[8] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box3, box6, box9);
        concludeGame();
        return true;
      }
      // Diagonal wins
      // O
      if (
        gameboard[0] === "o" &&
        gameboard[4] === "o" &&
        gameboard[8] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box1, box5, box9);
        concludeGame();
        return true;
      }
      if (
        gameboard[2] === "o" &&
        gameboard[4] === "o" &&
        gameboard[6] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, ${playerTwo.name} is the Winner`;
        disableGameboard();
        changeBoxTextColor(box3, box5, box7);
        concludeGame();
        return true;
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
      if (
        tieCheck.length == 0 &&
        checkHasXWon() !== true &&
        checkHasOWon() !== true
      ) {
        result.textContent = `It is a tie!`;
        disableGameboard();
        scores.increaseScore("ties", 1);
        scores.displayScores();
        concludeGame();
      }
    };
    return { hasXWon, hasOWon, checkHasOWon, checkHasXWon, isTied };
  })();
  let startingPlayer = playerOne;
  let currentPlayer = playerOne;
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  return {
    playerOne,
    playerTwo,
    displayGameboard,
    resetGameboard,
    dialog,
  };
})();

// Gameboard.displayGameboard();
// 1 4 2 3 5 7 6 8 9
