"use strict" // if we write this then the entire code is treated as the new version of the js by the engine altough now it is not required to write as it comes in build but still it is a good practice to write this

//alert(2+3) 
// D:\sthita-github\chai-aur-code-javascript\02_datatype.js:3
// alert(2+3);
// ^

// ReferenceError: alert is not defined
//     at Object.<anonymous> (D:\sthita-github\chai-aur-code-javascript\02_datatype.js:3:1)
//     at Module._compile (node:internal/modules/cjs/loader:1254:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32)
//     at Module._load (node:internal/modules/cjs/loader:958:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v18.15.0

// therefore we can only use this alert() using the browser and not using Node.js


// console.log(3+3) console.log("sthita"); // error

// console.log(3+3); console.log("sthita"); // this is not a good practice the code redeability is very poor
// 6
// sthita


// console.log(3
//     +3); //6 // this is also not a good practice as the code readebility is very poor


// lets see what is a good practice i.e, to keep both in separate lines so that the code readability is high
// console.log(3+3)//6
// console.log("sthita")//sthita 

// there are basically 2 imp documnets that are the tc39 and the mdn which we will be following while doing thhis cource


//lets jump to the datatypes
//----------------------------
// let name= "sthita"
// let age = 21
// let isLoggedIn= true
//......


//number -> 2 to the power 53 
//bigint
//string -> '' or ""
//boolean -> true or false
//null -> it is actually a standalone value //let x=null;
//undefined -> when variable has no value // let x;
//symbol -> symbol


//object

console.log(typeof(23));//number
console.log(typeof("sthita"));//string
console.log(typeof(null));//object //interview q
console.log(typeof(undefined));//undefined //interview q