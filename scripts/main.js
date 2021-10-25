import Board from "./Board.js"

Board.newPlane();

document.getElementById('board').addEventListener('click', event => {
    Board.add(event)
})