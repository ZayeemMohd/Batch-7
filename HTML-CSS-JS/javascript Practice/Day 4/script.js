// console.log("Hello world");

// if("0"){
//     console.log("truthy")
// } else {
//     console.log("falsy")
// }

// //  console related methods

// console.error("hello india");
// console.table(["apples", "oranges", "bananas"]);
// console.warn("hello hyderabad");
// console.log("hello charminar");

// string related methods

// let message = "   Hello   world    ";

// // db save

// // string methods -> does not modify the original string
// let new_message = message.trim();

// console.log(message);
// console.log(new_message);

// let message = "Hello world";

// let new_message = message.toUpperCase();

// console.log(new_message);

// let data = "HELLO WORLD";

// let newData = data.toLowerCase()

// console.log(newData)

// let emailId = "ISMAILBHAI@GMAIL.COM";

// let newEmailId = emailId.toLowerCase();

// console.log(newEmailId);

// let userInput = prompt("Enter your choice: ");

// if (userInput.toLowerCase() === 'yes') {
//     console.log("you can go further..")
// } else {
//     console.log("you cannot go further...")
// }

// let str1 = "I think Ruth's dog is cuter than your dog!";

// const foundIndex = str1.indexOf("dog", 16);

// console.log(foundIndex);

// let paragraph =
//   "To find the second occurrence in JavaScript, pass the index of the first occurrence plus one as the second argument (position) to indexOf(). This tells JavaScript to skip the first match and start searching right after it";

// let findWord = "searching";

// if (paragraph.indexOf(findWord) !== -1) {
//   console.log("Yes your word is present in my paragraph");
// } else {
//   console.log("No your word is not present in my paragraph");
// }

// let userMessage = "     Hello world      ";

// // let result1 = userMessage.trim();

// // let result2 = result1.toUpperCase();

// // console.log(result2);

// let finalResult = userMessage.trim().toUpperCase().toLowerCase();

// console.log(finalResult);

// var || let and const

// const count = 0;

// count++;

// console.log(count);

// let message = "hello world";

// message = "hello india";

// console.log(message);

// const text = "JavaScriptadfasdfsdf";

// const finalText = text.slice(-5);

// console.log(finalText);

// let name = "Alexander";

// console.log(name.slice(0, 1));

// console.log(name.slice(-1));

// let message = "I love apple pie and apple juice";

// // const newMessage = message.replaceAll("apple", "");

// // console.log(newMessage);

// let result = message.substring(
//   message.indexOf("pie"),
//   message.indexOf("pie") + 3,
// );
// console.log(result);

// let message = "     hello.     ";

// let new_message = message.trim();

// console.log(message);

// console.log(new_message);

// let userEmail = prompt("Enter the email: ")

// let finalUserEmail = userEmail.trim()

// alert(finalUserEmail)

// let msg = "hello world";

// let index = msg.indexOf("l");

// console.log(index);

// let newMsg = msg.toUpperCase();

// console.log(newMsg);

// let msg = "     hello world";

// let result = msg.trim().toUpperCase();

// console.log(result);

// let msg = "javascript";

// let newMsg = msg.replace("java", "python");

// console.log(newMsg);

// let newMsg = msg.slice(4);

// console.log(newMsg);

// let msg = "I love apple and I love apple pie";

// let newMsg = msg.replaceAll("apple", "orange");

// console.log(newMsg);

// let student2 = "Abdul"

// let student4 = "isamail"

// let student1 = "Khalid"

// let student3 = "sam"

// array - linear way of storing data

// let studentArr = ["Abdul",  "isamail", "Khalid", "sam"]

// let fruitsArr = ["apple", "banana", "mango", "grapes"]

// let carsArr = ["BMW", "AUDI", "SUZUKI", "MAHINDRA", "TATA"]

// let marksArr = [22, 56, 90, 10]

// let alphabetArr = ['a', 'b', 'c', 'd']

// let isPresentArr = [true, false, true, false]

// //
// let studentDetails = ["ABC", "charminar, hyderabad, telangana", 90, true]

// let fruit1 = "apple"

// let fruit2 = "banana"

// let fruit3 = "orange"

// let fruits = [fruit1, fruit2, fruit3]

// console.log(fruits)

// let city = "hyderabad";
// city[0]; // h

// console.log(city.length);

// index = 0
// let fruits = ["apple", "banana", "mango"];

// console.log(fruits.length)

// print last element of an array

// console.log(fruits[fruits.length - 1]);

// let value = fruits[2]

// console.log(value);

// let fruits = ["mango", "apple", "litchi"];

// fruits[1] = "pineapple";

// console.log(fruits);

// let city = "mumbai";

// city[0] = "b";

// console.log(city);

// let numbers = [1, 2, 3, 4];

// numbers[1] = 20
// numbers[3] = 40

// console.log(numbers)

// create
// let colors = ["red", "green", "orange", "blue"];

// update
// colors[colors.length - 1] = "black";
// console.log(colors);

// add

// colors.push("voilet")

// console.log(colors)

// let firstReturn = colors.pop(); // blue
// console.log(firstReturn)

// let secondReturn = colors.pop(); // orange
// console.log(secondReturn)

// colors.push("yellow");

// red , green, yellow

// console.log(colors);

// let fruits = ["

// let indexVal = fruits.indexOf("mango");

// console.log(indexVal);


// let isElemAvailable = fruits.includes("orange")
// console.log(isElemAvailable)

// fruits.unshift("pineapple");

// console.log(fruits);

// let deletedElem = fruits.shift();
// console.log(deletedElem)

// console.log(fruits)



// let inventory = ["apple", "banana", "tomato", "potato", "rice"]


// let userInput = prompt("Enter the item you want to search...");


// if (inventory.includes(userInput)) {
//   console.log(`Yes, ${userInput} is available`)
// } else {
//   console.log(`No, ${userInput} is not available`)
// }


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = arr1.concat(arr2)

// console.log(arr3)


// let numbers = [1, 2, 3, 4, 5];

// numbers.reverse();

// console.log(numbers)


// const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];


// does not affect the original array, instead return the new sliced array
// let newArray = fruits.slice(2, 4)


// console.log(newArray)


// splice affects the original array just like pop, shift

// let deletedItems = fruits.splice(2, 2, "kiwi", "stawberry")


// console.log(deletedItems)
// console.log(fruits)



const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];


// fruits.splice(3, 0, "Mosambi")


// console.log(fruits)

let deletedElem = fruits.splice(2, 1, "Mosambi")


console.log(deletedElem)

console.log(fruits)