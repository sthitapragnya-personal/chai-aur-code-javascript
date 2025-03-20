//imediately invloked function expression (IIFE)
//-----------------------------------------------
// sometimes what we want is that as soon as our application starts the db should get connected to it and start working and in some case what we want is that the local scope variable should not get confused or polluted with the global scope variable so in order to solve such things js has iife


// (function chai(){
//     console.log("db connected one");
// })() //db connected one

//--------------------------


// (function chai(){
//     console.log("db connected one");
// })() //db connected one

// (function coffee(){ //error  
//     console.log("db connected two");
// })()

// // note: this error is comming in the above case because when a iifa starts it do not knows when to stop so in order to stop that function's execution we need to use the semicolon afetr the iifa



//--------------------------


// (function chai(){
//     console.log("db connected one");
// })(); //db connected one

// (function coffee(){   
//     console.log("db connected two");
// })()//db connected two


//--------------------
// //we can also use arrow function in iifa

// (function chai(){
//     console.log("db connected one");
// })(); //db connected one

// (()=>{   
//     console.log("db connected two");
// })()//db connected two



//-----------------------------
// //what is named iifa and what is simple or unamed iifa

// (function chai(){ //named iifa
//     console.log("db connected one");
// })(); //db connected one

// (()=>{   //unamed iifa
//     console.log("db connected two");
// })()//db connected two



//--------------------
//what is parameterised iifa and non parameterised iifa

(function chai(){ //non parameterised iifa
    console.log("db connected one");
})(); //db connected one

((name)=>{     //parameterised iifa
    console.log("the name is "+name);
})("sthita")//the name is sthita


