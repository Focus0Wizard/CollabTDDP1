import { executeCommands } from './simulator.js';
import createGrid from './createGrid.js';
import moveCar from './moveCar.js';

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
        const expectedOutput = '1,3N';
        expect(executeCommands(input, createGrid, moveCar, gridContainer)).toBe(expectedOutput);
    });

    test('Ejemplo 2: 5,5/3,3E/AADAADADDA', () => {
        const input = '5,5/3,3E/AADAADADDA';
        const expectedOutput = '5,1E';
        expect(executeCommands(input, createGrid, moveCar,gridContainer)).toBe(expectedOutput);
    });

    test('El auto no debe salir del grid: 3,3/0,0S/A', () => {
        const input = '3,3/0,0S/A';
        const expectedOutput = '0,0S';
        expect(executeCommands(input,createGrid, moveCar, gridContainer)).toBe(expectedOutput);
    });

    test('Comandos inválidos: 4,4/2,2N/XXXX', () => {
        const input = '4,4/2,2N/XXXX';
        const expectedOutput = '2,2N'; 
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
});