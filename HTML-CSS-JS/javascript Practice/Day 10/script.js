// console.log("hello world");

// console.log(document.all[6]);

// document.all[6].innerHTML = "Hello Hi How are you";

// console.dir(document.all[8].innerHTML);

// document.all[8].innerHTML = "hello world";

// console.log(document.all);

// const targetElem = document.getElementById("heading1");

// console.log(targetElem);

// targetElem.innerHTML = "hello";

// 2 steps:
// 1-selecting the elemet,
// 2-modify

// <a href="#" id="planets-list-1" class="boxLink">8 Planets</a>
// const listObj = document.getElementById("planets-list-1");
// listObj.innerHTML = "19 Planets";

//  <img
//     src="https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=400"
//     class="oldImg"
//   />

// let imgObjArr = document.getElementsByClassName("oldImg");
// console.log(imgObjArr);

// const targetElem = document.getElementsByTagName("img");
// console.log(targetElem);

// const targetElem = document.querySelectorAll(".oldImg")
// console.log(targetElem)

// const targetElement = document.querySelector(".box li");
// console.log(targetElement);

// const targetElem = document.querySelectorAll(".boxLink");
// console.log(targetElem);

// const targetElem = document.querySelector("li");
// console.log(targetElem);

// const targetElem = document.querySelector("ul ul li a");
// console.log(targetElem);
// targetElem.innerHTML = "9 planets";

// const overview = document.querySelector("#overview-para");

// console.log(overview.innerText)

// console.log(overview.innerHTML)

// console.log(overview.textContent);

// let str = "123";

// "12345"

// str = str +  '45'

// console.log(str);

// overview.innerHTML = overview.innerHTML + "Hello world, today we are taking about the <b style='color: red'> solar </b> system";

const h1 = document.querySelector("#heading1");
h1.innerHTML = "Our amazing Solar system";

const imgArr = document.querySelectorAll(".oldImg");
console.log(imgArr.length);

const description = document.querySelector("#description");
console.log(description.textContent);

const allLinks = document.querySelectorAll(".box a");
console.log(allLinks);

const firstH2 = document.querySelector("h2");
firstH2.innerHTML = firstH2.innerHTML + " ⭐️";
