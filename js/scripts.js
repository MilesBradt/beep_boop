// Specs
// increments that contain a 0 are replaced (all digits) with "Beep!"
// increments that contain a 1 are replaced (all digits) with "Boop!"
// increments divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

var input = input;
var output = [0];


$(document).ready(function() {

  $("form#userNumbers").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#userInput").val());

    $('.panel').show();
    $("#output").text(output);

  });
});
