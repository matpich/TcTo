import Board from "./Board.js";
import Player from "./Player.js";

export default class Flow {
    constructor() {
        Board.newPlane();

        document.getElementById('board').addEventListener('click', event => {
            Board.add(event)
            this.currentPlayer.addField(event.target.id)
            this.currentPlayer.checkIfWin() ? console.log('Wygrana') : console.log('Jeszcze nie')
        })


        
        this.playerOne = new Player();
        this.playerTwo = new Player();

        this.currentPlayer = this.playerOne;
    }

    changeTurn() {
        this.currentPlayer === this.playerOne ? this.currentPlayer = this.playerTwo : this.currentPlayer = this.playerOne;
    }

    
}