
var targetNumber= "";
var wins= 0 ;
var losses= 0;
var counter= 0;
var images =["assets/images/bluecystal.png", "assets/images/greencrystal.png", "assets/images/redcrystal.png", "assets/images/whitecrystal.png"];

function randomtargetNumber() {
  var targetNumber = Math.floor(Math.random() * 120) + 19;
$(".targetNumber").text("Number to hit: " + targetNumber);
}

randomtargetNumber();

function setCrystals() {
    for (var i = 0; i < images.length; i++) {
        var crystalimage = $("<img>");
        crystalimage.addClass("crystal-image");
        crystalimage.attr("src", images[i]);
        crystalimage.attr("value", (Math.floor(Math.random() * 12) +1));
        crystalimage.attr("height", "100");
        $("#crystals").append(crystalimage);

    }
}

setCrystals();

function reset() {
    randomtargetNumber();
    setCrystals();
    counter = 0
}

$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    
    $(".userNumber").text("Score: " + counter);

    if (counter == targetNumber) {
        wins ++;
    } else if (counter > targetNumber) {
        losses++;
    };

});

