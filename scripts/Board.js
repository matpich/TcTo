export default class Board {
    static newPlane () {
        const board = document.getElementById('board');
        for (let i = 1; i<=3; i++) {
            for (let j = 1; j<=3; j++) {
                let field = document.createElement('div');
                field.className = `field`;
                field.id = `${i}-${j}`;

                board.appendChild(field);
            }
        }
    }

    static add ({target, currentTarget}) {
        if (target === currentTarget) {
            console.log('jajko');
        } else target.innerHTML = 'XXXXXX';
    }
}