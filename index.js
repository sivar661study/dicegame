//Assign value to players //player1
var player1Name = prompt("Please enter the player1 name")
document.getElementsByTagName("p")[0].innerHTML = player1Name;

//player2
var player2Name = prompt("Please enter the player2 name")
document.getElementsByTagName("p")[1].innerHTML = player2Name;


//First dice
var randomNumber1;
randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage1 = "images/" + "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);

//second dice 
var randomNumber2;
randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage2 = "images/" + "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

//Winner Condition
if (randomNumber1 > randomNumber2) {

    var player1 = document.getElementsByTagName("h1")[0].innerHTML = player1Name + " is the winner 🚩 ";

} if (randomNumber1 === randomNumber2 ) {
    var player1 = document.getElementsByTagName("h1")[0].innerHTML =  "The Match is the Draw";
} else{ 
    var player1 = document.getElementsByTagName("h1")[0].innerHTML = "🚩 " + player2Name + " is the winner";
}