//control flow in js
//-------------------- 

//if()
//-----------
// if (condition) {
    
// }


//if-else
//-----------
// if (condition) {
    
// } else {
    
// }


//----------------------

// const x=2
// if (x==2) {
//     const power="fly"
//     console.log(`user power is : ${power}`);//user power is : fly
// }
// //console.log(`user power is : ${power}`); //error -> power is not defined 


//-------------------------------


// implicit if statement
//--------------------
// if(2==2) console.log("test1");//test1


// //-------------------------------


// implicit if statement with multiple lines but this is not a good pracrice
//--------------------
// if(2==2) console.log("test1"),//test2
// console.log("test2"),//test2
// console.log("test3");//test3


//if-else ladder
//-------------------
// if (condition) {
    
// } else(condition) {
    
// }
// else(condition){

// }
// else{

// }


// const x=1000
// if (x==200) {
//     console.log("200");
// } else if(x==400) {
//     console.log("400");
// }
// else if(x==700){
//     console.log("700");
// }
// else{
//     console.log("1000");//1000
// }


//-------------

// && and || operator
//-----------------------
// const x=true
// const y=true
// if (x && y) {
//     console.log("both are true");
// }  
// if(x || y){
//     console.log("both are not true");
// }


//switch case
//-------------
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


//----------------------------------


// const month=3
// switch (month) {
//         case 1:
//             console.log("jan");
//         break;
//         case 2:
//             console.log("feb");
//         break;
//         case 3:
//             console.log("march");//march
//         break;
//         case 4:
//             console.log("april");
//         break; // note to duplicate anything use shift+alt+down arraw
//         case 5:
//             console.log("may");
//         break;
//         default:
//             console.log("invalid month");
//         break;
// }


//what happens if we dont write break -> then if the case matches then all the cases bellow it also executes 
// const month=3
// switch (month) {
//         case 1:
//             console.log("jan");
//         break;
//         case 2:
//             console.log("feb");
//         break;
//         case 3:
//             console.log("march");//march
//         // here i have not used the break;
//         case 4:
//             console.log("april");
//         // break; 
//         case 5:
//             console.log("may");
//         // break;
//         default:
//             console.log("invalid month");
//         break;
// }
// //output :
// // march
// // april
// // may
// // invalid month

//------------------------


// const month=3
// switch (month) {
//         case 1:
//             console.log("jan");
//         break;
//         case 2:
//             console.log("feb");
//         break;
//         case 3:
//             console.log("march");
//         //break;
//         case 4:
//             console.log("april");
//         break; 
//         case 5:
//             console.log("may");
//         break;
//         default:
//             console.log("invalid month");
//         break;
// }
// //output :
// // march
// // april

//------------------------



// const month="feb"
// switch (month) {
//         case "jan":
//             console.log("jan");
//         break;
//         case "feb":
//             console.log("feb");
//         break;
//         case "march":
//             console.log("march");
//         break;
//         case "april":
//             console.log("april");
//         break; 
//         case "may":
//             console.log("may");
//         break;
//         default:
//             console.log("invalid month");
//         break;
// }
// //feb


//truthy and falsy values
//-----------------------------

// const x="hello"
// if (x) {
//     console.log("it is true");
// } else {
//     console.log("it is false");
// }
// //output :
// //it is true



//falsy values
//-----------------
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN


// truthy values
// -----------------
// true
// "0"
// 'false'
// " "
// []
// {}
// function (){}

//how to check wether a array is empty or not
//----------------------------
// const arr=[]
// if (arr.length===0) {
//     console.log("array is empty");//array is empty
// }


//how to check that an object is empty
//-------------------------------------
// const x={
//   //x is an empty object
// }
// if (Object.keys(x).length===0) { // Object.keys(x) -> returns an array of keys
//     console.log("empty object it is");//empty object it is
// }



//Nullish Coalescing Operator (??): null and undefined
//-------------------------------------------------------
// this operator is used to assign the first proper value to the variable // it is a new operator
// let x;

// x=5??10 
// console.log(x);//5

// x=null??10
// console.log(x);//10

// x=undefined??8
// console.log(x);//8

// x=null??undefined
// console.log(x);//undefined

// x=undefined??null
// console.log(x);//null

// x=null??undefined??40
// console.log(x);//40

// x=undefined??67??56??null
// console.log(x);//67



//ternary operator
//-------------------
//condition ? true : false

const x=60
x<=50? console.log("less than 50") : console.log("more than 50") //more than 50
