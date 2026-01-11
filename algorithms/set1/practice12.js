"use strict";
/**
 * Find the number of cells equal to "1" that have at least one adjacent "1" (up/down/left/right).
 * grid = [
  ["1","1","0","0"],
  ["1","0","0","1"],
  ["0","0","1","1"],
  ["0","0","1","1"]
]

Expected output 8
 */
(() => {
    const grid = [
        ["1", "1", "0", "0"],
        ["1", "0", "0", "1"],
        ["0", "0", "1", "1"],
        ["0", "0", "1", "1"]
    ];
    function numCells(grid) {
        var _a, _b;
        const cells = [];
        for (const row in grid) {
            for (const col in grid[row]) {
                cells.push({ row: Number(row), col: Number(col) });
            }
        }
        let total = 0;
        for (const cell of cells) {
            const current = grid[cell.row][cell.col];
            const position = {
                above: grid[cell.row - 1] ? grid[cell.row - 1][cell.col] : '0',
                down: grid[cell.row + 1] ? grid[cell.row + 1][cell.col] : '0',
                left: (_a = grid[cell.row][cell.col - 1]) !== null && _a !== void 0 ? _a : '0',
                right: (_b = grid[cell.row][cell.col + 1]) !== null && _b !== void 0 ? _b : '0',
            };
            const numAdjacent = Object.values(position).filter(value => value === '1').length;
            if (current === '1' && numAdjacent >= 1) {
                total++;
            }
        }
        return total;
    }
    console.log(numCells(grid));
})();
/**
 * Issues with Your Code

Unnecessary intermediate array - you don't need to store all cells first
Using for...in on arrays - should use for...of or regular for loops (for...in iterates keys as strings)
Extra object creation - the position object adds complexity
No TypeScript types - grid parameter is untyped
 *


const grid = [
    ["1", "1", "0", "0"],
    ["1", "0", "0", "1"],
    ["0", "0", "1", "1"],
    ["0", "0", "1", "1"]
];

function numCells(grid: string[][]): number {
    let total = 0;
    const rows = grid.length;
    const cols = grid[0]?.length ?? 0;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Skip if current cell is not "1"
            if (grid[row][col] !== "1") continue;
            
            // Check if any adjacent cell is "1"
            const hasAdjacentOne =
                (row > 0 && grid[row - 1][col] === "1") ||           // up
                (row < rows - 1 && grid[row + 1][col] === "1") ||    // down
                (col > 0 && grid[row][col - 1] === "1") ||           // left
                (col < cols - 1 && grid[row][col + 1] === "1");      // right
            
            if (hasAdjacentOne) {
                total++;
            }
        }
    }
    
    return total;
}

console.log(numCells(grid)); // 8
 */ 
