//this keyword and arrow function
//---------------------------------
//this -> it refers to the current object 

// const user={
//     name:"sthita",
//     price:199,
//     welcomemsg:function(){
//         //console.log(`${name} , welcome to the website`);//error that name is not defined
//         console.log(`${this.name} , welcome to the website`);
//     }
// }
// user.welcomemsg()//sthita , welcome to the website
// user.name="shubham"
// user.welcomemsg()//shubham , welcome to the website


//---------------------------


// const user={
//     name:"sthita",
//     price:199,
//     welcomemsg:function(){
//         console.log(`${this.name} , welcome to the website`);
//         console.log(this);
//     }
// }
// user.welcomemsg()//sthita , welcome to the website
// //{ name: 'sthita', price: 199, welcomemsg: [Function: welcomemsg] }
// user.name="shubham"//shubham , welcome to the website
// //{ name: 'shubham', price: 199, welcomemsg: [Function: welcomemsg] }
// user.welcomemsg()


//---------------------------


// const user={
//     name:"sthita",
//     price:199,
//     welcomemsg:function(){
        
//     }
// }
// console.log(this);//{}  it prints empty string , but if we check the same thing stament in the inspect section of browser then it will show window{} and more this difference is because earlier we could only test the js files in the inspect section in the browserbut now that ingine is also given to other options where we can check the js code . /// little bit confused aim in this


//----------------------------


// function chai(){
//     let name="sthita"
//     console.log(this);
//     //output of the above statement
//     //--------------------------------
//     //     <ref *1> Object [global] {
//     //     global: [Circular *1],
//     //     queueMicrotask: [Function: queueMicrotask],
//     //     clearImmediate: [Function: clearImmediate],
//     //     setImmediate: [Function: setImmediate] {
//     //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     //     },
//     //     structuredClone: [Function: structuredClone],
//     //     clearInterval: [Function: clearInterval],
//     //     clearTimeout: [Function: clearTimeout],
//     //     setInterval: [Function: setInterval],
//     //     setTimeout: [Function: setTimeout] {
//     //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     //     },
//     //     atob: [Function: atob],
//     //     btoa: [Function: btoa],
//     //     performance: Performance {
//     //       nodeTiming: PerformanceNodeTiming {
//     //         name: 'node',
//     //         entryType: 'node',
//     //         startTime: 0,
//     //         duration: 48.29090005159378,
//     //         nodeStart: 3.4294000267982483,
//     //         v8Start: 8.534400045871735,
//     //         bootstrapComplete: 35.69969999790192,
//     //         environment: 19.113900005817413,
//     //         loopStart: -1,
//     //         loopExit: -1,
//     //         idleTime: 0
//     //       },
//     //       timeOrigin: 1703233558223.49
//     //     },
//     //     fetch: [AsyncFunction: fetch]
//     //   }
//     console.log(this.name);//undefined // we cannot access the variables declared in the function using this keyword rather we can only access them inside the object or in the case of the objects and access the elements of the objects using the this keyword.
// }
// chai()



//----------------------------


// function chai(){
//     let name="sthita"
//     console.log(this.name);//undefined // we cannot access the variables declared in the function using this keyword rather we can only access them inside the object or in the case of the objects and access the elements of the objects using the this keyword.
// }
// chai() 

//-------------------------------------------

//arraow function
//----------------

// const chai=()=>{
//     let name="sthita"
//     console.log(name);
// }
// chai()//sthita


//----------------


// const chai=()=>{
//     let name="sthita"
//     console.log(this);//{}
//     console.log(this.name);//undefined
// }
// chai()//sthita


//----------------


// const addtwo=(n1,n2)=>{
//     return n1+n2;
// }
// console.log(addtwo(10,20));//30


//----------------

// // next is the implicit return method where we dont need to give the curly brackets in the function and we need to bring the return statemnet in the same line and also we need to remove the return keyword 
// // const addtwo= (n1,n2) => return n1+n2//error 
// const addtwo=(n1,n2)=>n1+n2
// console.log(addtwo(10,20))//30


//---------------------


// const addtwo=(n1,n2)=>(n1+n2)
// console.log(addtwo(10,20))//30


//----------------------------


// const addtwo=(n1,n2)=>(username:"sthita") //in this way objects cannot be returned so in order to return the objects we need to use the curly braces{}
// console.log(addtwo(10,20));


//------------------------------------


// const addtwo=(n1,n2)=>({
//     username:"sthita"
// }) // in order to return the objects we need to use the curly braces{}
// console.log(addtwo(10,20));//{ username: 'sthita' }

//-----------------------------


// const yt=(n1,n2,n3)=>({
//     name:"sthita",
//     age:n1+n2+n3
// })
// console.log(yt(1,2,3));




