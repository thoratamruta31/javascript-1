console.log("<--- 1. Two function with no argument & no return type --->");

function dimensions() {
  console.log("Dimensions function");
}
dimensions();

function shape() {
  console.log("Shape function");
}
shape();

console.log("<---2. My Personal Details--->");
function personalDetails(firstName, lastName, collegeName) {
  console.log("My Personal Detail is");
  console.log("First Name is", firstName);
  console.log("Last Name is", lastName);
  console.log("College Name is", collegeName);
}
personalDetails("Amruta", "Thorat", "HRM");

console.log("<---3.Swap--->");

function swapValueDude(parameter1, parameter2) {
  console.log("Before swap...", parameter1, parameter2);
  var temp = parameter1;
  parameter1 = parameter2;
  parameter2 = temp;
  console.log("After swap...", parameter1, parameter2);
}
swapValueDude("Virat", "Anushka");
swapValueDude("1000", "2000");

console.log("<---04. Add three values--->");
function addThreeValues(arg1, arg2, arg3) {
  console.log("Given value is:", arg1, ",", arg2, ",", arg3);
  var result = arg1 + arg2 + arg3;
  console.log("Addition is:", result);
}
addThreeValues(10.23, 40, 600);
addThreeValues("hello", " good", " morning");
