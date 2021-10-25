export default class Player {
    constructor(faction) {
        this.faction = faction;
        this.fields = [];
    }

    checkIfWin () {
        //checks horizontal or vertical win
        let horizontal = this.fields.map(({x}) => x);
        let vertical = this.fields.map(({y}) => y);

        for (let i = 1; i<=3; i++) {
            let winHorizontal = horizontal.filter(el => el == i);
            let winVertical = vertical.filter(el => el == i);
            let slashWin = this.fields.filter(el => el == '')
    
            if (winHorizontal.length == 3) {
                return true;
            } else if (winVertical.length == 3) {
                return true;
            }
        }  

        //checks backslash win        
        let backslash = this.fields.map(el => {
            let x = Number(el.x);
            let y = Number(el.y);
            if (x == 1 && y == 1 || x == 2 && y == 2 || x == 3 && y == 3) {
                return x+y
            } else {
                return 0;
            }
        });
        if (backslash.reduce( (a,c) => a+c) == 12) return true;

        //checks forwardslash win        
        let forwardslash = this.fields.map(el => {
            let x = Number(el.x);
            let y = Number(el.y);
            if (x == 1 && y == 3 || x == 2 && y == 2 || x == 3 && y == 1) {
                return x+y
            } else {
                return 0;
            }
        });
        if (forwardslash.reduce( (a,c) => a+c) == 12) return true;
    }

    addField (position) {
        this.fields.push({
            x: position[0],
            y: position[2]
        })
    }
}