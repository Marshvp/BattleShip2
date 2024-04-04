class Ship {
    constructor(length){
        this.length = length
        this.hits = 0
        this.isSunk = false
        this.positions = []
    }


    setPositions(positions){
        this.positions = positions
    }


    hit(){
        this.hits += 1
        this.checkIfSunk()
    }

    checkIfSunk(){
        if(this.hits === this.length){
            this.isSunk = true
            console.log('Ship is sunk');
        }
    }
}

export default Ship