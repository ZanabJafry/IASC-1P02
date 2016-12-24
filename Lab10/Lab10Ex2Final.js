

var myPrompt= prompt("Enter your age here");
console.log(myPrompt);

var todayDate= new Date();
var year = todayDate.getFullYear();
var BirthYear= parseInt(year) - parseInt(myPrompt);

document.getElementById("yo").innerHTML= BirthYear;
