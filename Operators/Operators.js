'use strict';

//assignemnt 1
/*
let numOfDaysUntilWeekend = 2;
numOfDaysUntilWeekend -= 1;

1. Use console.log() to log the value just after the variable has been declared
2.  Use console.log() to log the value right after the value of the variable has been changed. 
3. Tell what it does 
*/

let numOfDaysUntilWeekend = 2;
console.log(numOfDaysUntilWeekend);
numOfDaysUntilWeekend -= 1;
console.log(numOfDaysUntilWeekend)
//We change the variable 2 to 1 adding a minus//

//assignemnt 2
//Addition to numbers

let x = 5;
(x += 9);
console.log(x);

//assignemnt 3
//Subtraction to numbers

let x = 5;
(x -= 9);
console.log(x);

//assignemnt 4
//write two sentences in two variables and connect them together 

var season = "spring";
console.log(season);
let favseason = "spring";
console.log(favseason);

//assignemnt 5
//write two variables, one number and one string. add them together

var season = "spring";
console.log(season);
let favseason = "spring";
console.log(favseason);
let x = 8 + 6;
console.log(x)
let greeting = "Hello!"
console.log(greeting.length);

//assignemnt 6
//write the answears in the in a comment
let r = 15;
let s = 5;
let t = r + s;   //20
let u = r - s;   //10
let v = t / u;   //2
let x = r * v;   //30
let y = s % v;   //1

//assignemnt 7
//Why does it not write out? 
let r = 34;
let c = 1;
let x = r - 32 + c;
let y = r++ * 4; 
if(x == 30 || y == 2 ){
 console.log("yeah you got it");
}
/* because no one is true so false or false = false*/

//change a number in a variable, so it print out the text
let r = 34;
let c = 1;
let x = r - 32 + c;
let y = r++ * 4; 
if(x == 3 || y == 2 ){
 console.log("yeah you got it");
}

//assignemnt 8
//make two vaiables. One variable must contain a number and the other one must contain a prompt, 
//where the user can enter a number. Match the two number and print out the answear
//TIP: search prompt
let h = 5
let coffee = prompt("How many coffee do you drink daily?")
switch(coffee) {
    case "1":
        Text = "Great!";
        break;
    case "3":
        Text = "Good, you shouldn't drink more!"
    case "5":
        Text = "A bit too many daily."
    default:
        Text = "Enjoy you coffee. It's the most important!"
}

//assignment 9
//write these numbers in the console and write the output. Explain you thing this happens
    0.1 + 0.2;
let a = 0.1
let b= 0.2
console.log((a+b)); //0.3
    0.1 + 0.2 === 0.3;
console.log("The sum is " + (0.1+0.2)); //The sum is 0.3
    3  - 1
console.log(3-1); //2
    3  + 1
console.log(3+1); //4
    '3' - 1 
console.log("3"-1); //2
    '3' + 1 
console.log("3"+1); //4
    '222' - -'111'
console.log("222" - - "111"); //333


//assignemnt 9
//Write a JavaScript program to determine whether a given year is a leap year 

let year = prompt("Enter a year")
if (year %4==0) {
    console.log("The year is the leap year")
} else 
    console.log("The year is not a leap year")

