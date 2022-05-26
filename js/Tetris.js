
class Tetris {
// property
    constructor() 
    {
        this.score = 0;
        this.boardHeight = 23;
        this.boardWidth = 10;
        this.currentBoard = new Array(this.boardHeight).fill(0).map(() => new Array(this.boardWidth).fill(0))
        this.landedBoard = new Array(this.boardHeight).fill(0).map(() => new Array(this.boardWidth).fill(0))
        this.currentTetromino = this.ramdomTetromino();
        // draw variable
        this.canvas = getEle('tetris-canvas')
        this.ctx = this.canvas.getContext('2d')
    }
// method
    draw(blockSize = 24, padding = 4) 
    {
        // ve board tetris
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.lineWidth = 2          // size * n + padding * n + 1 // padding1 [] padding2
        this.ctx.rect(padding, padding, blockSize * this.boardWidth + padding * (this.boardWidth + 1), blockSize * (this.boardHeight - 3) + padding * (this.boardHeight - 3 + 1))
        this.ctx.stroke()
        // ve block board
        for (let i = 3; i < this.boardHeight; i++) {
            for (let j = 0; j < this.boardWidth; j++) {
                if (this.currentBoard[i][j] > 0) { 
                    this.ctx.fillStyle = 'rgb(0,0,0)'
                }else{
                    this.ctx.fillStyle = 'rgb(248,248,248)'
                }                   // -[]-[]-[]
                this.ctx.fillRect(padding *2+j*(blockSize+padding), padding*2+(i-3)*(blockSize+padding), blockSize, blockSize)
            }
        }
        // diem so game
        this.ctx.fillStyle = 'rgba(238, 238, 238)'
        this.ctx.fillRect(290,3, 130, 567)
        this.ctx.fillStyle = 'rgb(0, 0, 0)'
        this.ctx.font = '18px Arial';
        this.ctx.fillText('TIẾP THEO:', 300, 28)
        this.ctx.fillText('ĐIỂM SỐ:', 300, 200)
        this.ctx.fillText(this.score.toString(), 300, 230)
    }
    // ramdom khoi tetromino
    ramdomTetromino(){
        const rand = Math.floor(Math.random() * Math.floor(7))
        switch(rand){
            case 0:
                return new LShape(1, 4)
            case 1:
                return new JShape(1, 4)
            case 2:
                return new OShape(2, 4)
            case 3:
                return new TShape(2, 4)
            case 4:
                return new SShape(2, 4)
            case 5:
                return new ZShape(2, 4)
            case 6:
                return new IShape(0, 4)
        }
    }
    // tao loop cho tetro fall xuong
    play(){
        setInterval(()=>{
            this.progress()
            this.updateCurrentBoard()
            this.draw()
        },800)
    }
    progress() {
        this.currentTetromino.fall() // fall
    }
    updateCurrentBoard() {
        // clear board = 0 het 
        for (let i = 0; i < this.boardHeight; i++) {
            for (let j = 0; j < this.boardWidth; j++) {
                this.currentBoard[i][j] = this.landedBoard[i][j]
            }
        }
        // draw khoi tetris
        for (let i = 0; i < this.currentTetromino.height; i++) {
            for (let j = 0; j < this.currentTetromino.width; j++) {
                if (this.currentTetromino.shape[i][j] > 0) { // kiem tra co so nguyen ko
                    this.currentBoard[this.currentTetromino.row + i][this.currentTetromino.col + j] = this.currentTetromino.shape[i][j]
                }
            }
        }
    }

}