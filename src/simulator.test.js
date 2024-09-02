import { executeCommands } from './simulator.js';
import createGrid from './createGrid.js';

document.body.innerHTML = '<div id="grid-container"></div>';
const gridContainer = document.getElementById('grid-container');

describe('Simulador de Autitos', () => {
    test('Ejemplo 1: 5,5/1,2N/IAIAIAIAA', () => {
        const input = '5,5/1,2N/IAIAIAIAA';
        const expectedOutput = '1,3N';
        expect(executeCommands(input, createGrid, gridContainer)).toBe(expectedOutput);
    });

    test('Ejemplo 2: 5,5/3,3E/AADAADADDA', () => {
        const input = '5,5/3,3E/AADAADADDA';
        const expectedOutput = '5,1E';
        expect(executeCommands(input, createGrid, gridContainer)).toBe(expectedOutput);
    });

    test('El auto no debe salir del grid: 3,3/0,0S/A', () => {
        const input = '3,3/0,0S/A';
        const expectedOutput = '0,0S';
        expect(executeCommands(input,createGrid, gridContainer)).toBe(expectedOutput);
    });

    test('Comandos inválidos: 4,4/2,2N/XXXX', () => {
        const input = '4,4/2,2N/XXXX';
        const expectedOutput = '2,2N'; 
        expect(executeCommands(input, createGrid, gridContainer)).toBe(expectedOutput);
    });

    test('Deberia crear la grilla con el numero correcto de celdas', () => {
        createGrid(3, 2, gridContainer);
        expect(gridContainer.children.length).toBe(6);//3x2 = 6 celdas
    });
});