import { createGrid, moveCar, executeCommands } from './src/components';

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');

    document.getElementById('executeButton').onclick = () => {
        const input = document.getElementById('commandInput').value;
        const result = executeCommands(input, createGrid, moveCar, gridContainer); 

        document.getElementById('output').innerText = `Posición Final: ${result}`;   
    };

});