// Attribute date number
// Displaying time slot color

$(".hour").each(function () {
    console.log("hour function running");
    $(this)
        .removeClass("present")
        .removeClass("future")
        .removeClass("past");

    // Creating variables to be numbers for the moment methods 
    // Checking to see if the hour is past, present, or future

    var currentHour = parseInt(moment().hours());
    var dataNum = parseInt($(this).attr("data-num"));

    console.log("currentHour: ", currentHour);
    console.log("dataNum: ", dataNum);

    if (dataNum < currentHour) {
        $(this).addClass("past");
    };
    if (dataNum === currentHour) {
        $(this).addClass("present");
    };
    if (dataNum > currentHour) {
        $(this).addClass("future");
    };
});

// When the save button gets clicked

$(".saveBtn").on("click", function () {

    // The saveBtn gets the value of text from the from its sibling 

    var text = $(this).siblings("textarea").val().trim();
    var hour = $(this).siblings("textarea").attr("data-num");
    console.log("text: ", text);
    console.log("hour: ", hour);

    // Store in local storage
    localStorage.setItem(hour, text);
})

//Texts that are stored in the keys from local storage
//Tracking it back to the certain Id

$("#9").text(localStorage.getItem("9"));
$("#10").text(localStorage.getItem("10"));
$("#11").text(localStorage.getItem("11"));
$("#12").text(localStorage.getItem("12"));
$("#1").text(localStorage.getItem("1"));
$("#2").text(localStorage.getItem("2"));
$("#3").text(localStorage.getItem("3"));
$("#4").text(localStorage.getItem("4"));
$("#5").text(localStorage.getItem("5"));

// Displays the current day 

var currentDay = $("<p>").text(moment().format("MMMM Do YYYY"));
currentDay.addClass("lead");
$(".jumbotron").append(currentDay);