const arrayNum = [ 55, 11, 66, 18,  20, 73]; 
const array = [];
arrayNum.forEach( (element)=> {
    if (element%5==0) {
        array.push(element);
    }
});
console.log(array);

const arr = arrayNum.filter( (currentValue) => {
    return currentValue%5==0;
} );
console.log(arr);

class Student {
    // Data member or properties
    // Constructor
    constructor(id, name, city, marks ){
        this.id = id;
        this.name = name;
        this.city = city;
        this.marks = marks;
    }
    // Member Functions or methods
    getDetails(){
       console.log(`ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`);
    } 
}

const jenny = new Student(11, 'Jenny', 'Pune', 54);
const bill = new Student(43, 'Bill', 'Mumbai', 67);
const elon = new Student(32, 'Elon', 'Hyd', 83);
const stew = new Student(22, 'Stew', 'Pune', 74);
const ratan = new Student(65, 'Ratan', 'Mumbai', 90);

const arrayStudents = [jenny, bill, elon, ratan, stew];

console.log(`****************************************`);
const value = arrayNum.find((element) => {
    return element>60;
});
console.log(value);