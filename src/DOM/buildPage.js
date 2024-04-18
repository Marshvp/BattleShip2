import buildGrid from "./buildGrid.js";
function buildPage(playerBoard, computerBoard) {
    const body = document.querySelector('body');
    // create container
    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);

    buildContent(container, playerBoard, computerBoard);
    
}

function buildContent(container, playerBoard, computerBoard) {

    // create player content
    const playerContent = document.createElement('div');
    playerContent.classList.add('player-content');
    container.appendChild(playerContent);

    // create grid
    buildGrid(playerContent, playerBoard);
    

    // create computer content
    const computerContent = document.createElement('div');
    computerContent.classList.add('computer-content');
    container.appendChild(computerContent);

    // create grid
    buildGrid(computerContent, computerBoard);
}

function buildPlayerBoard() {

}

function buildComputerBoard() {

}

export default buildPage