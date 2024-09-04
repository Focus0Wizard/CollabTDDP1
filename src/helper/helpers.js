export const parseFinalPosition= position => {
    const x = parseInt(position[0]);
    const y = parseInt(position[2]);
    const direction = position[3];
    return [x, y, direction];
}

export const parseGridSize= input => {
    const [gridSize] = input.split('/');
    const [maxX, maxY] = gridSize.split(',').map(Number);
    return { maxX, maxY };
}
