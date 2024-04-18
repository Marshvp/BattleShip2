import buildPage from "./DOM/buildPage.js";
import './assets/style.css';
import Player from "./classes/player.js";
import Ship from "./classes/ship.js";

document.addEventListener('DOMContentLoaded', () => {
   
    const player1 = new Player('Player 1');
    const ship1 = new Ship(3);
    const ship2 = new Ship(4);

    player1.myBoard.placeShip(0, 0, 'horizontal', ship1);
    player1.myBoard.placeShip(5, 5, 'vertical', ship2);

    const computer = new Player('Computer');
    const CpuShip1 = new Ship(3);
    const CpuShip2 = new Ship(4); 

    computer.myBoard.placeShip(0, 0, 'horizontal', CpuShip1);
    computer.myBoard.placeShip(2, 5, 'vertical', CpuShip2);
   
    buildPage(player1.myBoard, computer.myBoard);
})