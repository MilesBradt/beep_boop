// Specs
// Numbers that contain a 0 are replaced (all digits) with "Beep!"
// Numbers that contain a 1 are replaced (all digits) with "Boop!"
// Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

// Ideas
// Convert array into to string
// Run for loop
// Pop all spec numbers
// Clone array then ??????

$(document).ready(function() {
  $("form#userNumbers").submit(function(event){
    event.preventDefault();
    var boops = [];

    $("input#userInput").each(function(){
      var userInput = $(this).val();
      boops.push(userInput);
    });

    beepBoops = boops.toString().split("");
    for (var i = 0; i < beepBoops.length; i ++) {
      var output = beepBoops[i];
      if (output === "0") {
        beepBoops[i] = "beep";
      }
      console.log(boops);
      console.log(beepBoops);
    }

  });
});
