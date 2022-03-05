class Gardener extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 10;
        this.gender = male;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.energy > 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            if (this.energy <= 0) {
                this.die()
            }
        }
    }

    eat() {
        var emptyCells = this.chooseCell(2)
        var newCell = random(emptyCells);
        var emptyCells1 = this.chooseCell(3)
        var newCell1 = random(emptyCells1);
        if (newCell) {
            this.energy += 3
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

        } else if (newCell1) {
            this.energy -= 3
            var newX = newCell1[0];
            var newY = newCell1[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }

        } else {
            this.move()
        }

    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 25) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var newgardener = new Gardener(newX, newY);
            gardenerArr.push(newgardener);
            this.multiply = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in gardenerArr) {
            if (this.x == gardenerArr[i].x && this.y == gardenerArr[i].y) {
                gardenerArr.splice(i, 1);
                break;
            }
        }
    }
}