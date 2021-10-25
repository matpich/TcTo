import Board from "./Board.js";
import Player from "./Player.js";

export default class Flow {
    constructor() {
        Board.newPlane();

        document.getElementById('board').addEventListener('click', event => {
            Board.add(event, this.currentPlayer.faction)
            this.currentPlayer.addField(event.target.id)
            if (this.currentPlayer.checkIfWin()) {
                console.log(`Wygrana gracza: ${this.currentPlayer.faction}`);
            } else {
                this.changeTurn();
            }
        })


        
        this.playerOne = new Player('X');
        this.playerTwo = new Player('O');

        this.currentPlayer = this.playerOne;
    }

    changeTurn() {
        this.currentPlayer === this.playerOne ? this.currentPlayer = this.playerTwo : this.currentPlayer = this.playerOne;
    }

    
}