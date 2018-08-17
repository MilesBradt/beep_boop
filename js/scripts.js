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

    // for (i = 0; i < boops.length; i ++) {
    //   var beepBoop = boops[i];
    //   if (boops === "0") {
    //     alert("boop");
    //   }
    // }
    console.log(boops);
  });
});
