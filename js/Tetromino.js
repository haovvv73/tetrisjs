class Tetromino {
    constructor(row, col, angle = 0) {
      if (this.constructor === Tetromino) {
        throw new Error("This is an abstract class.")
      }
      this.row = row // vi tri hang o thu n? 
      this.col = col // vi tri cot  o thu n?
      this.angle = angle
    }
  
    // get value con voi bien shapes
    get shape() {
      return this.constructor.shapes[this.angle]
    }
  
    get width() {
      return this.shape[0].length
    }
  
    get height() {
      return this.shape.length
    }
  
    fall() {
      this.row += 1
    }
  
    rotate() {
      if (this.angle < 3) {
        this.angle += 1
      } else {
        this.angle = 0
      }
    }
  
    move(direction) {
      if (direction === 'left') {
        this.col -= 1
      } else if (direction === 'right') {
        this.col += 1
      }
    }
  }
  
  class LShape extends Tetromino {}
  // tao bien property shapes
  LShape.shapes = [
    [
      [1, 0],
      [1, 0],
      [1, 1]
    ],
  
    [
      [1, 1, 1],
      [1, 0, 0]
    ],
  
    [
      [1, 1],
      [0, 1],
      [0, 1]
    ],
  
    [
      [0, 0, 1],
      [1, 1, 1]
    ]
  ]
  // tao bien color shapes
  LShape.color = 'rgb(255, 87, 34)'
  
  class JShape extends Tetromino {}
  
  JShape.shapes = [
    [
      [0, 2],
      [0, 2],
      [2, 2]
    ],
  
    [
      [2, 0, 0],
      [2, 2, 2]
    ],
  
    [
      [2, 2],
      [2, 0],
      [2, 0]
    ],
  
    [
      [2, 2, 2],
      [0, 0, 2]
    ]
  ]
  
  JShape.color = 'rgb(63, 81, 181)'
  
  class OShape extends Tetromino {}
  
  OShape.shapes = [
    [
      [3, 3],
      [3, 3]
    ],
  
    [
      [3, 3],
      [3, 3]
    ],
  
    [
      [3, 3],
      [3, 3]
    ],
  
    [
      [3, 3],
      [3, 3]
    ]
  ]
  
  OShape.color = 'rgb(255, 235, 59)'
  
  class TShape extends Tetromino {}
  
  TShape.shapes = [
    [
      [0, 4, 0],
      [4, 4, 4]
    ],
  
    [
      [4, 0],
      [4, 4],
      [4, 0]
    ],
  
    [
      [4, 4, 4],
      [0, 4, 0]
    ],
  
    [
      [0, 4],
      [4, 4],
      [0, 4]
    ]
  ]
  
  TShape.color = 'rgb(156, 39, 176)'
  
  class SShape extends Tetromino {}
  
  SShape.shapes = [
    [
      [0, 5, 5],
      [5, 5, 0]
    ],
  
    [
      [5, 0],
      [5, 5],
      [0, 5]
    ],
  
    [
      [0, 5, 5],
      [5, 5, 0]
    ],
  
    [
      [5, 0],
      [5, 5],
      [0, 5]
    ]
  ]
  
  SShape.color = 'rgb(76, 175, 80)'
  
  class ZShape extends Tetromino {}
  
  ZShape.shapes = [
    [
      [6, 6, 0],
      [0, 6, 6]
    ],
  
    [
      [0, 6],
      [6, 6],
      [6, 0]
    ],
  
    [
      [6, 6, 0],
      [0, 6, 6]
    ],
  
    [
      [0, 6],
      [6, 6],
      [6, 0]
    ]
  ]
  
  ZShape.color = 'rgb(183, 28, 28)'
  
  class IShape extends Tetromino {}
  
  IShape.shapes = [
    [
      [7],
      [7],
      [7],
      [7]
    ],
  
    [
      [7, 7, 7, 7]
    ],
  
    [
      [7],
      [7],
      [7],
      [7]
    ],
  
    [
      [7, 7, 7, 7]
    ]
  ]
  
  IShape.color = 'rgb(0, 188, 212)'
  