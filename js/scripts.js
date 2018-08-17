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

    parseInt($("input#userInput").each(function(){
      var userInput = $(this).val();
      boops.push(userInput);
    }));

    for (var i = 0; i < boops.length; i ++) {
       // boops[i] = boops[i].replace(/0/g, 'beep'); from: https://stackoverflow.com/questions/953311/replace-string-in-javascript-array#

     if (boops[i] === 0) {
       boops[i] = "beep";
     }
    }


    console.log(boops);


    $("#output").text(boops);
  });
});
