import { executeCommands } from './simulator';


describe('Simulador de Autitos', () => {
    test('Ejemplo 1: 5,5/1,2N/IAIAIAIAA', () => {
        const input = '5,5/1,2N/IAIAIAIAA';
        const expectedOutput = '1,3N';
        expect(executeCommands(input)).toBe(expectedOutput);
    });

    test('Ejemplo 2: 5,5/3,3E/AADAADADDA', () => {
        const input = '5,5/3,3E/AADAADADDA';
        const expectedOutput = '5,1E';
        expect(executeCommands(input)).toBe(expectedOutput);
    });

    test('El auto no debe salir del grid: 3,3/0,0S/A', () => {
        const input = '3,3/0,0S/A';
        const expectedOutput = '0,0S';
        expect(executeCommands(input)).toBe(expectedOutput);
    });

    test('Comandos inválidos: 4,4/2,2N/XXXX', () => {
        const input = '4,4/2,2N/XXXX';
        const expectedOutput = '2,2N'; 
        expect(executeCommands(input)).toBe(expectedOutput);
    });
});
