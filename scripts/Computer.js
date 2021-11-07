import Flow from "./Flow.js"

export default class Computer {
    //checks how many figures human has in row and if it's blocked by computer. If not then return true.
    static checkDanger (row) {
        let figureCount = 0;
        for (let i of row ) {
            if (i.outerText == 'X') {
                figureCount++; //if human has figure in row increase counter
            } else if (i.outerText == 'O') {
                figureCount--; //if computer has figure in row then it means it's bloced and decreses counter
            }
        }

        if (figureCount == 2) {
            return true; //if there are 2 not blocked figures in the row then it's danger
        } else return false //otherwise it is not
    }

    //checks if it's possible to win in one move and do it
    static checkWinInOneMove (board) {
        for (let row in board) {
            //checks if row is to win in one move
            let figureCount = 0;
            for (let i of board[row] ) {
                if (i.outerText == 'O') {
                    figureCount++; //if computer has figure in row increase counter
                } else if (i.outerText == 'X') {
                    figureCount--; //if human has figure in row then it means it's bloced and decreses counter
                }
            }
  
            if (figureCount == 2) {
                Computer.clickField(board[row]);
                return true; //win in one move
            } 
        }

        return false; //returns false if there was no win in one move
    }

    //check which rows have a chance to win and returns them
    static checkCandidates(row) {
        let figureCount = 0;
        for (let i of row ) {
            if (i.outerText == 'X') {
                figureCount++; //if human has figure in row increase counter
            }
        }

        if (figureCount > 0) {
            return false; //if any of the opponent figures are in the row then return false to indicate it makes no sense to try
        } else return row; //if row doesn't have any opponents figures return potential row
    }

    static clickField(row) {
        let emptyField = row.filter( el => el.outerText == '');
        emptyField.sort((a, b) => 0.3 - Math.random()); //if there's one than more empty fields then shuffle
        emptyField[0].click();
    }

    static tryToWin (board) {
        let rowsWithPotential = [];
        for (let row in board) {
            if (Computer.checkCandidates(board[row])) {
                rowsWithPotential.push(board[row]); //if row has potential to win add it to array of potential rows
            } 
        }

        //if there are no any rows with potential to win then it's a draw
        if (rowsWithPotential.length == 0) {
            Flow.draw();
            return;
        }

        rowsWithPotential.sort((a, b) => 0.3- Math.random()); //if there are more than one row with potentail then it makes no difference which is choosen so potential rows are shuffled
        Computer.clickField(rowsWithPotential[0]);
    }

    static makeMove () {
        const fields = document.querySelectorAll(`.field`);

        let board = { //colelction of rows and columns
            rowOne: [fields[0],fields[1],fields[2]],
            rowTwo: [fields[3],fields[4],fields[5]],
            rowThr: [fields[6],fields[7],fields[8]],
            colOne: [fields[0],fields[3],fields[6]],
            colTwo: [fields[1],fields[4],fields[7]],
            colThr: [fields[2],fields[5],fields[8]],
            bckSlh: [fields[0],fields[4],fields[8]],
            frwSlh: [fields[6],fields[4],fields[2]]
        }

        //always starts with center field if available
        if (!fields[4].outerText) {
            fields[4].click();
            return
        } 

        for (let row in board) {
            //is any row dangerous?
            if (Computer.checkDanger(board[row])) { 
                //if "yes" then try to win in one move
                if (Computer.checkWinInOneMove(board)) {
                    return; //win
                //if "no" then block dangerous row
                } else {
                    Computer.clickField(board[row]) //dangerous row blocked
                    return;
                }                  
            }
        }

        //if none of the fields are dangerous and win in one move not available then try to win
        Computer.tryToWin(board);
    }
}