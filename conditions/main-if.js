/*
    Assignment 1
    There is some errors in the codepen example from the lesson
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    When the time is 20-22 the output should be: snacktime
*/

let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 8 && hour <= 11) { 
  textHolder.innerHTML = "Good morning!";
} else if (hour > 11 && hour < 13 ) { 
  textHolder.innerHTML = "It is lunch time";
} else if (hour > 13 && hour < 18) { 
  textHolder.innerHTML = "Good afternoon";
} else if (hour >= 18 && hour <= 19) { 
  textHolder.innerHTML = "It is dinner time";
} else if ( hour >= 20 && hour <= 22) {
    textHolder.innerHTML = "It is snack time"
}else {
  textHolder.innerHTML = "Goodnight";
}


/*
    Assignment 2 - follow up from assignment 1
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    Change the time, so it fits your day. It could be:
    8-14: School
    11: Lunch
    and so on..
*/

let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour == 7) { 
  textHolder.innerHTML = "Time to wake up";
} else if (hour > 8 && hour < 14 ) { 
  textHolder.innerHTML = "School time";
} else if (hour >= 15 && hour <= 16) { 
  textHolder.innerHTML = "Snack time";
} else if (hour == 16) { 
  textHolder.innerHTML = "Time to go";
} else if ( hour >= 17 && hour <= 19) {
    textHolder.innerHTML = "Boxing time"
} else if ( hour >= 19 && hour <= 20) {
    textHolder.innerHTML = "Dinner time"
} else if ( hour >= 20 && hour <= 22) {
    textHolder.innerHTML = "Good evening"
} else {
  textHolder.innerHTML = "Goodnight";
}

/*
    Assignment 3
    write a program where the user can write 2 numbers and display the larger one
*/

if (5 < 3) {
    console.log("5 is smaler than 3");
} else {
    console.log("5 is bigger than 3")
}

/*  
    Assignment 4
    make a variable with 3 numbers and sort them with help of JS conditions
*/

let monday = 1;
let tuesday = 2;
let friday = 5;
if(monday === 3) {
    console.log("Monday is not the tird day of the week")
} else if(friday === 5 && tuesday === 6) {
    console.log("Friday is the fifth day of the week and thursday in not the sixth day of the week")
} else(tuesday === 2); {
    console.log("Tuesday is the second day of the week")
}