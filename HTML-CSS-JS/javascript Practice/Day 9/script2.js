// default parameters
// backup parameters

// function greet(name = "Guest"){
//     console.log("Hello", name)
// }

// greet("Bob")

// function applyDiscount(price, discount = 0) {
//   console.log("you have to pay", price - (price * discount) / 100);
// }

// applyDiscount(200, 50);

// let numbers = [2, 9, 8];

// console.log(numbers);
// console.log(...numbers);

// let result = Math.max(...numbers);

// console.log(result);

// COPY ()

// let copyArr = numbers;

// copyArr.push(10);
// console.log(copyArr);
// console.log(numbers);

// let str = "hyderabad";

// let copyStr = str;

// copyStr = "secunderabad";

// console.log(copyStr);
// console.log(str);

// shallow vs deep copy

// let originalArr = [1, 2, 3, 4];

// let copyArr = [...originalArr];
// copyArr.push(5);

// console.log(copyArr);
// console.log(originalArr);

// Merge two arrays

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let mergedArray = [...arr1, 0, ...arr2];

// console.log(mergedArray);

// function findMax(...input) {

//   const result = input.reduce((acc, elem) => {
//     if (acc > elem) {
//       return acc;
//     } else {
//       return elem;
//     }
//   }, input[0]);

//   console.log(result);
// }

// findMax(88, 99, 8);

// let colors = ["Red", "Green", "Blue"];

// // let firstColor = colors[0]
// // let secondColor = colors[1]
// // let thirdColor = colors[2]

// let [thirdColor, secondColor, firstColor] = ["Red", "Green", "Blue"]

// console.log(firstColor)
// console.log(secondColor)
// console.log(thirdColor)

// let numbers = [1, 2, 3, 4, 5];

// // let firstNum = numbers[0]
// // let secondNum = numbers[1]

// let [ , ,thirdNum] = numbers

// // console.log(firstNum)
// // console.log(secondNum)
// console.log(thirdNum)

let student = {
  name: "Rahul",
  age: 20,
  grade: "A",
};

// let username = student.name;
// let age = student.age;
// let studentGrade = student.grade;

// let name = student.name;
// let age = student.age;
// let grade = student.grade

// let { name, age , grade } = student;

// console.log(name);
// console.log(age);
// console.log(grade);

let user = {
  name: "Alice",
  age: 25,
  city: "Mumbai",
  country: "england"
};

let { city, country = "India" } = user;

console.log(city);
console.log(country)