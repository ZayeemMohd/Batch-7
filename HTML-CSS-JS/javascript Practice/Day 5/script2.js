// let cities = [
//   "London",
//   "Paris",
//   "Tokyo",
//   "New York",
//   "Sydney",
//   "Delhi",
//   "Hyderabad",
// ];

// const newCities = [];

// newCities = ["malakpet"];

// console.log(cities.length);

// length 5

// 0-5

// for (let i = 0; i < cities.length; i++) {
//   let newIndividualElem = cities[i].toUpperCase();

//   newCities.push(newIndividualElem);
// }

// console.log(cities);
// console.log(newCities);

// orginal array -> original elements

// step 1
// access all the individual original elements

// step 2
// convert them to upper case

// step 3
// create a new array

// step 3.1
// push the new individaul modified elemts to the array

// copy array -> orignal elements (uppercase)

//
// console.log("hello world");

// let scores = [85, 92, 78, 95, 88, 99];

// let sum = 0;

// for (let i = 0; i < scores.length; i++) {
//   sum = sum + scores[i]; // scores[i] => 85, 92, 78, 95 ...
// }

// console.log(sum);

// calcute the sum of numbers
// access the indi elems
// create a sum variable

// let iplTeams = [
//   ["Kholi", "Pathidar"],
//   ["Head", "Abhishek"],
//   ["Dhoni", "Jadeja"],
// ];

// for (let i = 0; i < iplTeams.length; i++) {
//   //   console.log(iplTeams[i]);
//   // iplTeams[i] => ['Kholi', 'Pathidar']
//   // iplTeams[i] => ["Head", "Abhishek"]
//   // iplTeams[i] =>  ["Dhoni", "Jadeja"]

//   for (let j = 0; j < iplTeams[i].length; j++) {
//     console.log(i, j);
//     console.log(iplTeams[i][j]);
//   }
// }

// console.log(iplPlayers[0][0]);
// console.log(iplPlayers[0][1]);

// console.log(iplPlayers[1][0]);
// console.log(iplPlayers[1][1]);

// console.log(iplPlayers[2][0]);
// console.log(iplPlayers[2][1]);

// let colors = ["Red", "Blue", "Green", "Yellow"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// for-of

// 1: "Red"
// 2: "Blue"
// 3: "Green"
// 4: "Yellow"

// for (let color of colors) {
//   console.log(color);
// }

// let city = "hyderabad";

// for (let letter of city) {
//   console.log(letter);
// }

// for (let i = 0; i < city.length; i++) {
//   console.log(city[i]);
// }

// console.log(city[0]);
// console.log(city[1]);
// console.log(city[0]);
// console.log(city[0]);
// console.log(city[0]);

let iplTeams = [
  ["Kholi", "Pathidar"],
  ["Head", "Abhishek"],
  ["Dhoni", "Jadeja"],
];

for (let team of iplTeams) {
  for (let player of team) {
    console.log(player);
  }
}

let numbers = [23, 67, 12, 89, 45, 91, 34];

let sum = 0;

for (let num of numbers) {
  sum = sum + num;
}

console.log(sum);

// const favMovie = "bahubali";

// let userGuess = prompt("Enter your guess...");

// while (favMovie != userGuess && userGuess !== "quit") {
//   userGuess = prompt("Enter your guess again... you are wrong");
// }

// if (userGuess == "quit") {
//   console.log("you lost.. you gave up");
// } else {
//   console.log("You are right!.. You won");
// }
