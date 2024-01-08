const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
console.log("============ step 1 =============");
let firstElement = fruits_seasonal[0];
let lastElement = fruits_seasonal[fruits_seasonal.length - 1];
console.log(
  `First element is "${firstElement}" and Last element is "${lastElement}"`
);

console.log("============ step 2 =============");
fruits_seasonal.splice(0, 0, "Papaya");
console.log(fruits_seasonal);

console.log("============ step 3 =============");
const fruits_seasonal1 = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
fruits_seasonal1.splice(3, 1);
console.log(fruits_seasonal1);

console.log("============ step 4 =============");
const fruits_seasonal2 = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
fruits_seasonal2.push("Pineapple");
console.log(fruits_seasonal2);

console.log("============ step 5 =============");
const fruits_seasonal3 = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
fruits_seasonal3.splice(fruits_seasonal3.length - 1, 0, "Dragon Fruit");
console.log(fruits_seasonal3);

console.log("============ step 6 =============");
const fruits_seasonal4 = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
fruits_seasonal4.splice(1, 1, "Kiwi");
console.log(fruits_seasonal4);

console.log("============ step 7 =============");
const fruits_seasonal5 = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
let fruits4 = fruits_seasonal5.slice(1, 5);
console.log(fruits4);

console.log("============ step 8 =============");
const fruits_seasonal6 = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
let fruitsLast3 = fruits_seasonal6.slice(2, fruits_seasonal6.length);
console.log(fruitsLast3);
