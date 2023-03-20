let game = {}
let time1 = 100
let time2 = 100
let score1 = 0;
let score2 = 0;
function getJSON() {
    //Put the link to JSON as parameter of fetch
    fetch('test.json')
        .then(response => response.json())
        .then(response => game = response)
        .catch(err => console.error(err));
}

setInterval(getJSON, 1000);
setInterval(drawBoard, 1000);
setInterval(countdown, 1000);
setInterval(render, 1000)

function drawBoard() {
    var size = game.size;
    var gameBoard = document.getElementsByClassName("gameboard");
    var gameBoardHTML = "<table cell-spacing = '0'>";
    for (var i = 0; i < size; i++) {
        gameBoardHTML += "<tr>"
        for (var j = 0; j < size; j++) {
            gameBoardHTML += `<td style='width:${600/size}px; height:${600/size}px; font-size:${400/size}px; font-weight: 300'>`+game.board[i][j] +"</td>"
        }
        gameBoardHTML += "</tr>";
    }
    gameBoardHTML += "</table>";
    gameBoard[0].innerHTML = gameBoardHTML;

}

function countdown() {
    if(game.turn === game.team1_id) {
        document.getElementById('turn-flag-2').style.visibility = "hidden"
        document.getElementById('turn-flag-1').style.visibility = "visible"
        time1--;
    }
    else if(game.turn === team2_id) {
        document.getElementById('turn-flag-2').style.visibility = "visible"
        document.getElementById('turn-flag-1').style.visibility = "hidden"
        time2--;
    }
}

function render() {
    document.getElementById("player1-id").innerText = game.team1_id!=undefined ? game.team1_id : "ID1"
    document.getElementById("player2-id").innerText = game.team2_id!=undefined ? game.team2_id : "ID2"
    document.getElementById('player1-time').innerHTML = time1
    document.getElementById('player2-time').innerHTML = time2
    document.getElementById('score1').innerHTML = game.score1
    document.getElementById('score2').innerHTML = game.score2
    
}






