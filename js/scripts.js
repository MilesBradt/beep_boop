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

    var numbers = [];


    $("input#userInput").each(function(){
      var userInput = $(this).val();
      numbers.push(userInput);
    });

    for (var i = 0; i < numbers.length; i ++) {
      //only does bottom one
      // number = numbers[i].replace(/1/g, 'boop');
      // number = numbers[i].replace(/0/g, 'beep');

      //only outputs 0 for some reason
      // if (numbers[i] = 0){
      //   numbers[i] = "beep";
      // }

    }


    console.log(numbers);

    $("#output").text(numbers);
  });
});
