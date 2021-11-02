export default class Board {

    //adds plane to DOM
    static newPlane () {
        const board = document.createElement(`div`);
        board.id = `board`;
        document.body.appendChild(board);
        for (let i = 1; i<=3; i++) {
            for (let j = 1; j<=3; j++) {
                let field = document.createElement(`div`);
                field.className = `field`;
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
        } else target.innerHTML = `${faction}`;
        
    }
}