import { createGrid, moveCar, executeCommands, manualMove, updateHistory, resetSimulator } from './index';


document.body.innerHTML = '<div id="grid-container"></div>';
const gridContainer = document.getElementById('grid-container');

document.body.innerHTML = `
            <div id="grid-container">
                <div id="cell-0-0" class="cell"></div>
                <div id="cell-0-1" class="cell"></div>
                <div id="cell-1-0" class="cell"></div>
                <div id="cell-1-1" class="cell"></div>
            </div>
        `;

describe('Simulador de Autitos', () => {
    test('Ejemplo 1: 5,5/1,2N/IAIAIAIAA', () => {
        const input = '5,5/1,2N/IAIAIAIAA';
        const expectedOutput = "1,3N";
        expect(executeCommands(input, createGrid, moveCar, gridContainer)).toBe(expectedOutput);
    });

    test('Ejemplo 2: 5,5/3,3E/AADAADADDA', () => {
        const input = '5,5/3,3E/AADAADADDA';
        const expectedOutput = "5,1E";
        expect(executeCommands(input, createGrid, moveCar,gridContainer)).toBe(expectedOutput);
    });

    test('El auto no debe salir del grid: 3,3/0,0S/A', () => {
        const input = '3,3/0,0S/A';
        const expectedOutput = "0,0S";
        expect(executeCommands(input,createGrid, moveCar, gridContainer)).toBe(expectedOutput);
    });

    test('Comandos inválidos: 4,4/2,2N/XXXX', () => {
        const input = '4,4/2,2N/XXXX';
        const expectedOutput = undefined; 
        expect(executeCommands(input, createGrid, moveCar, gridContainer)).toBe(expectedOutput);
    });

    test('Deberia crear la grilla con el numero correcto de celdas', () => {
        createGrid(3, 2, gridContainer);
        expect(gridContainer.children.length).toBe(6);//3x2 = 6 celdas
    });

    test('Deberia limpiar la anterior grilla', () => {
        gridContainer.innerHTML = '<div class="cell"></div>';
        createGrid(2, 2, gridContainer);
        expect(gridContainer.children.length).toBe(4);// 2x2 = 4 celdas
    });

    test('Debería mover el coche a la posición (1,1)', () => {
        document.body.innerHTML = `
            <div id="grid-container">
                <div id="cell-0-0" class="cell"></div>
                <div id="cell-0-1" class="cell"></div>
                <div id="cell-1-0" class="cell"></div>
                <div id="cell-1-1" class="cell"></div>
            </div>
        `;
        moveCar(1, 1, 2);
        const carCell = document.getElementById('cell-0-1');
        expect(carCell.classList.contains('car')).toBe(true);
        expect(carCell.innerHTML).toBe('🏎️');
    });

    test('No debería hacer nada si la celda no existe', () => {
        document.body.innerHTML = `
            <div id="grid-container">
                <div id="cell-0-0" class="cell"></div>
                <div id="cell-0-1" class="cell"></div>
                <div id="cell-1-0" class="cell"></div>
                <div id="cell-1-1" class="cell"></div>
            </div>
        `;
        moveCar(3, 3, 2);
        const carCells = gridContainer.querySelectorAll('.car');
        expect(carCells.length).toBe(0);
    });

    test('Debería mostrar error para formato de comando inválido', () => {
        global.alert = jest.fn();
        executeCommands('invalid-format', createGrid);
        expect(global.alert).toHaveBeenCalledWith('Formato de comando inválido. Debe ser "TamanioGrilla/PosicionInicial/Comandos".');
    });
});

test('El botón Izquierda debería girar el auto hacia la izquierda', () => {
    let currentX = 0;
    let currentY = 0;
    let currentDirection = 'N';
    let gridSize = { maxX: 5, maxY: 5 };

    const result = manualMove('I', currentX, currentY, currentDirection, gridSize);
    expect(result.currentDirection).toBe('O');
});

test('El botón Derecha debería girar el auto hacia la derecha', () => {
    let currentX = 0;
    let currentY = 0;
    let currentDirection = 'N';
    let gridSize = { maxX: 5, maxY: 5 };

    const result = manualMove('D', currentX, currentY, currentDirection, gridSize);
    expect(result.currentDirection).toBe('E');
});

test('El botón Avanzar debería mover el auto hacia adelante', () => {
    let currentX = 2;
    let currentY = 2;
    let currentDirection = 'N';
    let gridSize = { maxX: 5, maxY: 5 };

    const result = manualMove('A', currentX, currentY, currentDirection, gridSize);
    expect(result.currentX).toBe(2);
    expect(result.currentY).toBe(3);
});

test('El historial de movimientos debería actualizarse correctamente', () => {
    document.body.innerHTML = '<ul id="movementHistory"></ul>'; // Crear un contenedor de historial

    updateHistory('2,2N');
    const historyList = document.getElementById('movementHistory');
    expect(historyList.children.length).toBe(1);
    expect(historyList.children[0].textContent).toBe('2,2N');
});

test('El botón de reinicio debería limpiar la grilla y el historial', () => {
    document.body.innerHTML = `
        <div id="grid-container"></div>
        <ul id="movementHistory"></ul>
        <div id="output"></div>
    `;
    resetSimulator();
    expect(document.getElementById('grid-container').innerHTML).toBe('');
    expect(document.getElementById('movementHistory').innerHTML).toBe('');
    expect(document.getElementById('output').innerText).toBe('Posición Final: ');
});
