// global and local scope
// ------------------------------

// let a=10
// const b=20
// var c=30
// console.log(a);//10
// console.log(b);//20
// console.log(c);//30

// {}  -> this curly braces is called as the scope like scope of a function or scope of a ifelse or scope of a loop or scope of a object etc

//---------------------------


// if (true) {
//     let a=10
//     const b=20
//     var c=30
// }
// //console.log(a);// a is not defined error
// //console.log(b);// b is not defined error
// console.log(c);//30



//---------------------------

// var c=300   // global scope
// if (true) {
//     let a=10
//     const b=20
//     var c=30  //local scope
// }
//console.log(a);// a is not defined error
//console.log(b);// b is not defined error
//console.log(c);//30  // here it is problem as the c is defined in the global scope but it is getting the value of the c that is present in the local scope and it is the problem with var 

//but in case of let and const the variables declared in the global scope can be accesible in the local scope but the variables declared in the local scope cannot be accesible in the global scope


//---------------------------------


// var c=300   // global scope
// if (true) {
//     let a=10
//     const b=20
//     c=30  //local scope
// }
//console.log(a);// a is not defined error
//console.log(b);// b is not defined error
//console.log(c);//30 


//----------------------------

let a=200  // global scope
if (true) {
    let a=10
    const b=20
    var c=30  //local scope
    console.log("inner a :"+a);//inner a :10
}
console.log(a);//200
