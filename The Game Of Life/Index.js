/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let gameOfLife = function(board) {
    let orgBoard = board.map(function(arr) {
        return arr.slice();
    });

    for(let i = 0; i < orgBoard.length; i++) {
        for(let j = 0; j < orgBoard[i].length; j++) {
            // Check valid moves
            let liveCells = 0;
            let deadCells = 0;

            // Left
            if(j > 0) {
                if (orgBoard[i][j-1] === 0) {
                    deadCells++;
                } else {
                    liveCells++;
                }
            }

            // Right
            if(j !== orgBoard[i].length - 1) {
                if (orgBoard[i][j+1] === 0) {
                    deadCells++;
                } else {
                    liveCells++;
                }
            }

            // Up
            if(i > 0) {
                if(orgBoard[i - 1][j] === 0) {
                    deadCells++
                } else {
                    liveCells++;
                }

                // Up Left
                if(j > 0) {
                    if (orgBoard[i-1][j-1] === 0) {
                        deadCells++;
                    } else {
                        liveCells++;
                    }
                }

                // Up Right
                if(j !== orgBoard[i].length - 1) {
                    if (orgBoard[i - 1][j+1] === 0) {
                        deadCells++;
                    } else {
                        liveCells++;
                    }
                }
            }

            // Down
            if(i !== orgBoard.length - 1) {
                if(orgBoard[i + 1][j] === 0) {
                    deadCells++
                } else {
                    liveCells++;
                }

                // Down Left
                if(j > 0) {
                    if (orgBoard[i+1][j-1] === 0) {
                        deadCells++;
                    } else {
                        liveCells++;
                    }
                }

                // Down Right
                if(j !== orgBoard[i].length - 1) {
                    if (orgBoard[i + 1][j+1] === 0) {
                        deadCells++;
                    } else {
                        liveCells++;
                    }
                }
            }

            let newCell = 0;
            if(orgBoard[i][j] === 1) {
                if(liveCells === 2 || liveCells === 3){
                    newCell = 1;
                }
            }
            else if(liveCells < 2) {
                newCell = 0;
            }
            else if(liveCells === 3)
            {
                newCell = 1;
            }
            else if(liveCells > 3) {
                newCell = 0;
            }

            board[i].splice(j, 1, newCell);
        }
    }
};

// Runtime: 68 ms, faster than 95.44% of JavaScript online submissions for Game of Life.