import Flow from "./Flow.js"

const startMenu = document.querySelector('form');

startMenu.addEventListener('submit', event => {
    event.preventDefault();
    
    const playerChoose = startMenu.querySelector('input[name="figure"]:checked').value;

    const start = document.querySelector('.start');
    start.innerHTML = '';

    const headerContainer = document.createElement('div');
    headerContainer.id = 'headerContainer';

    const header = document.createElement('h2');
    header.id = 'header';
    header.textContent = 'Tic Tac Toe';

    const restartButton = document.createElement('button');
    restartButton.id = 'restart';
    restartButton.textContent = 'Restart'

    start.appendChild(headerContainer);
    headerContainer.appendChild(header);
    headerContainer.appendChild(restartButton);

    new Flow(playerChoose);

    document.getElementById('restart').addEventListener('click', () => window.location.reload());
})