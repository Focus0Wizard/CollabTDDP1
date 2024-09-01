export const executeCommands = input => {
    const [gridSize, startPosition, commands] = input.split('/');
    const [maxX, maxY] = gridSize.split(',').map(Number);
    let [x, y, direction] = [parseInt(startPosition[0]), parseInt(startPosition[2]), startPosition[3]];

    const directions = ['N', 'E', 'S', 'O'];
    const movements = {
        'N': { dx: 0, dy: 1 },
        'E': { dx: 1, dy: 0 },
        'S': { dx: 0, dy: -1 },
        'O': { dx: -1, dy: 0 }
    };

    for (let command of commands) {
        if (command === 'I') direction = directions[(directions.indexOf(direction) + 3) % 4];
        else if (command === 'D') direction = directions[(directions.indexOf(direction) + 1) % 4];
        else if (command === 'A') {
            const newX = x + movements[direction].dx;
            const newY = y + movements[direction].dy;

            if (newX >= 0 && newX <= maxX && newY >= 0 && newY <= maxY) {
                x = newX;
                y = newY;
            }
        }
    }

    return `${x},${y}${direction}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('executeButton').onclick = () => {
        const input = document.getElementById('commandInput').value;
        
        const result = executeCommands(input);
        
        document.getElementById('output').innerText = `Posición Final: ${result}`;
    };
});