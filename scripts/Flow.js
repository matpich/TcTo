import Board from "./Board.js";
import Computer from "./Computer.js";
import Player from "./Player.js";

export default class Flow {
    constructor(factionChoose) {
        Board.newPlane();
        const startDiv = document.querySelector('.start');
        const board = document.getElementById('board');

        board.addEventListener('click', event => {
            //if field was succesfully added to Player object it updates DOM, otherwise returns
            if (this.currentPlayer.addField(event.target.id, this.awaitingPlayer)) {
                Board.add(event, this.currentPlayer.faction);
            } else return;           
  
            if (this.currentPlayer.checkIfWin()) {
                for (let winField of this.currentPlayer.victoryRow) {
                    document.getElementById(`${winField.x}-${winField.y}`).className += ' win';
                }
            } else if (this.currentPlayer.checkIfDraw(this.awaitingPlayer)) {
                console.log(`Remis.`)

            } else {
                this.changeTurn();
            }
        })   
        

        if (factionChoose === "x") {
            this.humanPlayer = new Player('X');
            this.computerPlayer = new Computer('O', 'X');
            this.currentPlayer = this.humanPlayer;
            this.awaitingPlayer = this.computerPlayer;
            this.turn = false;
        } else {
            this.humanPlayer = new Player('O');
            this.computerPlayer =new Computer('X', 'O') ;
            this.currentPlayer = this.computerPlayer;
            this.awaitingPlayer = this.humanPlayer;
            this.turn = true;
            this.computerMove();
        }  
    }

    changeTurn() {
        if (this.currentPlayer === this.humanPlayer) {
            this.currentPlayer = this.computerPlayer;
            this.awaitingPlayer = this.humanPlayer;
        } else {
            this.currentPlayer = this.humanPlayer;
            this.awaitingPlayer = this.computerPlayer;
        }

        this.turn = !this.turn;
        
        this.computerMove();
    }    

    computerMove() {
        if (this.turn) {
            this.computerPlayer.makeMove();
        }
    }
}