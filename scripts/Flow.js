import Board from "./Board.js";
import Player from "./Player.js";

export default class Flow {
    constructor() {
        this.playerOne = new Player('X');
        this.playerTwo = new Player('O');
        this.currentPlayer = this.playerOne;
        this.awaitingPlayer = this.playerTwo;

        Board.newPlane();

        document.getElementById('board').addEventListener('click', event => {

            //if field was succesfully added to Player objecy it updates DOM, otherwise returns
            if (this.currentPlayer.addField(event.target.id, this.awaitingPlayer)) {
                Board.add(event, this.currentPlayer.faction);
            } else return;            

            if (this.currentPlayer.checkIfWin()) {
                console.log(`Wygrana gracza: ${this.currentPlayer.faction}`);
            } else {
                this.changeTurn();
            }
        })   

    }

    changeTurn() {
        if (this.currentPlayer === this.playerOne) {
            this.currentPlayer = this.playerTwo;
            this.awaitingPlayer = this.playerOne;
        } else {
            this.currentPlayer = this.playerOne;
            this.awaitingPlayer = this.playerTwo;
        }
    }

    
}