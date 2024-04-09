
import { Ship } from "./ship.js";

class GameBoard {
    constructor() {
        this.gridSize = 10;
        this.board = Array.from({ length: this.gridSize }, () => Array(this.gridSize).fill(null));
        this.ships = [];
        this.missedShots = [];
    }

    placeShip(x, y, direction, ship) {
        if (this.checkBounds(x, y, direction, ship.length)) {
            const positions = [];
            for (let i = 0; i < ship.length; i++) {
                const posX = direction === 'horizontal' ? x + i : x;
                const posY = direction === 'vertical' ? y + i : y;
                this.board[posY][posX] = { ship, position: i };
                positions.push({ x: posX, y: posY });
            }
            ship.setPositions(positions);
            this.ships.push(ship);
            return true;
        } else {
            console.error('Ship is out of bounds or overlaps other ships');
            return false;
        }
        
    }

    checkBounds(x, y, direction, length) {
         // Check bounds
        if (direction === 'null') direction = 'horizontal';
        if (direction === 'horizontal' && (x + length > this.gridSize || y >= this.gridSize)) return false;
        if (direction === 'vertical' && (y + length > this.gridSize || x >= this.gridSize)) return false;

        // Check for overlapping ships
        for (let i = 0; i < length; i++) {
            const checkX = direction === 'horizontal' ? x + i : x;
            const checkY = direction === 'vertical' ? y + i : y;
            if (this.board[checkY][checkX] !== null) return false; // Spot already taken
        }

        return true; // Valid placement
        
    }

    receiveAttack(x, y) {
        const target = this.board[y][x];
        if(target) {
            target.ship.hit(target.position);
            return true; //hit
        } else {
            this.missedShots.push({ x, y });
            return false; //miss
        }
    }

    checkIfAllShipsSunk() {
        if (this.ships.length === 0) return false;
        return this.ships.every(ship => ship.isSunk);
    }
    
}

export default GameBoard;