class Solution {
  isSafe(board: string[][], value: string, row: number, col: number) {
    const n = 9;

    // row wise check
    for (let i = 0; i < n; i++) {
      if (i === col) continue;
      if (board[row][i] === value) return false;
    }

    // check for columns
    for (let i = 0; i < n; i++) {
      if (i === row) continue;
      if (board[i][col] === value) return false;
    }

    let srow: number = Math.floor(row / 3) * 3;
    let scol: number = Math.floor(col / 3) * 3;

    for (let i = srow; i <= srow + 2; i++) {
      for (let j = scol; j <= scol + 2; j++) {
        if (i === row && j === col) continue;
        if (board[i][j] === value) {
          return false;
        }
      }
    }

    return true;
  }

  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board: string[][]): boolean {
    const n = 9;
    let col = 0,
      row = 0;

    while (true) {
      if (row === n) break;
      if (col >= n) {
        col = 0;
        row++;
        continue;
      }
      if (board[row][col] === ".") {
        col++;
        continue;
      }

      if (!this.isSafe(board, board[row][col], row, col)) {
        return false;
      }

      col++;
    }

    return true;
  }
}
