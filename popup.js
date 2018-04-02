document.addEventListener('DOMContentLoaded', () => {


//Black Panther
// Set the date we're counting down to
var countDownDate1 = new Date("Feb 16, 2018 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(() => {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("panther").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";


    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("panther").innerHTML = "<a href='http://lmgtfy.com/?q=Black+Panther+Near+me' target='_blank'>It's Here!!!</a>";
    }
}, 1000);

//Infinity War
// Set the date we're counting down to
var countDownDate2 = new Date("April 27, 2018 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(() => {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate2 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("infinity").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";


    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("infinity").innerHTML = "<a href='http://lmgtfy.com/?q=Infinity+War+Near+me' target='_blank'>It's Here!!!</a>";
    }
}, 1000);

//Ant-Man and The Wasp
// Set the date we're counting down to
var countDownDate3 = new Date("July 6, 2018 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(() => {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate3 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("ant").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";


    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("ant").innerHTML = "<a href='http://lmgtfy.com/?q=Ant-man+Near+me' target='_blank'>It's Here!!!</a>";
    }
}, 1000);

//Captain Marvel
// Set the date we're counting down to
var countDownDate4 = new Date("March 8, 2019 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(() => {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate4 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("captain").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";


    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("captain").innerHTML = "<a href='http://lmgtfy.com/?q=captain+marvel+Near+me' target='_blank'>It's Here!!!</a>";
    }
}, 1000);

//Untitled Avengers
// Set the date we're counting down to
var countDownDate5 = new Date("May 3, 2019 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(() => {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate5 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("avengers4").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";


    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("avengers4").innerHTML = "<a href='http://lmgtfy.com/?q=Avengers+4+Near+me' target='_blank'>It's Here!!!</a>";
    }
}, 1000);

//Untitled Spiderman
// Set the date we're counting down to
var countDownDate6 = new Date("July 5, 2019 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(() => {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate6 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("spider2").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";


    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("spider2").innerHTML = "<a href='http://lmgtfy.com/?q=Spiderman+Near+me' target='_blank'>It's Here!!!</a>";
    }
}, 1000);

//GOTG VOL 3
// Set the date we're counting down to
var countDownDate7 = new Date("July 5, 2020 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(() => {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate7 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    // document.getElementById("spider2").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";


    // If the count down is over, write some text
    // if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("spider2").innerHTML = "<a href='http://lmgtfy.com/?q=Spiderman+Near+me' target='_blank'>It's Here!!!</a>";
    // }
}, 1000);



})