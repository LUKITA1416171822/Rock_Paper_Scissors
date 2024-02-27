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
       {document.getElementById("result").innerHTML = "Result: " + " Draw"; 
        return ;}
    else if(Computer=="ROCK" && player=="SCISSORS"|| Computer=="SCISSORS"&& player=="PAPER" || Computer=="PAPER"&& player=="ROCK")
        {document.getElementById("result").innerHTML = "Result: " + Computer + " WINS";
        ComputerScore++;}
    else {
    PlayerScore++;
    document.getElementById("result").innerHTML = "Result: " + player + " WINS";}
    updateScores();
   // alert('Computer choice : '+Computer+'\nYour choice: '+player+'\nResult: '+Computer+' '+((Computer==player)?"=":(Computer=="ROCK"&& player=="SISSORS"|| Computer=="SISSORS"&& player=="ROCK" || Computer=="PAPER"&& player=="ROCK")?"WINS":"LOSES"));
}
function updateScores() {
    document.getElementById("you").innerHTML = "you: " + PlayerScore;
    document.getElementById("computer").innerHTML = "computer: " + ComputerScore;
    if(PlayerScore==10)
    {
        Swal.fire({
            title: 'You won!',
            text: 'Congratulations!',
          })
          PlayerScore=0;
          ComputerScore=0;
          updateScores();
          document.getElementById("result").innerHTML = "Result: " ; 
    }
    else if(ComputerScore==10)
    {
        Swal.fire({
            title: 'You lost!',
            text: 'Better luck next time!',
          })
            ComputerScore=0;
            PlayerScore=0;
            updateScores();
            document.getElementById("result").innerHTML = "Result: " ; 
    }
}
// alert(result("ROck"))
