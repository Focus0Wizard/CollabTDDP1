import { executeCommands } from './src/simulator';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('executeButton').onclick = () => {
        const input = document.getElementById('commandInput').value;
        
        const result = executeCommands(input);
        
        document.getElementById('output').innerText = `Posición Final: ${result}`;
    };
});
