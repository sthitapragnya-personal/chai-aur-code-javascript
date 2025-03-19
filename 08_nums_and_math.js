// //numbers and math in js
// //---------------------------
// // like to define the score in a game or to define a account balance
// const score =400
// console.log(score);//400
// console.log(typeof score);//number


// const balance1 = new Number(600)
// console.log(balance1);//[Number: 600]
// console.log(balance1.valueOf());//600
// console.log(typeof balance1);//object

// const balance = new Number("600") // lets see what if we put it inside " "
// console.log(balance);//[Number: 600]
// console.log(balance.valueOf());//600
// console.log(typeof balance);//object


// //how to convert a number to string type
// //----------------------------------------
// const x=500
// console.log(x.toString());//500
// console.log(balance.toString().length);//3


// // toFixed
// // ----------
// console.log(9876.5432.toFixed())//9877 //used to remove the decimal part


// //toPrecision
// //----------
// console.log(23.986534.toPrecision(1));//2e+1
// console.log(23.986534.toPrecision(2));//24
// console.log(23.986534.toPrecision(3));//24.0
// console.log(23.986534.toPrecision(4));//23.99

// // toLocaleString
// // -------------------
// // comas are given according to a country's number system by default it is usa number system
// const hundreds=10000000;
// console.log(hundreds.toLocaleString());//1,00,00,000
// console.log(hundreds.toLocaleString('en-IN'));//1,00,00,000

// console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
// console.log(Number.MAX_VALUE);//1.7976931348623157e+308
// console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991
// console.log(Number.MIN_VALUE);//5e-324




// //Maths library
// //-----------------
// console.log(Math);// Object [Math] {}   //print it in console to see all the things present in Maths library

// console.log(Math.abs(-4));//4
// console.log(Math.abs(7));//7
// console.log(Math.round(4.6));//5
// console.log(Math.round(3.3));//3
// console.log(Math.ceil(4.2));//5 //gives the ceiling value
// console.log(Math.ceil(4.6));//5 //gives the ceiling value
// console.log(Math.ceil(-4.2));//-4 //gives the ceiling value
// console.log(Math.floor(4.2));//4 //gives the floor value
// console.log(Math.floor(4.6));//4 //gives the floor value
// console.log(Math.floor(-4.2));//-5 //gives the floor value
// console.log(Math.max(1,2,3,4,5));//5 //gives the max value
// console.log(Math.min(1,2,3,4,5));//1 //gives the min value
// console.log(Math.pow(2,3));//8 //gives power
// console.log(Math.random());//0.945890458974231
// console.log(Math.random()*10);//8.466716889919736
// console.log(Math.random()*10);//5.5757075271797945
// console.log(Math.random()*10);//0.757075271797945
// console.log(Math.random()*10+1);//6.558644101066888
// console.log(Math.floor(Math.random()*10)+1);//7
// // trick
// // -------
// const min=10;
// const max=20;
// //means i want values between 10 and 20
// console.log(Math.floor(Math.random()*(max-min+1))+min);//10
// console.log(Math.floor(Math.random()*(max-min+1))+min);//13
// console.log(Math.floor(Math.random()*(max-min+1))+min);//19



