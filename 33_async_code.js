// async code in js
//-------------------
// before moving to the async code let us first have some knowledge on what is execution context


// sayhello(); //hello
// function sayhello(){
//     console.log("hello");
// }
// //sayhello(); //hello

// if (2===2) {
//     console.log("this is true");//this is true
// }
// if (2==="2") {
//     console.log("this is true");
// }



//----------------------------------------


// browser->inspect->console
//--------------------------
// var myname="sthita";
// undefined
// myname
// 'sthita'
// if (myname===myname) {
//     console.log("true statement");
// }
// VM177:2 true statement
// undefined
// if (myname===window.myname) {
//     console.log("true statement");
// }
// VM194:2 true statement
// undefined




// var myname="sthita"
// if (myname===myname) {
//     console.log("this is true");
// }

// if (myname===window.myname) { //error -> window is not defined 
//     console.log("this is true");
// }


// means the functions which are written are always saved in the global context and here in this case it is node and in case of browser->inspect->console the global context is window.


// now we will jump to async code
//-------------------------------
//refer to 31_async_code.png for complete understading of the flow