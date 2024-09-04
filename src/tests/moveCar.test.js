import { moveCar } from '../components';

document.body.innerHTML = '<div id="grid-container"></div>';
const gridContainer = document.getElementById('grid-container');

describe('Car Movement Tests', () => {
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
