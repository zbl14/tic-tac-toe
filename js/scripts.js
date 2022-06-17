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

$(document).ready(function() {
  $("form#newPlayer").submit(function(event) {
    event.preventDefault();
    let player1Name = $("input#player1Name").val();
    let player2Name = $("input#player2Name").val();
    player1.name = player1Name;
    player2.name = player2Name;
    $(".player1Name").html(player1.name);
    $(".player2Name").html(player2.name);
    $("#newPlayer").hide();
    });

    $("#box0").click(function(){
      console.log("hi")
      if (player1.status === "active" && player2.status === "inactive") {
        $("#box0").addClass("red")
        player1.mark(0, "X");
        player2.mark(0, "X");
      } else {
        $("#box0").addClass("green")
        player1.mark(0, "O");
        player2.mark(0, "O");
      }
    });

    $("#box1").click(function(){
      console.log("hi")
      if (player1.status === "active" && player2.status === "inactive") {
        $("#box1").addClass("red")
        player1.mark(0, "X");
        player2.mark(0, "X");
      } else {
        $("#box1").addClass("green")
        player1.mark(0, "O");
        player2.mark(0, "O");
      }
    });

    $("#box2").click(function(){
      console.log("hi")
      if (player1.status === "active" && player2.status === "inactive") {
        $("#box2").addClass("red")
        player1.mark(0, "X");
        player2.mark(0, "X");
      } else {
        $("#box2").addClass("green")
        player1.mark(0, "O");
        player2.mark(0, "O");
      }
    });
  });


