// let fruitsArr = ["apple", "banana", "grapes"];

// console.log(fruitsArr[2]);

// let students = ["khalid", "a. rahman", "qhadeer", "salman"];

// let ages = [22, 24, 23, 22];

// object litrals
// key: value

// let studentObj = {
//   // key: value = property
//   name: "khalid",
//   age: 22,
//   isVerified: false,
// };

// MongoDB: key-value pairs

// datastructure: Create, Read, Update, Delete (CRUD)

// create: creating an object
// let post = {
//   userName: "coder_dev",
//   content: "It's a nice weather today...",
//   imgURL: "asdfsdfsfsdafladskfjads;fl",
//   likesCount: 1,
//   reposts: 4,
//   tags: ["#happy", "#nice_day", "#summer"],
//   "@messages": "Hi I am trying to reach you",
// };

// let userRequest = prompt("Enter key to get its value from your object: ");

// console.log(post[userRequest]);

// let keyName = "userName";

// console.log(post[keyName]);

// console.log(post["@messages"]);

// console.log(post.userName);

// console.log(post.$messages);

// console.log(post["userName"]);

// post.shareCount = 3;

// console.log(post);

// console.log(post);

// // updating an object value

// post.likesCount = 2;
// post.userName = "coder_developer";

// delete post.tags;

// console.log(post);

// console.log(post);

// reading: accessing object data

// console.log(post.userName);
// console.log(post.content);

// console.log(post.imgURL);
// console.log(post.likesCount);

// console.log(post.reposts);
// console.log(post.tags);

// if (post.likesCount > 5) {
//   console.log("your post is going viral...");
// }

// let students = {
//   student1: {
//     studentName: "Khalid",
//     age: 44,
//   },
//   student2: {
//     studentName: "Abdul",
//     age: 25,
//   },
//   student3: {
//     studentName: "Saleem",
//     age: 30,
//   },
// };

// console.log(students.student1.studentName);

// console.log(students.student2.studentName);

// console.log(students.student3.studentName);

// console.log(students.student3.studentName);

// let obj = {
//     obj1: "obj1" ,
//     obj2: "obj2",
//     obj3:  "obj3"
// }

// let obj = ["obj1", "obj2", "obj3"]

// let students = [
//   {
//     studentName: "Khalid",
//     age: 44,
//   },
//   {
//     studentName: "Abdul",
//     age: 25,
//   },
//   {
//     studentName: "Saleem",
//     age: 30,
//   },
//   {
//     studentName: "Khalid",
//     age: 44,
//   },
//   {
//     studentName: "Abdul",
//     age: 25,
//   },
//   {
//     studentName: "Saleem",
//     age: 30,
//   },
//   {
//     studentName: "Khalid",
//     age: 44,
//   },
//   {
//     studentName: "Abdul",
//     age: 25,
//   },
//   {
//     studentName: "Saleem",
//     age: 30,
//   },
// ];

// for (let obj of students) {
//   console.log(obj.studentName);
// }

// console.log(students[2].studentName);

// students.push({ studentName: "Sami", age: 12 });

// console.log(students);

// let coursesArr = [
//   {
//     courseId: 1,
//     courseName: "MERN Stack",
//     courseDuration: "4 months",
//     coursePrice: 4000,
//   },
//   {
//     courseId: 2,
//     courseName: "Data Analytics",
//     courseDuration: "3 months",
//     coursePrice: 3000,
//   },
//   {
//     courseId: 3,
//     courseName: "Data Science",
//     courseDuration: "3.5 months",
//     coursePrice: 3500,
//   },
//   {
//     courseId: 4,
//     courseName: "Cybersecurity",
//     courseDuration: "6 months",
//     coursePrice: 5000,
//   },
// ];

// for (let obj of coursesArr) {
//   console.log(
//     `${obj.courseId}: This course is about ${obj.courseName}, you can complete this course in ${obj.courseDuration} and you have to pay ₹${obj.coursePrice}/- amount to enroll in this course.`,
//   );
// }

//  Create, Read, Update, Delete (CRUD)

// array (data structure)
// let arr = ["apple", "banana", "mango"]; // create

// // read
// let result = arr[2];
// console.log(result);

// // update
// arr[1] = "orange";

// // delete
// arr.splice(0, 1);

// object literals (another data structure)
// CRUD

// let students = ["khalid", "asif", "faisal"]

// let ages = [18, 21, 22]

// let student1Arr = ["khalid", 23];

// let student1 = {
//   name: "khalid",
//   age: 33,
//   address: "charminar",
//   phoneNumber: "234213434343",
//   isPresent: true,
//   123: "hindi",
//   subjects: ["Math", "Physics", "Chem"],
//   "@country": "india",
//   marks: {
//     math: 80,
//     physics: 50,
//     chem: 20,
//   },
// };

// let myKey = "name"

// console.log(student1["123"])
// console.log(student1["@country"])
// console.log(student1[myKey])

// console.log(student1);
// console.log(student1.address);

// student1.age = 34
// student1.isPresent = false

// student1.city = "hyderabad"

// delete student1.phoneNumber
// delete student1.marks
// delete student1.subjects

// console.log(student1)

// let parentObject = {
//   childObj1: {
//     studentName: "Khalid",
//     studentAge: 25
//   },
//   childObj2: {
//     studentName: "Sami",
//     studentAge: 21
//   },
//   childObj3: {
//     studentName: "Faisal",
//     studentAge: 18
//   }
// }

// console.log(parentObject.childObj3.studentName)

let studentArr = [
  {
    studentName: "Khalid",
    studentAge: 25,
  },
  {
    studentName: "asim",
    studentAge: 25,
  },
  {
    studentName: "barkat",
    studentAge: 35,
  },
  {
    studentName: "Suleman",
    studentAge: 40
  }
];

studentArr.push({
  studentName: "osman",
  studentAge: 21,
});

for (let element of studentArr) {
  console.log(
    `The student name is ${element.studentName}, his age is ${element.studentAge}`,
  );
}
