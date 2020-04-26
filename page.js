let queen = {
    x: 0,
    y: 0
};

var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
];
// Checkpoint 2 | Turning the queen

let direction = "N 7";
//we have take the default postion to be 0,0
//After the game starts it starts updating it
//itself

let index = direction.indexOf(" ");

let d1 = direction.slice(0, index);
let d2 = direction.slice(index + 1, direction.length);

d2 = parseInt(d2);

console.log("Presently Queen is at " + board[queen.x][queen.y]);

queen.changeDirection = function (d1, d2) {
    if (d1 == "N") {
        if ((queen.y + d2 >= 0) && (queen.y + d2 <= 7)) {
            queen.y += d2;
            console.log("1");
        }
    } else if (d1 == "S") {
        if ((queen.y - d2 >= 0) && (queen.y - d2 <= 7)) {
            queen.y -= d2;
            console.log("2");
        }
    } else if (d1 == "W") {
        if ((queen.x + d2 >= 0) && (queen.x + d2 <= 7)) {
            queen.x += d2;
            console.log("3");
        }
    } else if (d1 == "E") {
        if ((queen.x - d2 >= 0) && (queen.x - d2 <= 7)) {
            queen.x -= d2;
            console.log("4");
        }
    } else if (d1 = "NW") {
        if ((queen.y + d2 >= 0 && queen.y + d2 <= 7) && (queen.x - d2 >= 0 && queen.x - d2 <= 7)) {
            queen.y += d2;
            queen.x += d2;
            console.log("5");
        }
    } else if (d1 == "NE") {
        if ((queen.y + d2 >= 0 && queen.y + d2 <= 7) && (queen.x - d2 >= 0 && queen.x - d2 <= 7)) {
            queen.y += d2;
            queen.x -= d2;
            console.log("6");
        }
    } else if (d1 = "SW") {
        if ((queen.y + d2 >= 0 && queen.y + d2 <= 7) && (queen.x - d2 >= 0 && queen.x - d2 <= 7)) {
            queen.y -= d2;
            queen.x += d2;
            console.log("7");
        }
    } else if (d1 == "SE") {
        if ((queen.y + d2 >= 0 && queen.y + d2 <= 7) && (queen.x - d2 >= 0 && queen.x - d2 <= 7)) {
            queen.y -= d2;
            queen.x -= d2;
            console.log("8");
        }
    }
}

queen.changeDirection(d1, d2);

console.log("Presently Queen is at " + board[queen.x][queen.y]);