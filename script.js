$("button").click(function(){
    // 1. Extract the text from the inputs
    var name = $(".name").val();
    var episodes = parseInt($(".episodes").val());
    var seen = parseInt($(".seen").val());
    
    // 2. Use the input text to build the fortune to display.
    var days= (366-seen)/episodes;
    
    var myAnswer = name + ", it will take you " + days + " days to finish Bleach.";
    $(".answer").text(myAnswer);
    
    // 3. Clear the old text from the inputs.
    $(".name").val("");
});