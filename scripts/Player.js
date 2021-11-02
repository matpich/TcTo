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

    checkIfOccupied (xP, yP, opponent) {
        //return if field is taken by opponent
        let takenByOpponent = opponent.fields.find(({x,y}) => x == xP && y == yP);
        console.log(opponent.faction, takenByOpponent, opponent.fields.length)
        if (takenByOpponent) return true;

        //return if field is already taken by player
        let takenByPlayer = this.fields.find(({x,y}) => x == xP && y == yP);
        if (takenByPlayer) return true;
    }

    addField ([xP, , yP], opponent) {
        //prevents doubling the values
        if (this.checkIfOccupied(xP,yP, opponent)) return false;

        //ads value if non exist
        this.fields.push({
            x: xP,
            y: yP
        })

        return true;
    }
}