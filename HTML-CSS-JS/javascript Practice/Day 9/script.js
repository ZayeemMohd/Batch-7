// console.log("hello world");

// standard function
function printHello() {
  console.log("Hello");
}

// function expression
const printHello2 = function () {
  console.log("Hello...");
};

// arrow function (callback)
const printHello3 = () => {
  console.log("hello");
};

// Higher order function
// function repeat3Function(callbackFn) {

//   for (let i = 1; i <= 3; i++) {
//     callbackFn();
//   }

// }

// repeat3Function(() => {
//   console.log("hello");
// });

// setTimeout => Higher Order Fn

// setTimeout(() => {
//     console.log("Hello world but after 2 seconds...")
// }, 2000)

// .forEach()

// const elemUpperCase = (elem) => {
//     return elem.toUpperCase();
// }

// let fruits = ["apple", "orange", "mango"];

// let newFruits = [];

// for (let i = 0; i < fruits.length; i++) {
//    const newElem = elemUpperCase(fruits[i])
//    newFruits.push(newElem)
// }

// console.log(newFruits)

// let numbers = [10, 20, 30, 40];

// function printElem(elem){
//     console.log(elem)
// }

// for(let i = 0 ; i < numbers.length; i++){
//     printElem(numbers[i])
// }

// .forEach()

// let numbers = [10, 20, 30, 40, 50];

// numbers.forEach((elem) => {
//   console.log("hello", elem);
// });

// Example 2: Add price symbol
let prices = [99, 149, 299]; // $99/-

// prices.forEach((elem)=>{
//     console.log(`$${elem}/-`)
// })

// let fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach((elem, index)=>{

//     console.log(index, "=>" ,elem)

// })

// let scores = [85, 90, 78, 92];

// // accumulator
// let total = 0;

// scores.forEach((mark) => {
//   total = total + mark
// });

// console.log(total)

// Higher order method, gives each element to my function

// let names = ["alice", "bob", "charlie"];

// // create and returns a new array based on return value of individual callbackfunction
// const newArray = names.map((elem)=>{
//     return "HI";
// })

// console.log(newArray)

// create a new array with the double values: [2, 4, 6, 8]

// let nums = [1, 2, 3, 4];

// let newArray = nums.map((elem)=>{
//     return elem * 2
// })

// console.log(newArray)

// (elem) => {
//   return `<li>${elem}</li>`;
// };

// new array with the return values of callback function
// let items = ["Home", "About", "Contact"];

// const newItems = items.map((e) => `<li>${e}</li>`);

// console.log(newItems);

// .forEact();
// .map();
// .filter()

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const filteredArray = numbers.filter((elem)=>{

//     if(elem % 2 == 0){
//         return true
//     } else {
//         return false
//     }

// })

// console.log(filteredArray)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const filteredArray = numbers.filter((elem)=>{

//     return elem % 2 == 0

// })

// console.log(filteredArray)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const filteredArray = numbers.filter( elem => elem % 2 !== 0 )

// console.log(filteredArray)

// let grades = [45, 78, 89, 34, 92, 56];

// const filteredArray = grades.filter((elem) => {
//   if (elem > 50) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(filteredArray);

// let words = ["hi", "hello", "bye", "goodbye"];

// const filteredArray = words.filter((elem) => {
//   if (elem.length > 3) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(filteredArray);

let ages = [2, 5, 18, 3];


const result = ages.every((elem)=>{
    if(elem >= 18){
        return true
    } else {
        return false
    }
})

console.log(result)


