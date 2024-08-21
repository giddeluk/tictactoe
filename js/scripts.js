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
  };
  const resetGameboard = () => {
    result.textContent = "";
    gameboard = ["", "", "", "", "", "", "", "", ""];
    displayGameboard();
    currentPlayer = playerOne;
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
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
        disableGameboard();
      }
      if (
        gameboard[3] === "x" &&
        gameboard[4] === "x" &&
        gameboard[5] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
        disableGameboard();
      }
      if (
        gameboard[6] === "x" &&
        gameboard[7] === "x" &&
        gameboard[8] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
        disableGameboard();
      }
      // Vertical wins
      if (
        gameboard[0] === "x" &&
        gameboard[3] === "x" &&
        gameboard[6] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
        disableGameboard();
      }
      if (
        gameboard[1] === "x" &&
        gameboard[4] === "x" &&
        gameboard[7] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
        disableGameboard();
      }
      if (
        gameboard[2] === "x" &&
        gameboard[5] === "x" &&
        gameboard[8] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
        disableGameboard();
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
        disableGameboard();
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
        disableGameboard();
      }
      if (
        gameboard[3] === "o" &&
        gameboard[4] === "o" &&
        gameboard[5] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
        disableGameboard();
      }
      if (
        gameboard[6] === "o" &&
        gameboard[7] === "o" &&
        gameboard[8] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
        disableGameboard();
      }
      // Vertical wins
      if (
        gameboard[0] === "o" &&
        gameboard[3] === "o" &&
        gameboard[6] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
        disableGameboard();
      }
      if (
        gameboard[1] === "o" &&
        gameboard[4] === "o" &&
        gameboard[7] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
        disableGameboard();
      }
      if (
        gameboard[2] === "o" &&
        gameboard[5] === "o" &&
        gameboard[8] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
        disableGameboard();
      }
      // Diagonal wins
      // X
      if (
        gameboard[0] === "x" &&
        gameboard[4] === "x" &&
        gameboard[8] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
        disableGameboard();
      }
      if (
        gameboard[2] === "x" &&
        gameboard[4] === "x" &&
        gameboard[6] === "x"
      ) {
        result.textContent = `${playerOne.marker}, Player One is the Winner`;
        disableGameboard();
      }
      // O
      if (
        gameboard[0] === "o" &&
        gameboard[4] === "o" &&
        gameboard[8] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
        disableGameboard();
      }
      if (
        gameboard[2] === "o" &&
        gameboard[4] === "o" &&
        gameboard[6] === "o"
      ) {
        result.textContent = `${playerTwo.marker}, Player Two is the Winner`;
        disableGameboard();
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
        hasXWon();
        hasOWon();
        disableGameboard();
      }
    };
    return { hasXWon, hasOWon, isTied };
  })();
  let currentPlayer = playerOne;
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  return {
    playerOne,
    playerTwo,
    setMarker,
    displayGameboard,
    checkWinner,
    resetGameboard,
    box8,
  };
})();

const g = Gameboard.setMarker;
Gameboard.displayGameboard();

document.querySelector(".reset").addEventListener("click", () => {
  Gameboard.resetGameboard();
});
