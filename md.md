/*
const gameBoard = (function() {
    // Select DOM elements
    const playerInput1 = document.querySelector("#player-select1");
    const playerButton = document.querySelector(".add-player");
    const playerInput2 = document.querySelector("#player-select2");
    const playerPara1 = document.querySelector(".player1");
    const playerPara2 = document.querySelector(".player2");
    const showPlayers = document.querySelector(".player-shows");
    const boxes = document.querySelectorAll(".box");

    // Game markers
    const gameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    let currentPlayer;
    let player1, player2;

    // Player factory function
    const playerSelection = (name, marker) => {
        let score = 0;
        return {
            name,
            marker,
            getScore: function() {
                return score;
            },
            scorePlus: function() {
                score++;
                return score;
            },
            // Push marker to the board at a specific row and column
            pushMarker: function(row, col) {
                if (gameBoard[row][col] === null) {  // Only place marker if the cell is empty
                    gameBoard[row][col] = this.marker;
                }
            }
        };
    };

    // Initialize players
    player1 = playerSelection("Name", 'X');
    player2 = playerSelection("Name", 'O');

    // Event listener for player names
    playerButton.addEventListener("click", () => {
        player2.name = playerInput2.value.trim();
        player1.name = playerInput1.value.trim(); 
        
        if (player1.name === "" || player2.name === "") {
            alert("Please enter a name");
        } else {
            playerPara1.textContent = `First Player is: ${player1.name} (${player1.marker})`;
            playerPara2.textContent = `Second Player is: ${player2.name} (${player2.marker})`;
            showPlayers.innerHTML = "";
            showPlayers.append(playerPara1);
            showPlayers.append(playerPara2);
            console.log(gameBoard);
            // Start the game by setting the initial player
            currentPlayer = player1;  // Start with player1
        }
    });

    // Add event listeners to boxes
    boxes.forEach((element, index) => {
        element.addEventListener("click", () => {
            // Get the row and column based on the index of the clicked element
            const row = Math.floor(index / 3);
            const col = index % 3;

            if (element.textContent === "" && currentPlayer) { 
                element.textContent = currentPlayer.marker;
                currentPlayer.pushMarker(row, col);
                
                element.style.color = "white"; 
                element.style.textAlign = "center";
                element.style.fontSize = "55px"; 
                element.style.cursor = "pointer"; 

                if (currentPlayer === player1) {
                    console.log(`User chose ${player1.name} ${currentPlayer.marker}`);
                } else {
                    console.log(`User chose ${player2.name} ${currentPlayer.marker}`);
                }
                
                playGame(); 
            }
        });
    });

    // Function to switch current player
    const playGame = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
       
    };
    const checkWin = () => {
        // Check rows, columns, and diagonals
        for (let i = 0; i < 3; i++) {
            if (gameBoard[i][0] === currentPlayer.marker &&
                gameBoard[i][1] === currentPlayer.marker &&
                gameBoard[i][2] === currentPlayer.marker) {
                return true;
            }
            if (gameBoard[0][i] === currentPlayer.marker &&
                gameBoard[1][i] === currentPlayer.marker &&
                gameBoard[2][i] === currentPlayer.marker) {
                return true;
            }
        }
        if (gameBoard[0][0] === currentPlayer.marker &&
            gameBoard[1][1] === currentPlayer.marker &&
            gameBoard[2][2] === currentPlayer.marker) {
            return true;
        }
        if (gameBoard[0][2] === currentPlayer.marker &&
            gameBoard[1][1] === currentPlayer.marker &&
            gameBoard[2][0] === currentPlayer.marker) {
            return true;
        }
        return false;
    };
    const checkDraw = () => {
        return gameBoard.flat().every(cell => cell !== null);
    };


    // Return public methods
    return {
        playerSelection,
        playGame
    };
})(); BITMEDI
*/