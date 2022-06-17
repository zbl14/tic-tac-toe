// Business Logics
function Player(name, status) {
  this.name = name;
  this.board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  this.status = status
}

let player1 = new Player("Ben", "active");
let player2 = new Player("Carrie", "inactive");


Player.prototype.mark = function(index, mark) {
  this.board[index] = mark;
}

Player.prototype.checkWinner = function() {
  if (this.board[0] === this.board[1] && this.board[1] === this.board[2]) {
    return true;
  } else if (this.board[3] === this.board[4] && this.board[4] === this.board[5]) {
    return true;
  } else if (this.board[6] === this.board[7] && this.board[7] === this.board[8]) {
    return true;
  } else if (this.board[0] === this.board[3] && this.board[3] === this.board[6]) {
    return true;
  } else if (this.board[1] === this.board[4] && this.board[4] === this.board[7]) {
    return true;
  } else if (this.board[2] === this.board[5] && this.board[5] === this.board[8]) {
    return true;
  } else if (this.board[0] === this.board[4] && this.board[4] === this.board[8]) {
    return true;
  } else if (this.board[2] === this.board[4] && this.board[4] === this.board[6]) {
    return true;
  }
  return false 
}

// UI Logics







// function Board() {
//   this.space = {};
//   this.currentId = 0 ;
// }

// Board.prototype.addSpace = function(space) {
//   contact.id = this.assignId();
//   this.spaces[position.id] = space;
// };

// Board.prototype.assignedId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// Board.prototype.findSpace = function(id) {
//   if (this.spaces[id] != undefined) {
//     return this.spaces[id];
//   }
//   return false
// }

// function Space(x, y) {
//   this.position = (x,y)
// }
