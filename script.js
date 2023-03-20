
var size = 50;
var gameBoard = document.getElementsByClassName("gameboard");
var gameBoardHTML="<table>";
for(var i = 0; i<size; i++){
    gameBoardHTML+="<tr>"
    for(var j = 0; j<size; j++){
        gameBoardHTML+="<td></td>"
    }
    gameBoardHTML+="</tr>";
}
gameBoardHTML+="</table>";
gameBoard[0].innerHTML=gameBoardHTML;
