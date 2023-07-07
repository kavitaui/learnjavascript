function lifeInWeeks(age) {
 var daysRemaining =90-age;
 var days= daysRemaining*365;
 var weeks = daysRemaining*52;
 var months = daysRemaining*12;
 console.log( "You have " +  days  + " days" + weeks  +  " weeks " +months + " months left");
}
lifeInWeeks(12);