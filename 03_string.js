var greet = "Good Morning";

var totalChar = greet.length;

console.log("Total character in the string is: ", totalChar);

var charAtIndex5 = greet.charAt(5);

console.log("Char present at index 5 is:", charAtIndex5);

console.log(typeof charAtIndex5);

var str1 = "Hey ";

var str2 = "Smarty";

var concatResult = str1.concat(str2);

console.log("Concatted String is: ", concatResult);

var indexOfD = greet.indexOf("D");

console.log("Index of D is: ", indexOfD);

var indexOfd = greet.indexOf("d");

console.log("Index of d is: ", indexOfd);

var indexOfnin = greet.indexOf("nin");

console.log("Index of nin is: ", indexOfnin);

var indexOfo = greet.lastIndexOf("o");

console.log("Index of o is: ", indexOfo);

var myName = "Gajanan Kharat";

var result = myName.replace("Kharat", " Bill");

console.log(result);

var city = "  Pune  ";

console.log(city.length);

var trimResult = city.trim();

console.log( ` After trim city is: ${trimResult}, It's length is: ${trimResult.length} `);
