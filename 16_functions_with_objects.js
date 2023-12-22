//functions with objects
//----------------------
 

// function x(num){
//     return num
// }
// console.log(x(10));//10

//----------------------
 

// function x(num){
//     return num
// }
// console.log(x(10,20,30,40));//10


//----------------------
 

// function x(...num){  //... is called here as the rest operator //this takes all the values and then converts them into a array in the same order as that of the input
//     return num
// }
// console.log(x(10,20,30,40));//[ 10, 20, 30, 40 ]


//----------------------
 

// function x(num1,num2,...num){
//     console.log(num1);//10
//     console.log(num2);//20
//     console.log(num);//[ 30, 40, 50 ]
//     return num
// }
// console.log(x(10,20,30,40,50));//[ 30, 40, 50 ]

//------------------------------------

// const user={
//     name:"sthita",
//     prices:199
// }

// function handleobject(anyobject){
//     console.log(`user name is ${anyobject.name} and price is ${anyobject.price}`); // it should be prices not price
// }
// handleobject(user)//user name is sthita and price is undefined


// //------------------------------------

// const user={
//     name:"sthita",
//     prices:199
// }

// function handleobject(anyobject){
//     console.log(`user name is ${anyobject.name} and price is ${anyobject.prices}`);
// }
// handleobject(user)//user name is sthita and price is 199


//------------------------------------

// const user={
//     name:"sthita",
//     prices:199
// }

// function handleobject(anyobject){
//     console.log(`user name is ${anyobject.name} and price is ${anyobject.prices}`);
// }
// handleobject({  // we can even pass the object directly at the time of calling and creating it in there only
//     name:"shubham",
//     prices:399
// })//user name is shubham and price is 399


//-------------------------


const newarray=[1,2,3,4,5,6]
function getvalue(getarray){
    return getarray[1]
}
console.log(getvalue(newarray));//2
console.log(getvalue([10,20,30,40,50,60]));//20