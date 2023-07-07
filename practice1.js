//Converting Celsius to Fahrenheit: Create a function that converts a temperature value in Celsius to Fahrenheit.
function convert(celsius){
    var celsius;
    var F;
    F = (9/5)*(celsius)+32;
    return F.toFixed(2);
}
//Generating a Random Number: Write a function that generates a random number between a given minimum and maximum value.

function calculate (max,min){
    return Math.floor(Math.random()*(max-min+1))+min;
}