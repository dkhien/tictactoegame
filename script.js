let game = {}
function getJSON() {
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    //         'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
    //     }
    // };

    fetch('test.json')
        .then(response => response.json())
        .then(response => game = response)
        .then(response => console.log(game))
        .catch(err => console.error(err));

}

setInterval(getJSON, 1000);
setInterval(drawBoard, 1000);

function drawBoard() {
    var size = game.size;
    console.log(size);
    var gameBoard = document.getElementsByClassName("gameboard");
    var gameBoardHTML = "<table>";
    for (var i = 0; i < size; i++) {
        gameBoardHTML += "<tr>"
        for (var j = 0; j < size; j++) {
            gameBoardHTML += "<td></td>"
        }
        gameBoardHTML += "</tr>";
    }
    gameBoardHTML += "</table>";
    gameBoard[0].innerHTML = gameBoardHTML;
}