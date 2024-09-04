import { updateHistory, resetSimulator } from '../components';

describe('History and Reset Tests', () => {
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
});
