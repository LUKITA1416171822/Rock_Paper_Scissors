
let ComputerScore=0;
let PlayerScore=0;
document.getElementById("you").innerHTML += PlayerScore;
document.getElementById("computer").innerHTML += ComputerScore;
function getComputerChoice(){
    let arr=["ROCK","PAPER","SCISSORS"];
    return arr[Math.floor(Math.random()*3)];
}
function result(player_Selection){
    let Computer=getComputerChoice();
    let player = player_Selection.toUpperCase();
    if(Computer==player)
       { return ;}
    else if(Computer=="ROCK" && player=="SCISSORS"|| Computer=="SCISSORS"&& player=="PAPER" || Computer=="PAPER"&& player=="ROCK")
        {
        ComputerScore++;}
    else {
    PlayerScore++;}
    updateScores();
   // alert('Computer choice : '+Computer+'\nYour choice: '+player+'\nResult: '+Computer+' '+((Computer==player)?"=":(Computer=="ROCK"&& player=="SISSORS"|| Computer=="SISSORS"&& player=="ROCK" || Computer=="PAPER"&& player=="ROCK")?"WINS":"LOSES"));
}
function updateScores() {
    document.getElementById("you").innerHTML = "you: " + PlayerScore;
    document.getElementById("computer").innerHTML = "computer: " + ComputerScore;
}
// alert(result("ROck"))
