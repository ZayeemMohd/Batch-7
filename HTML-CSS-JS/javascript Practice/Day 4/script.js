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

let message = "I love apple pie and apple juice";

// const newMessage = message.replaceAll("apple", "");

// console.log(newMessage);

let result = message.substring(
  message.indexOf("pie"),
  message.indexOf("pie") + 3,
);
console.log(result);
