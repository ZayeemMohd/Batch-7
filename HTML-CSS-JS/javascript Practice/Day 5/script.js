// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")

// initialization ; conditioin ; updation
// for (let i = 20; i <= 40 ; i++) {
//   console.log(i);
//   // console.log("hello world")
// }

// print odd numbers from 1-10
// for (let i = 10; i <= 20; i++) {
//   // console.log(i);
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 100; i <= 200; i += 2) {
//   console.log(i);
// }

//  5 x 1 = 5
// 5 x 2 = 10

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// let userInput = prompt("Enter any number or type 'exit' to close the loop");

// while (userInput !== "exit") {
//   userInput = prompt("Enter any number or type 'exit' to close the loop");
// }

// console.log("User chose exit");

// loop based on condition: while : entry control loop
// loop based on iteration count: for : itration control loop

// let savedPassword = "secret123";

// let userPassword = prompt("Enter your password: ");

// while (savedPassword !== userPassword) {
//   userPassword = prompt("Enter your password again!");
// }

// console.log("login successfull...");

// print numbers from 1 - 10 using while loop

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// print sum on n numbers // 10
// 1 + 2 + 3 + ... 10

// let i = 1;
// let sum = 0; // 10

// while (i <= 10) {
//   sum = sum + i;

//   // console.log(i);
//   i++;
// }

// console.log(sum);

// let savedPassword = "secret123";

// let userPassword = prompt("Enter your password: ");

// let userAttempts = 0;

// while (savedPassword !== userPassword && userAttempts <= 5) {
//   userPassword = prompt("Enter password again...");
//   userAttempts++;

//   console.log(`this is your ${userAttempts} attempt `);
// }

// if (userAttempts > 5) {
//   console.log("too many attemps");
// } else {
//   console.log("login successfull...");
// }

// condition based loop

// at least 1 loop execute without checking the condition

// let userInput;

// do {
//   userInput = prompt("enter a number");
// } while (userInput !== "exit");

// console.log("user chose exit");

// let choice;

// do {
//   console.log("--- choose any option below ----");
//   console.log("1. sum");
//   console.log("2. mul");
//   console.log("3. exit");

//   choice = prompt("Choose option 1, 2, 3: "); // input sting: 3 -> "3"

//   if (choice == 1) {
//     console.log("calculating sum...");
//   } else if (choice == 2) {
//     console.log("calculating mul...");
//   }
// } while (choice !== "3");

// console.log("Bye, user chose option 3, exiting...");

// for - iteration count fixed

// while - based condition true

// do while - based condition true, at least one time run

// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     continue; // skip 7th iteration
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 3; i++) {
//   let starString = "";
//   for (let j = 1; j <= 3; j++) {
//     starString = starString + "* ";
//   }
//   console.log(starString);
// }

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i, j);
//   }
// }

// ATM

// 1. Add money (deposit)
// 2. remove money (withdraw)
// 3. check balance
// 4. exit

// let userChoice;
// let balance = 500;

// do {
//   userChoice = prompt(`
// 1. Add money (deposit) \n
// 2. remove money (withdraw) \n
// 3. check balance \n
// 4. exit`);

//   if (userChoice == "3") {
//     console.log(balance);
//   } else if (userChoice == "2") {
//     console.log("user chose to withdraw amount");

//     let removeAmout = prompt("enter withdraw amount ");

//     balance = balance - removeAmout;

//     console.log(`${removeAmout} removed from bank, new balance is ${balance}`);
//   } else if (userChoice == "1") {
//     console.log("user chose to deposite money");

//     let depositeAmount = Number(prompt("enter the deposite amount: "));

//     balance = balance + depositeAmount;

//     console.log(
//       `${depositeAmount} is added to your balance, new balance is ${balance}`,
//     );
//   }
// } while (userChoice !== "4");

// console.log("user chose exit, remove your card, bye...");
