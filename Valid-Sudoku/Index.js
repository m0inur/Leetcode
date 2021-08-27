/*
    Valid Sudoku
    
    Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

        1. Each row must contain the digits 1-9 without repetition.
        2. Each column must contain the digits 1-9 without repetition.
        3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
        
    Note:
        A Sudoku board (partially filled) could be valid but is not necessarily solvable.
        Only the filled cells need to be validated according to the mentioned rules.
        
    Example 1:
        Input: board = 
        [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]
        Output: true
    
    Example 2:
        Input: board = 
        [["8","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]
        Output: false
        Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
    
    Constraints:
        board.length == 9
        board[i].length == 9
        board[i][j] is a digit or '.'.
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function (board) {
    let subBox1Map = new Map();
    let subBox2Map = new Map();
    let subBox3Map = new Map();

    for (let i = 0; i < board.length; i++) {

        let colMap = new Map();
        let rowMap = new Map();

        let isRowUnique = true;
        let isColUnique = true;

        for(let j = 0; j < board[i].length; j++) {
            if(board[j][i] !== '.') {
                if(j < 3) {
                    if(subBox1Map.has(board[j][i])) return false;
                    
                    subBox1Map.set(board[j][i], 0);
                } else if (j < 6) {
                    if(subBox2Map.has(board[j][i])) return false;
                    
                    subBox2Map.set(board[j][i], 0);
                } else {
                    if(subBox3Map.has(board[j][i])) return false;
                    
                    subBox3Map.set(board[j][i], 0);
                }
            }

            if(isColUnique && board[j][i] !== '.') {
                if(colMap.has(board[j][i]))  return false;
                
                colMap.set(board[j][i], 0);
            }

            if(isRowUnique && board[i][j] !== '.') {
                if(rowMap.has(board[i][j])) return false;
                
                rowMap.set(board[i][j], 0);
            }
        }

        if(i === 2 || i === 5 || i === 8) {
            subBox1Map.clear();
            subBox2Map.clear();
            subBox3Map.clear();
        }
    }
    return true;
};

// Memory Usage: 41.2 MB, less than 85.86% of JavaScript online submissions for Valid Sudoku.