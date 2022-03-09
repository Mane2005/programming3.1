function generator(matLen, gr, grEat, pr, gar, wat, bomb,toxic) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < gar; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < wat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < bomb; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }
    for (let i = 0; i < toxic; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }
    }
    return matrix;
}

let side = 20;

let matrix = generator(20, 120, 40, 6, 25, 10, 6,10);

let grassArr = []
let grassEaterArr = []
let predatorArr = []
let gardenerArr = []
let waterArr = []
let bombArr = []
let toxicArr = []

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(3)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                let grE = new GrassEater(x, y)
                grassEaterArr.push(grE)
            }
            else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                predatorArr.push(pr)
            }
            else if (matrix[y][x] == 4) {
                let gardener = new Gardener(x, y)
                gardenerArr.push(gardener)
            }
            else if (matrix[y][x] == 5) {
                let b = new Water(x, y)
                waterArr.push(b)
            }
            else if (matrix[y][x] == 6) {
                let bomb = new Bomb(x, y)
                bombArr.push(bomb)
            }
            else if (matrix[y][x] == 7) {
                let  t = new Toxic(x, y)
                toxicArr.push(t)
            }
        }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green')
            }
            else if (matrix[y][x] == 0) {
                fill('#acacac')
            }
            else if (matrix[y][x] == 2) {
                fill('yellow')
            }
            else if (matrix[y][x] == 3) {
                fill('blue')
            }
            else if (matrix[y][x] == 4) {
                fill('red')
            }
            else if (matrix[y][x] == 5) {
                fill('#9FE2BB')
            }
            else if (matrix[y][x] == 6) {
                fill('#F39C12')
            }
            else if (matrix[y][x] == 7) {
                fill('#8E44AD')
            }
            rect(x * side, y * side, side, side)
        }
    }


    for (let i in grassArr) {
        grassArr[i].eat()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].mul()
        predatorArr[i].eat()
    }
    for (let i in gardenerArr) {
        gardenerArr[i].mul()
        gardenerArr[i].eat()
    }
    for (let i in waterArr) {
        waterArr[i].mul()
    }
    for (let i in bombArr) {
        bombArr[i].outbreak()
    }
    for (let i in toxicArr) {
        toxicArr[i].mul()
    }

}

var clickCount = 0;
function clickHandlerW(evt){
   clickCount = 1;
}
function clickHandlerS(evt){
    clickCount = 2;
 }
 
 function clickHandlerSp(evt){
    clickCount = 3;
 }
 
 function clickHandlerA(evt){
    clickCount = 4;
 }
 
var w = document.getElementById("w");
w.addEventListener("click", clickHandlerW);
var s = document.getElementById("s");
s.addEventListener("click", clickHandlerS);
var sp = document.getElementById("sp");
s.addEventListener("click", clickHandlerSp);
var a = document.getElementById("a");
a.addEventListener("click", clickHandlerA);
