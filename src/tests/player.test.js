import Player from '../classes/player.js'; // Update the path as needed
import GameBoard from '../classes/gameboard.js'; // Update the path as needed

jest.mock('../classes/gameboard.js'); // Mock the GameBoard class

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    GameBoard.mockClear();
});

describe('Player', () => {
    test('should attack a specified coordinate successfully', () => {
        const player1 = new Player('Player 1');
        const player2 = new Player('Player 2');
        player1.attack(player2, 5, 5);

        // Assuming GameBoard's receiveAttack method has been correctly mocked
        expect(player2.myBoard.receiveAttack).toHaveBeenCalledWith(5, 5);
    });

    test('should perform a random attack within bounds', () => {
        const player1 = new Player('Player 1');
        const player2 = new Player('Player 2');

        // Mock implementation to control random values for testing
        Math.floor = jest.fn(() => 5);
        player1.randomAttack(player2);

        expect(player2.myBoard.receiveAttack).toHaveBeenCalledWith(5, 5);
    });
})