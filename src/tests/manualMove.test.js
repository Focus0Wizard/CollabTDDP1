import { manualMove } from '../components';

describe('Manual Move Tests', () => {
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
});
