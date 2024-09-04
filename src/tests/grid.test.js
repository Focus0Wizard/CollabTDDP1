import { createGrid } from '../components';

document.body.innerHTML = '<div id="grid-container"></div>';
const gridContainer = document.getElementById('grid-container');

describe('Grid Tests', () => {
    test('Debería crear la grilla con el número correcto de celdas', () => {
        createGrid(3, 2, gridContainer);
        expect(gridContainer.children.length).toBe(6); // 3x2 = 6 celdas
    });

    test('Debería limpiar la anterior grilla', () => {
        gridContainer.innerHTML = '<div class="cell"></div>';
        createGrid(2, 2, gridContainer);
        expect(gridContainer.children.length).toBe(4); // 2x2 = 4 celdas
    });
});
