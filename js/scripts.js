// Specs
// increments that contain a 0 are replaced (all digits) with "Beep!"
// increments that contain a 1 are replaced (all digits) with "Boop!"
// increments divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

// Ideas
// Get ranges in an array working first
// Convert array into to string
// Pop all spec increments
// Clone array then ??????

var ranges = [0];
var increments = [];


$(document).ready(function() {
  $("form#userNumbers").submit(function(event){
    event.preventDefault();
    // var input = parseInt($("#userInput").val());
    parseInt($("input#userInput").each(function(){
      var input = $(this).val();
      if (ranges <= input) {
        increments.push(ranges ++);
      };

      // Spec attempts (doesn't work will full digits)
      results = increments.toString().split("");

      // Final spec attempt (doesn't work and not sure why)
      // parseInt(increments.forEach(function(cantDo){
      // if (cantDo % 3 === 0){
      //   return alert("I can't do that");
      //   };
      // }));

      for (var i = 0; i < results.length; i ++) {
        results[i] = results[i].replace(/1/g, 'boop')
      };
      for (var i = 0; i < results.length; i ++) {
        results[i] = results[i].replace(/0/g, 'beep')
      };

      $('.panel').show();
      $("#output").text(results);

      console.log(results);
      console.log(ranges);
      console.log(increments);

      // Doesn't work at all
      // ranges.forEach(function(range){
      //   if (range < input) {
      //     ranges ++;
      //   }
      // });

      // Increments by 1 but never stops and only during each click
      // ranges = ranges.map(function(val){
      //   return ++ val;

      // Only increments once then breaks and only during each click
      // ranges.forEach(function(range) {
      
      //Spec attempts (none work)
      // for (var i = 0; i < increments.length; i ++) {
      // Only does bottom one
      // number = increments[i].replace(/1/g, 'boop');
      // number = increments[i].replace(/0/g, 'beep');

      // Only outputs 0 for some reason
      // if (increments[i] = 0){
      //   increments[i] = "beep";
      // }
      //
      // Will display "I can't do that" but only if one number is in the input
      //   if (increments % 3 === 0){
      //     alert("I can't do that");
      //   }
      // }
      // console.log(increments);
      // });

    }));
  });
});
