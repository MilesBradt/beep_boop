// Specs
// Numbers that contain a 0 are replaced (all digits) with "Beep!"
// Numbers that contain a 1 are replaced (all digits) with "Boop!"
// Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

// Ideas
// Convert array into to string
// Pop all spec numbers
// Clone array then ??????
// Set range to display and stop a user user's input
//

var ranges = [0];
var increments = [];


$(document).ready(function() {
  $("form#userNumbers").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#userInput").val());

    // ranges.forEach(function(range){
    //   if (range < input) {
    //     ranges ++;
    //   }
    // });

    // ranges = ranges.map(function(val){
    //   return ++ val;

    ranges.forEach(function(range) {
      if (ranges < input) {
        increments.push(ranges ++);
      } 


    });

    $("#output").text(increments);
    // ranges.forEach(function(range){
    //   increments.push(range += 1);
    //   $("#output").text(increments);
    // });

    console.log(ranges);

    // for (var i = 0; i < numbers.length; i ++) {
    //   // Only does bottom one
    //   // number = numbers[i].replace(/1/g, 'boop');
    //   // number = numbers[i].replace(/0/g, 'beep');
    //
    //   // Only outputs 0 for some reason
    //   // if (numbers[i] = 0){
    //   //   numbers[i] = "beep";
    //   // }
    //
    //   // Will display "I can't do that" but only if one number is in the input
    //   if (numbers % 3 === 0){
    //     alert("I can't do that");
    //   }
    // }
    // console.log(numbers);


  });

});
