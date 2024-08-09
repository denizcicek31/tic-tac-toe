const gameSelf = (function() {
    // Select DOM elements
    const playerInput1 = document.querySelector("#player-select1");
    const playerButton = document.querySelector(".add-player");
    const playerInput2 = document.querySelector("#player-select2");
    const playerPara1 = document.querySelector(".player1");
    const playerPara2 = document.querySelector(".player2");
    const winner2 = document.querySelector("h1");
    const boxes = document.querySelectorAll(".box");
    const winner = document.querySelector("h1");
   const winnerReal = document.querySelector(".real")
    function winnerDeciding(){
        (winner.textContent = `${currentPlayer.name} is the winner!!!`)
    }
   
    const gameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    let player1, player2;
    let currentPlayer;
    let playerName = ""; // Initialize playerName to avoid issues

    const playerSelection = (name, marker, initialScore) => {
        let score = initialScore;

        return {
            name,
            marker,
            scoreGet: function() {
                return score;
            },
            scorePlus: function() {
                ++score;
                return score;
            },
            scoreReset(){
                 score = 0;
            }
        };
    };
  
    player1 = playerSelection(playerName, "X", 0);
    player2 = playerSelection(playerName, "O", 0);

    function buttonPush(row, col) {
        if (gameBoard[row][col] === null) { // Check if the cell is empty
            gameBoard[row][col] = currentPlayer.marker;
            console.log(gameBoard);
            winnerDecide(); // Function to check if there's a winner
            switchPlayer();
        }
    }

    function switchPlayer() {
        currentPlayer = (currentPlayer === player2) ? player1 : player2;
    }

    currentPlayer = player1; // Start with player1

    playerButton.addEventListener("click", () => {
        player1.name = playerInput1.value;
        player2.name = playerInput2.value;
        playerPara1.textContent = `First player is ${player1.name} with marker O`;
        playerPara2.textContent = `Second player is ${player2.name} with marker X`;
    });
 
    // Event handler for button clicks on the game board
    document.querySelectorAll('div[class*="box"]').forEach((element, index) => {
        element.addEventListener('click', () => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            buttonPush(row, col);
        });
    });
    
    function clearText(){
        setTimeout(() => {
            // Replace 'elementSelector' with the appropriate selector for your element
            boxes.forEach((element) =>{
                element.textContent = ""
            })
        }, 35);
    }
    function winnerDecide() {
        player1.scoreGet();
        player2.scoreGet();
        if ((gameBoard[0][0] === "X" && gameBoard[0][1] === "X" && gameBoard[0][2] === "X") ||
            (gameBoard[1][0] === "X" && gameBoard[1][1] === "X" && gameBoard[1][2] === "X") ||
            (gameBoard[2][0] === "X" && gameBoard[2][1] === "X" && gameBoard[2][2] === "X") ||
            (gameBoard[0][0] === "X" && gameBoard[1][0] === "X" && gameBoard[2][0] === "X") ||
            (gameBoard[0][1] === "X" && gameBoard[1][1] === "X" && gameBoard[2][1] === "X") ||
            (gameBoard[0][2] === "X" && gameBoard[1][2] === "X" && gameBoard[2][2] === "X") ||
            (gameBoard[0][0] === "X" && gameBoard[1][1] === "X" && gameBoard[2][2] === "X") ||
            (gameBoard[0][2] === "X" && gameBoard[1][1] === "X" && gameBoard[2][0] === "X")) {
            player1.scorePlus();
            winner.textContent = `${player1.name} Won the First round and score is ${player1.scoreGet()}`;
            resetGame();
            clearText()
        } else if ((gameBoard[0][0] === "O" && gameBoard[0][1] === "O" && gameBoard[0][2] === "O") ||
                   (gameBoard[1][0] === "O" && gameBoard[1][1] === "O" && gameBoard[1][2] === "O") ||
                   (gameBoard[2][0] === "O" && gameBoard[2][1] === "O" && gameBoard[2][2] === "O") ||
                   (gameBoard[0][0] === "O" && gameBoard[1][0] === "O" && gameBoard[2][0] === "O") ||
                   (gameBoard[0][1] === "O" && gameBoard[1][1] === "O" && gameBoard[2][1] === "O") ||
                   (gameBoard[0][2] === "O" && gameBoard[1][2] === "O" && gameBoard[2][2] === "O") ||
                   (gameBoard[0][0] === "O" && gameBoard[1][1] === "O" && gameBoard[2][2] === "O") ||
                   (gameBoard[0][2] === "O" && gameBoard[1][1] === "O" && gameBoard[2][0] === "O")) {
            player2.scorePlus();
            winner2.textContent = `${player2.name} Won the First round and score is ${player2.scoreGet()}`;
            resetGame();
            clearText()
        } else if (gameBoard.flat().every(cell => cell !== null)) {
            alert("It's a tie!");
            
            resetGame();
            clearText()
        }
        
        if (player1.scoreGet() === 3) {
            player1.scoreReset()
            winnerDeciding()
            alert(player1.name)
            resetGame()
            clearText()
            
        } else if (player2.scoreGet() === 3) {
            player2.scoreReset()
            console.log(player2.name)
            winnerDeciding()
            resetGame()
            clearText()
           
        }
    }

    boxes.forEach((element) => {
        element.addEventListener("click", (e) => {
            element.style.color = "white";
            element.style.fontSize = "150px"
            if (e.target.textContent === "O" || e.target.textContent === "X") {
                return;
            }
            e.target.textContent = currentPlayer.marker;
           

        });
    });

    function resetGame() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                gameBoard[i][j] = null;
            }
           
        }

    }
})();
