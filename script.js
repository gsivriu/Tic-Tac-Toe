let Player_1 = [];
let Player_2 = [];
let clicker = 0;
let winner;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.getElementById("showPlayer").innerHTML = "PLAYER1"; //Player 1 starts the game
function showBoard(button) {
    ++clicker;
    if (clicker % 2 != 0) {
        Player_1.push(parseInt(button.value)); //use parseInt to convert from string to number
        button.innerHTML = "X";
        document.getElementById("showPlayer").innerHTML = "PLAYER2";

    } else if (clicker % 2 == 0) {
        Player_2.push(parseInt(button.value));
        button.innerHTML = "O";
        document.getElementById("showPlayer").innerHTML = "PLAYER1";

    }
    button.disabled = true; //cannot press same button twice               
    for (let i = 0; i < winningCombinations.length; ++i) {
        if (winningCombinations[i].every(value => Player_1.includes(value))) { //search Player 1 array in winningCombinations
            winner = true;
            alert("Player 1 wins");
            location.reload();
        }
    }
    for (let i = 0; i < winningCombinations.length; ++i) {
        if (winningCombinations[i].every(value => Player_2.includes(value))) {
            winner = true;
            alert("Player 2 wins");
            location.reload();
        }
    }
    if (clicker == 9 && !winner) {
        alert("Game is tied");
    }
}