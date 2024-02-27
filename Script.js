function getComputerChoice(){
    let arr=["ROCK","PAPER","SISSORS"];
    return arr[Math.floor(Math.random()*3)];
}
function result(player_Selection){
    let Computer=getComputerChoice();
    let player = player_Selection.toUpperCase();
    if(Computer==player)
        return "Draw";
    else if(Computer=="ROCK"&& player=="SISSORS"|| Computer=="SISSORS"&& player=="ROCK" || Computer=="PAPER"&& player=="ROCK")
        return "Computer Wins";
    else 
    return "Player Wins";
}
alert(result("ROck"))
