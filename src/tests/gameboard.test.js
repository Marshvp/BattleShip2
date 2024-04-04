import GameBoard from '../classes/gameboard.js';
import Ship from '../classes/ship.js';

describe('GameBoard', () => {
    let board;
    beforeEach(() => {
        board = new GameBoard();
    });

    test('should place a ship horizontally within bounds', () => {
        const ship = new Ship(3);
        expect(board.placeShip(0, 0, 'horizontal', ship)).toBe(true);
    });

    test('should place a ship vertically within bounds', () => {
        const ship = new Ship(4);
        expect(board.placeShip(0, 0, 'vertical', ship)).toBe(true);
    });

    test('should not place a ship out of horizontal bounds', () => {
        const ship = new Ship(3);
        expect(board.placeShip(8, 0, 'horizontal', ship)).toBe(false);
    });

    test('should not place a ship out of vertical bounds', () => {
        const ship = new Ship(5);
        expect(board.placeShip(0, 6, 'vertical', ship)).toBe(false);
    });

    test('should not allow overlapping ships', () => {
        const ship1 = new Ship(3);
        const ship2 = new Ship(4);
        board.placeShip(0, 0, 'horizontal', ship1);
        expect(board.placeShip(1, 0, 'horizontal', ship2)).toBe(false);
    });

    test('records a missed shot for an attack on an empty cell', () => {
        expect(board.receiveAttack(0, 0)).toBe(false);
        expect(board.missedShots).toContainEqual({ x: 0, y: 0 });
    });

    test('calls the hit method on the ship for an attack on a cell with a ship', () => {
        const mockShip = new Ship(3);
        jest.spyOn(mockShip, 'hit');
        board.placeShip(0, 0, 'horizontal', mockShip);

        board.receiveAttack(0, 0);
        expect(mockShip.hit).toHaveBeenCalledWith(0);
    });

    test('marks a ship as sunk after hitting all parts of the ship', () => {
        const ship = new Ship(1); // A ship with length 1 for simplicity
        board.placeShip(0, 0, 'horizontal', ship);

        board.receiveAttack(0, 0);
        expect(ship.isSunk).toBe(true);
    });
});
