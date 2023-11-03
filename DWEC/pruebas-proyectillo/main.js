const board = document.querySelector('.board');
const resetButton = document.querySelector('#reset');
const ROWS = 8;
const COLS = 8;
let currentPlayer = 'red';

// Crear una matriz para representar el tablero
const grid = new Array(ROWS).fill(null).map(() => new Array(COLS).fill(null));

function createBoard() {
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;
            board.appendChild(cell);
        }
    }
}

function dropToken(event) {
    const col = event.target.dataset.col;
    const row = findAvailableRow(col);
    if (row !== -1) {
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
        cell.classList.add(currentPlayer);
        grid[row][col] = currentPlayer;

        if (checkForWin(row, col)) {
            alert(`${currentPlayer === 'red' ? 'Rojo' : 'Amarillo'} gana.`);
            resetGame();
            return;
        }

        currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
    }
}

function findAvailableRow(col) {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (!grid[row][col]) {
            return row;
        }
    }
    return -1; // No hay celdas disponibles en esta columna.
}

function checkForWin(row, col) {
    const directions = [
        [-1, 0],  // Vertical
        [0, 1],   // Horizontal
        [1, 1],   // Diagonal hacia abajo-derecha
        [1, -1]   // Diagonal hacia abajo-izquierda
    ];

    for (const [dr, dc] of directions) {
        let count = 1;  // Contador de fichas en línea
        count += checkDirection(row, col, dr, dc);  // Suma las fichas en la dirección
        count += checkDirection(row, col, -dr, -dc);  // Suma las fichas en la dirección opuesta

        if (count >= 4) {
            return true;  // Hay un ganador
        }
    }

    return false;  // No hay ganador
}

function checkDirection(row, col, dr, dc) {
    let count = 0;
    const player = grid[row][col];

    for (let i = 1; i < 4; i++) {
        const newRow = row + i * dr;
        const newCol = col + i * dc;

        if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS) {
            break;  // Fuera del tablero
        }

        if (grid[newRow][newCol] === player) {
            count++;
        } else {
            break;  // Ficha diferente en la dirección
        }
    }

    return count;
}

function resetGame() {
    // Eliminar el tablero actual
    board.innerHTML = '';

    // Restablecer la matriz del tablero
    grid.forEach(row => row.fill(null));
    currentPlayer = 'red';

    // Volver a crear el tablero
    createBoard();
}

resetButton.addEventListener('click', resetGame);


createBoard();
board.addEventListener('click', dropToken);
resetButton.addEventListener('click', resetGame);
