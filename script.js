import { createGrid, moveCar, executeCommands, manualMove } from './src/index.js';
import {parseFinalPosition, parseGridSize} from './src/hooks/hooks.js'

let currentX, currentY, currentDirection, gridSize, gridContainer;

document.addEventListener('DOMContentLoaded', () => {
    gridContainer = document.getElementById('grid-container');

    document.getElementById('executeButton').onclick = () => {
        const input = document.getElementById('commandInput').value;
        const result = executeCommands(input, createGrid, moveCar, gridContainer);

        if (result) {
            [currentX, currentY, currentDirection] = parseFinalPosition(result);
            gridSize = parseGridSize(input);
            document.getElementById('output').innerText = `Posición Final: ${result}`;

        }
    };

    document.getElementById('resetButton').onclick = resetSimulator;
    document.getElementById('leftButton').onclick = () => manualMove('I');
    document.getElementById('rightButton').onclick = () => manualMove('D');
    document.getElementById('advanceButton').onclick = () => manualMove('A');
});
