import { createGrid, moveCar, executeCommands, resetSimulator, manualMove } from './src//components/index';
import {parseFinalPosition,parseGridSize} from './src/hooks/hooks'

let currentX, currentY, currentDirection, gridSize, gridContainer;

document.addEventListener('DOMContentLoaded', () => {
    gridContainer = document.getElementById('grid-container');

    document.getElementById('executeButton').onclick = () => {
        const input = document.getElementById('commandInput').value;
        const result = executeCommands(input, createGrid, moveCar, gridContainer);

        if (result) {
            [currentX, currentY, currentDirection] = parseFinalPosition(result);
            gridSize = parseGridSize(input); // Asegúrate de que se inicializa aquí
            document.getElementById('output').innerText = `Posición Final: ${result}`;
        }
    };

    document.getElementById('resetButton').onclick = resetSimulator;
    document.getElementById('leftButton').onclick = () => manualMove('I');
    document.getElementById('rightButton').onclick = () => manualMove('D');
    document.getElementById('advanceButton').onclick = () => manualMove('A');
});