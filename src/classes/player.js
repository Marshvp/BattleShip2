import GameBoard from './gameboard.js';
class Player {
    constructor(name) {
        this.myBoard = new GameBoard();
        this.name = name
    }

    attack(targetPlayer, x, y) {
        return targetPlayer.myBoard.receiveAttack(x, y);
    }
    
    randomAttack(targetPlayer) {
        const gridSize = targetPlayer.myBoard.gridSize;
        const randomX = Math.floor(Math.random() * gridSize);
        const randomY = Math.floor(Math.random() * gridSize);
        
        this.attack(targetPlayer, randomX, randomY);
    }
}

export default Player