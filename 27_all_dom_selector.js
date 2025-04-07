// document.getElementById("title").id
// 'title'
// document.getElementById("title").class
// undefined
// document.getElementById("title").className
// 'heading'
// document.getElementById("title").getAttribute("class")
// 'heading'
// document.getElementById("title").getAttribute("id")
// 'title'
// document.getElementById("title").setAttribute("class","test") // class heading name is over ridden by test
// undefined
// document.getElementById("title").setAttribute("class","test heading") // here the previous class name that is heading will also be there as well as test will be new added class name 
// undefined
// const x=document.getElementById("title")
// undefined
// console.log(x)
// VM926:1 <h1 id=​"title" class=​"test heading">​…​</h1>​
// undefined
// x.style.backgroundColor="green"
// 'green'
// x.style.padding="20px"
// '20px'
// x.style.borderRadius="20PX"
// '20PX'




//all dom selector in js
//-----------------------
//refer to 27_all_dom_selector.html and 27_all_dom_selector.png
// create the above file and then open it in the live server

//what is the diffrence between the innerText and the textContent
//---------------------------------------------------------------
// innerText -> it shows only the visible content and is unable to show the hidden content
// textContent -> it can show both the visible as well as the hidden content of an element
// note : these 2 above do not suppport html tags and do not shows the html tags
// innerHTML -> it shows the html tags present inside a tag and also supports the html

//example
//--------------
// const x= document.getElementById("title")
// undefined
// x.textContent
// 'dom learning with me text text text 123'
// x.innerHTML
// 'dom learning with me <span style="display: none;">text text text 123</span>'
// x.innerText
// 'dom learning with me'





// query selector
//-------------------------
// document.getElementsByClassName("heading")
// HTMLCollection [h1#title.heading, title: h1#title.heading]
// document.querySelector("h1")  // it gives the first <h1> tag
// <h1 id=​"title" class=​"heading">​…​</h1>​"dom learning with me "<span style=​"display:​ none;​">​text text text 123​</span>​</h1>​
// document.querySelector(".heading")
// <h1 id=​"title" class=​"heading">​…​</h1>​
// document.querySelector("#title")
// <h1 id=​"title" class=​"heading">​…​</h1>​

// document.querySelector('input [type="password"]')
// null
// document.querySelector("p:first-child")
// null


//how to change of the first li tag in the ul tag
//-----------------------------------
// const myul = document.querySelector('ul')
// undefined
// const turngreen = myul.querySelector('li')
// undefined
// turngreen.style.backgroundColor="green"
// 'green'
// turngreen.style.padding="40px"
// '40px'
// turngreen.innerText = "one one one"
// 'one one one'


//use of querySelectorAll
//-------------------------
// const myul = document.querySelector('ul')
// undefined
// const turngreen = myul.querySelector('li')
// undefined
// turngreen.style.backgroundColor="green"
// 'green'
// turngreen.style.padding="40px"
// '40px'
// turngreen.innerText = "one one one"
// 'one one one'
// document.querySelectorAll("li")
// NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
// const temp_li_list=document.querySelectorAll("li")
// undefined
// temp_li_list
// NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
// const myarr=[1,2,3,4]
// undefined
// myarr
// (4) [1, 2, 3, 4]0: 11: 22: 33: 4length: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// temp_li_list
// NodeList(3) [li, li, li]
// temp_li_list.style.color="red"
// VM732:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:25
// (anonymous) @ VM732:1
// temp_li_list[0].style.color="pink"
// 'pink'
// temp_li_list[1].style.color="red"
// 'red'
// temp_li_list[3].style.color="yellow"
// VM831:1 Uncaught TypeError: Cannot read properties of undefined (reading 'style')
//     at <anonymous>:1:17
// (anonymous) @ VM831:1
// temp_li_list[2].style.color="yellow"
// 'yellow'
// const myh1=document.querySelectorAll("h1")
// undefined
// myh1
// NodeList [h1#title.heading]0: h1#title.headinglength: 1[[Prototype]]: NodeList

//  //note : the Nodelist and the html collection are not pure array

// myh1[0].style.backgroundColor="blue"
// 'blue'
// temp_li_list
// NodeList(3) [li, li, li]
// temp_li_list.forEach(function (x) {
//     l.style.backgroundColor="green"
// }
// VM1130:3 Uncaught SyntaxError: missing ) after argument list
// temp_li_list.forEach(function (x) {
//     l.style.backgroundColor="green"
// })
// VM1137:2 Uncaught ReferenceError: l is not defined
//     at <anonymous>:2:5
//     at NodeList.forEach (<anonymous>)
//     at <anonymous>:1:14
// (anonymous) @ VM1137:2
// (anonymous) @ VM1137:1
// temp_li_list.forEach(function (x) {
//     x.style.backgroundColor="green"
// })
// undefined


//document.getElementsByClassName
//------------------------------

// document.getElementsByClassName("list-item")
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
// const temp_class_list=document.getElementsByClassName("list-item")
// undefined
// temp_class_list
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
// temp_class_list.forEach(li)
// VM1422:1 Uncaught ReferenceError: li is not defined
//     at <anonymous>:1:25
// (anonymous) @ VM1422:1
// temp_class_list.forEach( function (li){)
// VM1441:1 Uncaught SyntaxError: Unexpected token ')'
// temp_class_list.forEach( function (li){ console.log(li)})
// VM1484:1 Uncaught TypeError: temp_class_list.forEach is not a function
//     at <anonymous>:1:17
// (anonymous) @ VM1484:1
// Array.from(temp_class_list)
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]
// const my_converted_array=Array.from(temp_class_list)
// undefined
// my_converted_array
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]
// my_converted_array.forEach(function (li)){console.log(li)})
// VM1748:1 Uncaught SyntaxError: Unexpected token ')'
// my_converted_array.forEach(function (li){console.log(li)})
// VM1752:1 <li class=​"list-item">​…​</li>​
// VM1752:1 <li class=​"list-item">​…​</li>​
// VM1752:1 <li class=​"list-item">​…​</li>​
// VM1752:1 <li class=​"list-item">​…​</li>​
// undefined
// my_converted_array.forEach(function (li){li.style.color="orange"})
// undefined




// const x=document.getElementsByClassName("lili")
// undefined
// x
// HTMLCollection(4) [li.lili, li.lili, li.lili, li.lili]0: li.lili1: li.lili2: li.lili3: li.lililength: 4[[Prototype]]: HTMLCollection
// Array.from(x)
// (4) [li.lili, li.lili, li.lili, li.lili]0: li.lili1: li.lili2: li.lili3: li.lililength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// const y=Array.from(x)
// undefined
// y
// (4) [li.lili, li.lili, li.lili, li.lili]
// y.forEach(function (l){ l.style.backgroundColor="yellow"})
// undefined
// 200_practice.html:1 Uncaught (in promise) Error: Could not establish connection. Receiving end does not exist.Understand this errorAI
// y[0].innerHTML="hello"
// 'hello'
// y[2].innerText="hello hello hello "
// 'hello hello hello '
















































































































// repractice this topic
//---------------------------------

[DOM] Password field is not contained in a form: (More info: https://goo.gl/9p2vKq) <input type=​"password" name id>​
document.querySelector("h1")
<h1 id=​"title" class=​"heading">​…​</h1>​
document
#document (http://127.0.0.1:5500/chai-aur-code-javascript/27_all_dom_selector.html)
document.querySelector("title")
<title>​Document​</title>​
document.querySelector("#title")
<h1 id=​"title" class=​"heading">​…​</h1>​
document.querySelector(".heading")
<h1 id=​"title" class=​"heading">​…​</h1>​
document.querySelector("input[type='password']")
<input type=​"password" name id fdprocessedid=​"d0ki09">​
227_all_dom_selector.html:1 Uncaught (in promise) Error: Could not establish connection. Receiving end does not exist.Understand this errorAI
document.querySelector("ul")
<ul>​…​</ul>​
const myul=document.querySelector('ul')
undefined
myul
<ul>​…​</ul>​
myul.querySelector("li")
<li class=​"list-item">​…​</li>​
const turngreen=x.querySelector("li")
VM658:1 Uncaught ReferenceError: x is not defined
    at <anonymous>:1:17
(anonymous) @ VM658:1Understand this errorAI
const turngreen=myul.querySelector("li")
undefined
turngreen
<li class=​"list-item">​…​</li>​::marker​"one"</li>​
turngreen.style.backgroundcolor
undefined
turngreen.style.backgroundcolor="green"
'green'
turngreen.style.backgroundColor="green"
'green'
turngreen.style.backgroundColor="red"
'red'
turngreen.style.padding="20px"
'20px'
turngreen.style.borderRadius="20px"
'20px'
document.querySelectorAll("li")
NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
const templist=document.querySelector("li")
undefined
templist
<li class=​"list-item" style=​"background-color:​ red;​ padding:​ 20px;​ border-radius:​ 20px;​">​…​</li>​
const templist=document.querySelectorAll("li")
undefined
templist
NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const myArr=[1,2,3,4]
undefined
myarr
VM1341:1 Uncaught ReferenceError: myarr is not defined
    at <anonymous>:1:1
(anonymous) @ VM1341:1Understand this errorAI
myArr
(4) [1, 2, 3, 4]0: 11: 22: 33: 4length: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
templist.style.backgroundColor="green"
VM1468:1 Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
    at <anonymous>:1:31
(anonymous) @ VM1468:1Understand this errorAI
templist[0].style.backgroundColor="green"
'green'
templist[1].style.backgroundColor="blue"
'blue'
templist.forEach(function ele){
    ele.style.backgroundcolor="yellow";
    ele.style.padding="20px";
    ele.style.borderRadius="20px"
}
VM1665:1 Uncaught SyntaxError: Unexpected token ')'Understand this errorAI
templist.forEach(function ele){
    ele.style.backgroundcolor="yellow"
}
VM1690:1 Uncaught SyntaxError: Unexpected token ')'Understand this errorAI
templist.forEach(function (ele){
    ele.style.backgroundcolor="yellow";
    ele.style.padding="20px";
    ele.style.borderRadius="20px"
})
undefined
templist.forEach(function (ele){
    ele.style.backgroundcolor="yellow";
    ele.style.padding="20px";
    ele.style.borderRadius="20px"
})
undefined
templist.forEach(function (ele){)
VM1784:1 Uncaught SyntaxError: Unexpected token ')'Understand this errorAI
templist.forEach(function (ele){
    ele.style.backgroundColor="yellow"
})
undefined
templist.forEach(function (ele){
    ele.style.color="black"
})
undefined
document.getElementsByClassName("list")
HTMLCollection []length: 0[[Prototype]]: HTMLCollection
227_all_dom_selector.html:1 Uncaught (in promise) Error: Could not establish connection. Receiving end does not exist.Understand this errorAI
document.getElementsByClassName("list-item")
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: HTMLCollection
const x=document.getElementByClassName("list-item")
VM2032:1 Uncaught TypeError: document.getElementByClassName is not a function
    at <anonymous>:1:18
(anonymous) @ VM2032:1Understand this errorAI
const x=document.getElementByClassName("list-item")
VM2038:1 Uncaught TypeError: document.getElementByClassName is not a function
    at <anonymous>:1:18
(anonymous) @ VM2038:1Understand this errorAI
const y=document.getElementByClassName("list-item")
VM2043:1 Uncaught TypeError: document.getElementByClassName is not a function
    at <anonymous>:1:18
(anonymous) @ VM2043:1Understand this errorAI
const y=document.getElementsByClassName("list-item")
undefined
y
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
y.forEach(function (l){ l.style.backgroundColor="yellow"})
VM2182:1 Uncaught TypeError: y.forEach is not a function
    at <anonymous>:1:3
(anonymous) @ VM2182:1Understand this errorAI
y.forEach(function (l){ l.style.backgroundColor="pink"})
VM2198:1 Uncaught TypeError: y.forEach is not a function
    at <anonymous>:1:3
(anonymous) @ VM2198:1Understand this errorAI
Array.from(y).forEach(function (ele){
    ele.style.backgroundColor="pink"
})
undefined
const p=Array.from(y)
undefined
p
(4) [li.list-item, li.list-item, li.list-item, li.list-item]
p[3].innerText="hello moto"
'hello moto'
p.forEach(function (ele) {
    ele.style.color="white";
    ele.style.padding="10px";
    ele.style.backgroundColor="blue";
})
undefined