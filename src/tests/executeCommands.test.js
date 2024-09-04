import { createGrid, moveCar, executeCommands } from '../components';

document.body.innerHTML = '<div id="grid-container"></div>';
const gridContainer = document.getElementById('grid-container');

describe('Command Execution Tests', () => {
    test('Ejemplo 1: 5,5/1,2N/IAIAIAIAA', () => {
        const input = '5,5/1,2N/IAIAIAIAA';
        const expectedOutput = "1,3N";
        expect(executeCommands(input, createGrid, moveCar, gridContainer)).toBe(expectedOutput);
    });

    test('Ejemplo 2: 5,5/3,3E/AADAADADDA', () => {
        const input = '5,5/3,3E/AADAADADDA';
        const expectedOutput = "5,1E";
        expect(executeCommands(input, createGrid, moveCar, gridContainer)).toBe(expectedOutput);
    });

    test('El auto no debe salir del grid: 3,3/0,0S/A', () => {
        const input = '3,3/0,0S/A';
        const expectedOutput = "0,0S";
        expect(executeCommands(input, createGrid, moveCar, gridContainer)).toBe(expectedOutput);
    });

    test('Comandos inválidos: 4,4/2,2N/XXXX', () => {
        const input = '4,4/2,2N/XXXX';
        const expectedOutput = undefined; 
        expect(executeCommands(input, createGrid, moveCar, gridContainer)).toBe(expectedOutput);
    });

    test('Debería mostrar error para formato de comando inválido', () => {
        global.alert = jest.fn();
        executeCommands('invalid-format', createGrid);
        expect(global.alert).toHaveBeenCalledWith('Formato de comando inválido. Debe ser "TamanioGrilla/PosicionInicial/Comandos".');
    });
});
