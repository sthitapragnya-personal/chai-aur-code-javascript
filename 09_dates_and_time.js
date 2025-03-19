// //dates and time in js
// //---------------------
// // JavaScript Date objects represent a single moment in time in a platform-independent format.

// // Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970

let date=new Date(); 
console.log(date);
console.log(date.toString()); 
console.log(date.toDateString()); 


// let mydate= new Date()
// console.log(typeof mydate)//object
// console.log(mydate); //2023-12-10T13:06:10.361Z //this is very tuff to read 
// console.log(mydate.toString()); // Sun Dec 10 2023 18:41:10 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString());//Sun Dec 10 2023
// console.log(mydate.toLocaleDateString());//10/12/2023
// console.log(mydate.toLocaleString());//10/12/2023, 6:42:17 pm
// console.log(mydate.toLocaleTimeString());//6:42:17 pm
// console.log(mydate.toTimeString());//18:42:17 GMT+0530 (India Standard Time)


// let createdate= new Date(2023, 0,20)
// console.log(createdate.toDateString());//Fri Jan 20 2023 
// //note: 2023 is year, 20 is date and 0 means january here month starts from 0 and ends with 11 here friday is given by js4 
// createdate=new Date(2023)
// console.log(createdate.toDateString());//Thu Jan 01 1970
// createdate=new Date(2023,11)
// console.log(createdate.toDateString());//Fri Dec 01 2023
// //means we atleast require yaer and month in order to get the date
// createdate=new Date(2023,02,25,5,3)
// console.log(createdate.toLocaleString());//25/3/2023, 5:03:00 am
// createdate=new Date("2023-01-14") //yy/mm/dd
// console.log(createdate.toLocaleString());//14/1/2023, 5:30:00 am
// createdate=new Date("01-14-2025") //mm/dd/yy
// console.log(createdate.toLocaleString());//14/1/2025, 12:00:00 am

// //time stamps
// //------------
// //used in polls and quizes
// let x=Date.now()
// console.log(x);//1702216257713 time in milliseconds from 1970 to now
// createdate=new Date()
// console.log(createdate.getTime());//1702216314157
// console.log(Math.floor(Date.now()/1000));//1702216790 // the formula to get time in seconds

// let y=new Date()
// console.log(y);//2023-12-10T14:01:13.012Z
// console.log(y.toString());//Sun Dec 10 2023 19:34:08 GMT+0530 (India Standard Time)
// console.log(y.getDate());//10
// console.log(y.getDay());//0
// console.log(y.getFullYear());//2023
// console.log(y.getHours());//19
// console.log(y.getMinutes());//08
// console.log(y.getMonth());//11

// // note: 
// //----------------
// let p=new Date()
// console.log(`${p.getDate()} and the time is ${p.getTime()} `); //10 and the time is 1702217273363


// //imp method
// //------------
// let z=new Date()
// z.toLocaleString('default',{
//     //note : to get the suggestions place at the right place the cursor and then use ctrl+space key
//     weekday:"short",
//     year:"numeric"
// })