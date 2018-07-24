
var wins;
var losses;
var counter

for (i = 0; i < 4; i++) {
    var randomNumber = Math.floor(Math.random() * 12) + 1;
    $("#crystalValue").append(randomNumber[i]);  
}

var targetNumber = Math.floor(Math.random() * 120) +19;

$(".targetNumber").text("Number to hit: " + targetNumber);