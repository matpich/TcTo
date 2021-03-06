export default class Player {
    constructor(faction) {
        this.faction = faction;
        this.fields = [];
        this.victoryRow =[];
    }

    checkIfWin () {
        for (let i = 1; i<=3; i++) {
            let winHorizontal = this.fields.filter(el => el.x == i);
            let winVertical = this.fields.filter(el => el.y == i);
    
            if (winHorizontal.length == 3) {
                this.victoryRow = this.victoryRow.concat(winHorizontal);
                return true;
            } else if (winVertical.length == 3) {
                this.victoryRow = this.victoryRow.concat(winVertical);
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
        if (backslash.reduce( (a,c) => a+c) == 12) {
            this.victoryRow = [{x:1,y:1},{x:2,y:2},{x:3,y:3}]; //it has to be done manualy due to verify method
            return true;
        }

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
        if (forwardslash.reduce( (a,c) => a+c) == 12) {
            this.victoryRow = [{x:1,y:3},{x:2,y:2},{x:3,y:1}]; //it has to be done manualy due to verify method
            return true;
        }
    }

    checkIfDraw (opponent) {
        //function doesn't check slash and backslash rows -it's not possible to draw without blocking these rows
        let rowCounter = 0; 
        
        //checks horizontal 
        for (let i = 1; i <=3; i++) {
            let playerRow = this.fields.filter( ({x,y}) => x == i);
            let computerRow = opponent.fields.filter( ({x,y}) => x == i);

            if (playerRow.length != 0 && computerRow.length != 0) rowCounter++
        }

        //checks vertical 
        for (let i = 1; i <=3; i++) {
            let playerRow = this.fields.filter( ({x,y}) => y == i);
            let computerRow = opponent.fields.filter( ({x,y}) => y == i);

            if (playerRow.length != 0 && computerRow.length != 0) rowCounter++
        }

        if (rowCounter == 6) return true;
    }

    checkIfOccupied (xP, yP, opponent) {
        //return if field is taken by opponent
        let takenByOpponent = opponent.fields.find(({x,y}) => x == xP && y == yP);
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