let dice1 = Math.ceil(Math.random() * 6);
let dice2 = Math.ceil(Math.random() * 6);
let dice1Image = `./images/dice${dice1}.png`;
let dice2Image = `./images/dice${dice2}.png`;
let winner = "Its a draw";
if (dice1 > dice2)
    winner = "Player 1 wins";
else if (dice1 < dice2)
    winner = "Player 2 Wins";

document.querySelector(".container .dice1 img").src = dice1Image;
document.querySelector(".container .dice2 img").src = dice2Image;
document.querySelector(".container .winner").innerHTML = winner;
document.querySelector(".container .winner").style.display("block");