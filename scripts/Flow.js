import Board from "./Board.js";
import Computer from "./Computer.js";
import Player from "./Player.js";

export default class Flow {
    constructor() {
        this.playerOne = new Player('X');
        this.playerTwo = new Player('O');
        this.currentPlayer = this.playerOne;
        this.awaitingPlayer = this.playerTwo;
        this.turn = false;

        Board.newPlane();

        document.getElementById('board').addEventListener('click', event => {

            
            // if (this.currentPlayer.checkIfDraw(this.awaitingPlayer)) {
            //     console.log("Remis");
            //     return;
            // }

            //if field was succesfully added to Player object it updates DOM, otherwise returns
            if (this.currentPlayer.addField(event.target.id, this.awaitingPlayer)) {
                Board.add(event, this.currentPlayer.faction);
            } else return;            

            

            if (this.currentPlayer.checkIfWin()) {
                console.log(`Wygrana gracza: ${this.currentPlayer.faction}`);
            } else if (this.currentPlayer.checkIfDraw(this.awaitingPlayer)) {
                console.log(`Remis.`)
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

        this.turn = !this.turn;
        
        this.computerMove();
    }    

    static draw () {
        console.log('Remis.');
    }

    computerMove() {
        if (this.turn) {
            Computer.makeMove();
        }
    }
}