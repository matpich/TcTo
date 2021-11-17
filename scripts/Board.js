export default class Board {

    //adds plane to DOM
    static newPlane () {
        const board = document.createElement(`div`);
        const start = document.querySelector(`.start`);
        board.id = `board`;
        start.appendChild(board);
        for (let i = 1; i<=3; i++) {
            for (let j = 1; j<=3; j++) {
                let field = document.createElement(`div`);
                field.className = `field un-checked`;
                field.id = `${i}-${j}`;

                board.appendChild(field);
            }
        }
    }

    //adds 'X' or 'O' into the cell
    static add ({target, currentTarget}, faction) {
        if (target === currentTarget) {
            return;
        //prevents from overwrite the value in DOM
        } else if (target.innerHTML != '') {
            return;
        } else {
            target.className = 'field';
            target.innerHTML = `${faction}`;
        }
    }

    static endGame() {
        //removes "un-checked" css class from elements to prevent highlighting once game is finished
        const allFields = document.querySelectorAll('.field');
        for (let field of allFields) {
            field.className = 'field';
        }
    }
}