import { createGrid, moveCar, executeCommands, resetSimulator, manualMove } from './src/components/index';
import { parseFinalPosition, parseGridSize } from './src/helper/helpers';

let gridSize, gridContainer, currentX, currentY, currentDirection;

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

    document.getElementById('leftButton').onclick = () => {
        const result = manualMove('I', currentX, currentY, currentDirection, gridSize);
        currentX = result.currentX;
        currentY = result.currentY;
        currentDirection = result.currentDirection;
    };

    document.getElementById('rightButton').onclick = () => {
        const result = manualMove('D', currentX, currentY, currentDirection, gridSize);
        currentX = result.currentX;
        currentY = result.currentY;
        currentDirection = result.currentDirection;
    };

    document.getElementById('advanceButton').onclick = () => {
        const result = manualMove('A', currentX, currentY, currentDirection, gridSize);
        currentX = result.currentX;
        currentY = result.currentY;
        currentDirection = result.currentDirection;
    };
});
