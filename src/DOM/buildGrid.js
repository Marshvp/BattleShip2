function buildGrid(content, gameboard) {
    
    const dim = 10
    const grid = document.createElement('div');
    grid.classList.add('grid');

    for(let i = 0; i < dim; i++) {
        for(let j = 0; j < dim; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('coords', `${i},${j}`);
            cell.style.width = '2rem';
            cell.style.height = '2rem';
            cell.style.border = '1px solid black';
            
            const shipAtCell = gameboard.ships.some(ship => {
                return ship.positions.some(pos => pos.x === j && pos.y === i);
            });

            if (shipAtCell) {
                cell.style.backgroundColor = 'blue'; // Change the color for cells with ships
            }
            

            grid.appendChild(cell);
        }
    } 
    return content.appendChild(grid);

}

export default buildGrid