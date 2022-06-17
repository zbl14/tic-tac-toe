function Player(name) {
  this.name = name;
  this.board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  this.active = true
}

let player1 = new Player("Ben");
let player2 = new Player("Carrie");


Player.prototype.mark = function(index, mark) {
  this.board[index] = mark;
}









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
