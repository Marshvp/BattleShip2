import Ship from '../classes/ship.js';

describe('Ship', () => {
    test('should record a hit', () => {
        const ship = new Ship(3);
        ship.hit();
        expect(ship.hits).toBe(1);
    });

    test('should sink after sufficient hits', () => {
        const ship = new Ship(2);
        ship.hit();
        ship.hit();
        expect(ship.isSunk).toBe(true);
    });

    test('should not sink before sufficient hits', () => {
        const ship = new Ship(4);
        ship.hit();
        ship.hit();
        expect(ship.isSunk).toBe(false);
    });
});
