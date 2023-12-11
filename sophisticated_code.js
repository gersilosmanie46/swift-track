/* sophisticated_code.js */

// This code is an implementation of a Sudoku solver using backtracking algorithm

function solveSudoku(board) {
  if (!isValidBoard(board)) {
    throw new Error("Invalid Sudoku board");
  }

  if (solveHelper(board)) {
    return board;
  } else {
    throw new Error("Unable to solve Sudoku");
  }
}

function solveHelper(board) {
  var emptyCell = findEmptyCell(board);

  if (emptyCell === null) {
    return true; // Sudoku solved!
  }

  var row = emptyCell[0];
  var col = emptyCell[1];

  for (var num = 1; num <= 9; num++) {
    if (isValidMove(board, row, col, num)) {
      board[row][col] = num;

      if (solveHelper(board)) {
        return true;
      }

      board[row][col] = 0; // Undo the move
    }
  }

  return false; // No solution found
}

function isValidMove(board, row, col, num) {
  return (
    isValidRow(board, row, num) &&
    isValidColumn(board, col, num) &&
    isValidBox(board, row - (row % 3), col - (col % 3), num)
  );
}

function isValidBoard(board) {
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      if (board[row][col] !== 0 && !isValidMove(board, row, col, board[row][col])) {
        return false;
      }
    }
  }
  return true;
}

function isValidRow(board, row, num) {
  for (var col = 0; col < 9; col++) {
    if (board[row][col] === num) {
      return false;
    }
  }
  return true;
}

function isValidColumn(board, col, num) {
  for (var row = 0; row < 9; row++) {
    if (board[row][col] === num) {
      return false;
    }
  }
  return true;
}

function isValidBox(board, boxStartRow, boxStartCol, num) {
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      if (board[row + boxStartRow][col + boxStartCol] === num) {
        return false;
      }
    }
  }
  return true;
}

function findEmptyCell(board) {
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return null;
}

// Test case
var sudokuBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

try {
  var solvedBoard = solveSudoku(sudokuBoard);
  console.log("Solved Sudoku:");
  printBoard(solvedBoard);
} catch (error) {
  console.error(error.message);
}

function printBoard(board) {
  for (var row = 0; row < 9; row++) {
    var rowStr = "";
    for (var col = 0; col < 9; col++) {
      rowStr += board[row][col] + " ";
    }
    console.log(rowStr);
  }
}
