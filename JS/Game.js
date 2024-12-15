let currentPlayer = "X";
let gameStatus = ["", "", "", "", "", "", "", "", ""];

function initializeGame() {
    const grid = document.getElementById('gameGrid');
    grid.innerHTML = ''; // Clear existing cells
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        grid.appendChild(cell);
    }
    document.getElementById('turn').textContent = `Turn: ${currentPlayer}`; // Update turn display
}

function handleCellClick(event) {
    const clickedIndex = parseInt(event.target.dataset.index);
    if (gameStatus[clickedIndex] !== "") return;

    gameStatus[clickedIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkGameStatus()) return; // Stop if game ends

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById('turn').textContent = `Turn: ${currentPlayer}`; // Update turn display
}

function checkGameStatus() {
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

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
            alert(`Player ${gameStatus[a]} wins!`);
            resetGame();
            return true;
        }
    }

    if (!gameStatus.includes("")) {
        alert("It's a tie!");
        resetGame();
        return true;
    }
    return false;
}

function resetGame() {
    currentPlayer = "X";
    gameStatus = ["", "", "", "", "", "", "", "", ""];
    document.getElementById('turn').textContent = "Turn: X"; // Reset turn display
    initializeGame();
}

// Initialize the game when the page loads
document.getElementById('reset-button').addEventListener('click', resetGame);
initializeGame();

/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }
