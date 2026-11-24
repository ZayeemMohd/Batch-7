// Why Functions

// 1. Avoid repeating code (DRY principle - Don't Repeat Yourself)

// 2. Makes code modular
//      - (Break complex problems into smaller, manageable pieces)
//      - (Make code organized and easier to maintain)

// using a function::

// 1. function defination

// function task1() {
//   // function body
//   console.log("hello world");
//   console.log("Hello india");
//   console.log("Hello hyderabad");
//   console.log("Hello charminar");
// }

// // 2.  function calling
// task1();
// task1();

// task1();
// task1();

// task1();
// task1();

// 2. Makes code modular
//      - (Break complex problems into smaller, manageable pieces)
//      - (Make code organized and easier to maintain)

function print1to5() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function verifyAge() {
  let age = 18;
  if (age >= 18) {
    console.log("He can drive");
  } else {
    console.log("He connot drive");
  }
}

function printPoem() {
  console.log("twinkle twinkle little star");
  console.log("how i wonder what you are");
}

function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
}

function allTask() {
  rollDice();
  printPoem();
  verifyAge();
  print1to5();
}

// allTask();

// argument, parameter

// argument receiving
function printStudentDetails(studentName, studentAge) {
  console.log(`Student name is: ${studentName}, his age is: ${studentAge}`);
}

// parameter passing
// printStudentDetails("adnan" , 22);
// printStudentDetails("kahlid" , 32);
// printStudentDetails("imran" , 19);
// printStudentDetails("aman" , 22);

// function printSum(num1, num2, num3) {
//   let result = num1 + num2 + num3;
//   console.log(result);
// }

// printSum(22, 22, 22);

// printSum(10, 11, 12);

// let num1 = 22;
// let num2 = 22;
// let num3 = 22;

// let result = num1 + num2 + num3;
// console.log(result);

// function printAvg(a, b, c) {
//   let result = (a + b + c) / 3;
//   console.log(result);
// }

// printAvg(10, 20, 30);

// argument: input to a function
// function hello() {
//   // output from a function
//   // console.log("Hello world")
//   return ["hyd", "mum"];
// }

// let outputValue = hello();

// console.log(outputValue);

// function one(){
// let username = "kahlid"
// }

// const two = () => {
// let username = "kahlid"
// }

// two()

// create function that returns avg

// input: num1, num2, num3
// logic => calculate average and store it in a variable called result
// output: result

// function calculateAvg(num1, num2, num3) {
//   console.log("calculating average...");

//   let result = (num1 + num2 + num3) / 3;

//   return result;
// }

// calculate avg percentage
// input: avg
// logic: calculte percentage and store in a varible
// // output: percentage

// function calculatePercentage(avg) {
//   let result = (avg / 100) * 100;

//   console.log("calculating percentage...");

//   return result + "%"; // 30%
// }

// let average = calculateAvg(100, 100, 100);

// let precentage = calculatePercentage(average);

// console.log(precentage);

// function abc1() {
//   // function scope
//   let username = "asim";

// }

//  console.log(username);

// abc1();

// // global scope
// let username = "khalid";

// console.log(username);

// global scope
// let username = "secret123";

// CM
// let username = "global username";

// function verify1() {
//   let username = "verify1 username";
//   console.log(username); // verify1 username
// }

// function verify2() {
//   let username = "verify2 username";
//   console.log(username); // global username
// }

// verify1();
// verify2();

// {
//   var username = "blockscope1"
// }

// {
//   console.log(username)
// }

// let i = 0

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i)

// let username = 'global scope bhai'

// {
//   console.log(username)
// }

// function outerFn() {

//   function innerFn() {
//     console.log(username)

//     function grandChild() {
//      let username = "Outer fn data";
//     }

//     grandChild();
//   }

//   innerFn();
// }

// outerFn();

// let message = "Hello world";

// function outerFn() {
//   let message = "Hello India";

//   console.log(message); // Hello India

//   function innerFn() {
//     console.log(message); // Hello India
//   }

//   innerFn();
// }

// outerFn();

// console.log(message); // Hello world

// creating function, 1st way

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(2, 2);
// console.log(result);

// 2nd way of creating functions: function expression

// let sum = function (a, b) {
//   return a + b;
// };

// let sum = (a, b) => {
//   return a + b;
// };

// let result = sum(1, 2);
// console.log(result);

// // callback function
// function printBye(){
//   console.log("Bye, Bye. I am going")
// }

// // Higher order function
// const printHello = function (callbackFn) {
//   console.log("Hello");

//   callbackFn();
// };

// printHello(printBye);

// function greet(){
//   console.log("Hello...")
// }

// // Higher order fn
// function multipleGreet(callbackFn, count){

//   for(let i = 1; i<= count; i++){
//     callbackFn();
//   }

// }

// // greet: callback fn
// multipleGreet(greet, 10)

// function isOdd(num){
//   if(num % 2 !== 0){
//     console.log("Yes I verify that the number is odd.")
//   }
// }

// function isEven(num){
//   if(num % 2 == 0){
//      console.log("Yes I verify that the number is even.")
//   }
// }

// function Check(number , callbackFn){
//     callbackFn(number)
// }

// Check(10, isEven)

// Methods: pre-written code, javascript devlopers

// function in an object

// let studentObj = {

//   // property
//   name: "Asim",
//   rollNo: 2,
//   math: 20,
//   physics: 30,
//   chem: 30,

//   // method

//   // short syntax
//    getAvg() {
//     console.log((20 + 30 + 30) / 3);
//   },

//   // long syntax
//   getSum: function(){
//     console.log( 2 + 2 )
//   }

// };

// studentObj.getAvg();

const calculator = {
  add: function (a, b) {
    return a + b;
  },

  sub: function (a, b) {
    return a - b;
  },

  mul: function (a, b) {
    return a * b;
  },

  div: function (a, b) {
    return a / b;
  },
};

let sumResult = calculator.add(2, 2);
console.log(sumResult);


let mulResult = calculator.mul(2, 4)
console.log(mulResult)


let min = Math.min(2, 3, 3)
console.log(min)