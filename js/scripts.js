$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    //debugger
    var word = $("#word").val();
    var vowelArray = ["a", "e", "i", "o", "u"];
    var conArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    var wordArray = word.split("");

    


    $("#result").text(word);
  });
});
