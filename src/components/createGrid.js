let  gridSize;

export const createGrid = (columns, rows, gridContainer) => {
    gridSize = { maxX: columns - 1, maxY: rows - 1 };  // Actualiza gridSize
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 50px)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 50px)`;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = `cell-${i}-${j}`;
            gridContainer.appendChild(cell);
        }
    }
}
