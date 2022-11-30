
var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //random image

var randomImageSource = "images/" + randomDiceImage; //images/ddice1.png - images/dice6.png

var image1= document.querySelectorAll("img")[0] ;

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Got it";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 got it this time!";
}else{
    document.querySelector("h1").innerHTML = "Nobody Wins, its a draw";
}