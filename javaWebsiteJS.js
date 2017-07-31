/* var msg1 = "Hello World"
var msg2 = "Cats are great!"


function changeText(){
if (document.getElementById('theText').innerHTML == "Hello World") {
  document.getElementById('theText').innerHTML = "Cats are great!";
} else {
  document.getElementById('theText').innerHTML = "Hello World";
  }
}


var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("array").innerHTML = fruits;
function arrayButton() {
  var randomNumberBetween0and3 = Math.floor(Math.random() * 4)
document.getElementById("trial").innerHTML = fruits[randomNumberBetween0and3];
} */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var randNum = 0;
document.getElementById("array").innerHTML = fruits;
function arrayButton() {
  document.getElementById("trial").innerHTML = fruits[randNum];
  randNum = randNum + 1;
  if (randNum > 3) {
    randNum = 0;
  }
}
