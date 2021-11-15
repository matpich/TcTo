import Flow from "./Flow.js"

const startMenu = document.querySelector('form');

startMenu.addEventListener('submit', event => {
    event.preventDefault();
    
    const playerChoose = startMenu.querySelector('input[name="figure"]:checked').value;

    document.querySelector('.start').innerHTML = `<h2 id="header">Tic Tac Toe</h2>`; //removes everything except the header

    new Flow(playerChoose);
})