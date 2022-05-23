//GLOBAL
const getEle = id => document.getElementById(id)

class Tetris {
// property
    constructor() 
    {
        this.score = 0;
        this.boardHeight = 23;
        this.boardWidth = 10;
        this.currentBoard = new Array(this.boardHeight).fill(0).map(() => new Array(this.boardWidth).fill(0))
        this.landedBoard = new Array(this.boardHeight).fill(0).map(() => new Array(this.boardWidth).fill(0))
        this.currentTetromino = null;
        // draw variable
        this.canvas = getEle('tetris-canvas')
        this.ctx = this.canvas.getContext('2d')
    }
// method
    draw(bloackSize = 24, padding = 4)
    {
        // len khung tetris
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.ctx.lineWidth = 2
        this.ctx.rect(padding,padding,bloackSize*this.boardWidth + padding*(this.boardWidth + 1),bloackSize*this.boardHeight + padding*(this.boardHeight - 3 + 1))
        this.ctx.stroke()
        // ve cac block day khung game
        for(let i = 3; i < this.boardHeight; i++){
            for(let j = 0; j < this.boardWidth; j++){
                if(this.currentBoard[i][j] > 0){   }
            }
        }
    }

}
let game = new Tetris
console.log(game.currentBoard)

