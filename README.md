```sh
Describe Player()
```
Test: "It should return an object with name and board array"\
Code: 
let player1 = new Player("Ben");\
player1;\
Expected Output: 
Player {name: 'Ben', board: Array(9), active: true}
active: true
board: (9) ['0', '1', '2', '3', '4', '5', '6', '7', '8']
name: "Ben"

```sh
Describe mark()
```
Test: "It should mark board[0] as 'x'"\
Code:\
let player1 = new Player("Ben");\
player1.mark(0, "x");\
player1;\
Expected Output: 
Player {name: 'Ben', board: Array(9), active: true}
active: true
board: (9) ['x', '1', '2', '3', '4', '5', '6', '7', '8']
name: "Ben"

```sh
Describe checkWinner()
```
Test: "It should return true if player1.board[0], player1.board[1], player1.board[2] are all 'x' "\
Code:\
player1.checkWinner();\
Expected Output: True


