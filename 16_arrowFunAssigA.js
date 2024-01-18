console.log("=============== Step 1 ===========");
const greet = () => {
  console.log("a) Good morning, Today is Thursday.");
};
greet();

console.log("=============== Step 2 ===========");
const multiply = (n1, n2, n3 = 1) => {
  console.log(`The multiplication is:${n1 * n2 * n3}`);
};
multiply(5, 5, 2);
multiply(10, 4);

console.log("=============== Step 3 ===========");
const addition = (n1, n2, n3, n4, n5) => {
  return n1 + n2 + n3 + n4 + n5;
};
const result = addition(100, 100, 200, 349, 756);
console.log(`a) The addition of given numbers is:${result}`);

const string = addition("I am", " learning", " ES6", " features", " in depth");
console.log(`b) The required string is: ${string}`);
