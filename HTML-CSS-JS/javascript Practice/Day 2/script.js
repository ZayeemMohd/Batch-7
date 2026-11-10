// console.log("Hello world");

// identifier vs keyword (reserved words)

// let user_name = "saleem bhai";

// let userAge = 22;
// let userage = 30

// let user_name1 = 33

// console.log(user);

// let userName = "Mohd";

// let UserName = "khalid";

// // camelCase
// let userName = "Salman";

// let user_name = "Qhadeer";

// let USERNAME = "Abdul";

// let firstName = "abdul";

// let lastName = "khan";

// let emailAddress = "abc@gmail.com";

// SCREAMING_SNAKE_CASE = 'abcd'

// loosely vs strictly typed progamming language
// let isLogin = true;

// console.log(typeof isLogin);

// let isAdmin = true;
// let isSubscribed = true;
// let isVerified = true;

// let luckyNumber = 9;

// console.log(typeof luckyNumber); // number

// // dynamically typed programming language
// luckyNumber = "hello world";

// console.log(typeof luckyNumber);

// // js: loosely and dynamically
// // ts: strictly and static

// luckyNumber = "nine"

// let msg = ` It's a rainy day. He says his name is "Khalid"  `;

// console.log(msg);

// let msg = "Hello world";

// console.log(msg[ msg.length - 1 ]);

// let firstName = "Shahrukh";

// let lastName = "Khan";

// console.log(firstName, lastName)

// console.log(firstName + lastName)

// let fullName = firstName + " " + lastName; // Shahrukh Khan

// console.log(fullName);

// let result =  22 + 3 + 5 + 10;

// console.log(result); // 22223510

// let firstName = "Sharukh";
// let lastName = "Khan";

// let fullName = firstName + lastName;

// console.log(firstName); //

// console.log(fullName);

// let phoneNumber = null;

// console.log(phoneNumber);

// console.log(22);
// console.log("hello world");
// console.log(true);

// let msg = `It's a rainy day`;

// console.log(msg, "Hi", 22, false);

// console.log("Sum is:", 22 + 22)

// let userName = "Mohd";

// let msg = "Hello userName 2 + 2 ";

// let result = 2 + 2;

// console.log(result);

// console.log(msg);

// let msg = `Hello ${userName}`;

// let msg1 = "Hello " + userName;

// console.log(msg1);

// let item = "mobile phone";

// let cost = 80000;

// let msg = "The cost of item: " + item + " is ₹" + cost + "/- only.";
// let msg1 = `The cost of item: ${item} is ₹${cost + 10}/- only. `;

// console.log(msg);
// console.log(msg1);

// console.log(5 == 5); // true

// console.log("hello" == "hello "); // false

// console.log(5 == "five")

// loosly equality
// console.log(5 == "5"); // true
// only check value not data type

// strict equality
// console.log(5 === "5")
// check value as well as check data type

// console.log(5 === "5"); //true

// console.log(0 === false) // true

// console.log(1 == true)

// console.log("secret123" === "secret125")

// console.log("heLlo" > "hello"); // true
//  h > H
// 104 > 72
// true


// e > E
// true


let minPasswordLength = 10;

let userPasssword = "secret12345"


console.log(userPasssword.length >= minPasswordLength)
// 9 >= 10