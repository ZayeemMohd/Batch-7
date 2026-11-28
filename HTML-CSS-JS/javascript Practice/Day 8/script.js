// global space: this => window object

// inside a method, this refers to method's parent object

// inside an arrow function. this refers to grandparent (my parent's 'this' is my 'this'  )

// console.log(this);
// let studentObj = {
//   name: "Mohd",
//   maths: 99,
//   phys: 22,
//   chem: 80,

//   printAvg: function () {
//     const result = (this.maths + this.phys + this.chem) / 3;
//     console.log(result);
//   },
// };

// Exception handling
// gracefully handle

// let a = 10;
// let userInput = prompt("Enter your roll no: ")

// console.log("hello first line");
// console.log("hello second line");

// try {
//   console.log(userInput);
// } catch (error) {
//   console.log("some error found");
// }

// console.log("hello third line");
// console.log("hello fourth line");
// console.log("hello fifth line");
// console.log("hello sixth line");

// function divide(a, b) {
//   try {
//     if (a == 0 || b == 0) {
//       throw "cannot contain 0";
//     }

//     console.log(a / b);
//   } catch (error) {
//     console.log("some error found while dividing...", error);
//   }
// }

// divide(2, 0);

// console.log("hello third line");
// console.log("hello fourth line");
// console.log("hello fifth line");
// console.log("hello sixth line");

// 3 - ways of creating functions

// 1. function keyword

function printHello() {
  console.log("Hello");
}

// printHello();

// 2. function expression

const printMsg = function () {
  console.log("I am function expression");
};

// printMsg();

// 3. arrow function

const printArrowFn = () => {
  console.log("I am an arrow function");
};

// example arrow fn

// return sum of 2 numbers using arrow function

// explicit return
const sum1 = (a, b) => {
  let sum = a + b;
  return sum;
};

// implicit return
const sum2 = (a, b) => a + b;

let result = sum2(4, 4);
// console.log(result);

// let calculateSquare = a => a * a;

// let result3 = calculateSquare(4)
// console.log(result3)

// const smallFn = ;

// high order fn

function repeatFunctions(callbackFn, repeatCount) {
  for (let i = 1; i <= repeatCount; i++) {
    callbackFn();
  }
}

repeatFunctions(() => {
  console.log("hello");
}, 3);

// setTimeout: higher order function

// setTimeout(() => { console.log("Hi, How are you?") }, 3000)

// let smallFn = ()=>{
//     console.log("Welcome back")
// }

// setTimeout(smallFn, 2000)

// setInterval: higher order function

// const intervalId = setInterval(()=>{
//     console.log("Hello bhai...")
// }, 1000)

// setTimeout(() => {
//     clearInterval(intervalId)
// }, 10000);

// console.log("Hello world")

// setTimeout(() => {
//     console.log("I came after delay")
// }, 2000);

// console.log("Pdf read successfully")

let studentObj = {
  name: "Kahlid",
  age: 22,
  math: 90,
  phys: 80,
  chem: 80,

  printAvgDelay: function () {

    setTimeout( () => {
      console.log((this.math + this.phys + this.chem) / 3)
    }, 2000);

  },
};

studentObj.printAvgDelay();


