class Grass extends LivingCreature {

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
    eat() {
        var emptyCells = this.chooseCell(5);
        var newCell = random(emptyCells);
        var emptyCells1 = this.chooseCell(7)
        var newCell1 = random(emptyCells1);
        if (newCell) {
            this.multiply += 15
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in waterArr) {
                if (newX == waterArr[i].x && newY == waterArr[i].y) {
                    waterArr.splice(i, 1);
                    break;
                }
            }

        } else if (newCell) {
            this.energy -= 3
            var newX = newCell1[0];
            var newY = newCell1[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in toxicArr) {
                if (newX == toxicArr[i].x && newY == toxicArr[i].y) {
                    toxicArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.mul()
        }
    

    }


}
