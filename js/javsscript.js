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