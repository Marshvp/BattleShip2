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

            grid.appendChild(cell);
        }
    } 
    return content.appendChild(grid);

}

export default buildGrid