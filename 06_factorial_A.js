let factorialOfNum = function (num) {
    if (num==0 || num==1) {
        return 1;  
    }
    if (num<=0) {
        return `Invalid output that is Negative Number: ${num} `;  
    }
    let result = 1;
    for (let index = 1; index <=num; index++) {
        result = result * index;  
    }
    return result;
}
let result  =  factorialOfNum(5,);
console.log("factorialOfNum(5) is",result);

let result1 =  factorialOfNum(3);
console.log("factorialOfNum(3) is",result1);

let result2 =  factorialOfNum(null);
console.log("factorialOfNum(null) is",result2);

let result3 =  factorialOfNum(8);
console.log("factorialOfNum(8) is",result3);

let result4 =  factorialOfNum();
console.log("factorialOfNum(undefined) is",result4);

let result5 =  factorialOfNum(9);
console.log("factorialOfNum(9) is",result5);

let result6 =  factorialOfNum(0);
console.log("factorialOfNum(0) is",result6);