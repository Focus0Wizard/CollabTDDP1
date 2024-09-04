
export const executeCommands = (input, createGrid, moveCar, gridContainer) => {
    const regex = /^(\d+,\d+)\/(\d+),(\d+)([NSEO])\/([IDAS]*)$/;
    if (!regex.test(input)) {
        alert('Formato de comando inválido. Debe ser "TamanioGrilla/PosicionInicial/Comandos".');
        return;
    }
    const [gridSize, startPosition, commands] = input.split('/');
    const [maxX, maxY] = gridSize.split(',').map(Number);
    let [x, y, direction] = [parseInt(startPosition[0]), parseInt(startPosition[2]), startPosition[3]];

    if (isNaN(maxX) || isNaN(maxY) || isNaN(x) || isNaN(y) || !['N', 'E', 'S', 'O'].includes(direction)) {
        alert('Datos de entrada inválidos.');
        return;
    }
    

    const directions = ['N', 'E', 'S', 'O'];
    const movements = {
        'N': { dx: 0, dy: 1 },
        'E': { dx: 1, dy: 0 },
        'S': { dx: 0, dy: -1 },
        'O': { dx: -1, dy: 0 }
    };

    createGrid(maxX + 1 , maxY + 1, gridContainer);

    for (let command of commands) {
        if (command === 'I') direction = directions[(directions.indexOf(direction) + 3) % 4];
        else if (command === 'D') direction = directions[(directions.indexOf(direction) + 1) % 4];
        else if (command === 'A') {
            const newX = x + movements[direction].dx;
            const newY = y + movements[direction].dy;

            if (newX >= 0 && newX <= maxX && newY >= 0 && newY <= maxY) {
                x = newX;
                y = newY;
            }
        }
        else {
        alert(`Comando inválido: ${command}`);
        return;
        }
        moveCar(x, y, maxY+1)
    }
    return `${x},${y}${direction}`;
}

let currentX = null;
let currentY = null;
let currentDirection = null;
let gridSize = null;

export const  resetSimulator = () => {
    document.getElementById('grid-container').innerHTML = '';
    document.getElementById('movementHistory').innerHTML = '';
    document.getElementById('output').innerText = 'Posición Final: ';
    currentX = null;
    currentY = null;
    currentDirection = null;
    gridSize = null;
}
