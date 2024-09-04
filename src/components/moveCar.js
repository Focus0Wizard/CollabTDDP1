export const moveCar = (x, y, gridSize) => {
    document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('car'));
    const adjustedY = gridSize - 1 - y; 
    const carCell = document.getElementById(`cell-${adjustedY}-${x}`);
    if (carCell) {
        carCell.classList.add('car');
        carCell.innerHTML = '🏎️';
    }
}

export const manualMove = (command, currentX, currentY, currentDirection, gridSize) => {
    const directions = ['N', 'E', 'S', 'O'];
    const movements = {
        'N': { dx: 0, dy: 1 },
        'E': { dx: 1, dy: 0 },
        'S': { dx: 0, dy: -1 },
        'O': { dx: -1, dy: 0 }
    };

    if (command === 'I') {
        currentDirection = directions[(directions.indexOf(currentDirection) + 3) % 4];
    } else if (command === 'D') {
        currentDirection = directions[(directions.indexOf(currentDirection) + 1) % 4];
    } else if (command === 'A') {
        const newX = currentX + movements[currentDirection].dx;
        const newY = currentY + movements[currentDirection].dy;
        if (newX >= 0 && newX <= gridSize.maxX && newY >= 0 && newY <= gridSize.maxY) {
            currentX = newX;
            currentY = newY;
        }
    }

    moveCar(currentX, currentY, gridSize.maxY);
    updateHistory(`${currentX},${currentY}${currentDirection}`);
    
    return { currentX, currentY, currentDirection };
}

export const updateHistory = move => {
    const historyList = document.getElementById('movementHistory');
    if (historyList) {
        const listItem = document.createElement('li');
        listItem.textContent = move;
        historyList.appendChild(listItem);
    } else {
        console.error('Elemento historyList no encontrado.');
    }
}
