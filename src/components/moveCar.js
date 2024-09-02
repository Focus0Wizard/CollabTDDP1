export const moveCar = (x, y, gridSize) => {
    document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('car'));
        
    // Ajustar la posición para que (0,0) esté en la esquina inferior izquierda
    const adjustedY = gridSize - 1 - y;  // Cambiar la coordenada Y para invertir la grilla
    const carCell = document.getElementById(`cell-${adjustedY}-${x}`);
    if (carCell) {
        carCell.classList.add('car');
        carCell.innerHTML = '🏎️';
    }
}
