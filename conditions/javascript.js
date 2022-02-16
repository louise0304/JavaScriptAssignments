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