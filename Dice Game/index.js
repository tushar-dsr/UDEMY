var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var x=randomNumber1;
if (x === 1) {
  document.querySelector(".img1").src= "images/dice1.png";
} else if (x === 2) {
  document.querySelector(".img1").src= "images/dice2.png";
} else if (x === 3) {
  document.querySelector(".img1").src= "images/dice3.png";
} else if (x === 4) {
  document.querySelector(".img1").src= "images/dice4.png";
} else if (x === 5) {
  document.querySelector(".img1").src= "images/dice5.png";
} else {
  document.querySelector(".img1").src= "images/dice6.png";
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var y=randomNumber2;
if (y === 1) {
  document.querySelector(".img2").src= "images/dice1.png";
} else if (y === 2) {
  document.querySelector(".img2").src= "images/dice2.png";
} else if (y === 3) {
  document.querySelector(".img2").src= "images/dice3.png";
} else if (y === 4) {
  document.querySelector(".img2").src= "images/dice4.png";
} else if (y === 5) {
  document.querySelector(".img2").src= "images/dice5.png";
} else {
  document.querySelector(".img2").src= "images/dice6.png";
}

if(x>y){
  document.querySelector(".container h1").innerText="🚩 Player 1 Wins!";
}else if(y>x){
  document.querySelector(".container h1").innerText="Player 2 Wins! 🚩";
}else{
  document.querySelector(".container h1").innerText="Draw!";
}