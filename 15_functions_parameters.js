//functions and parameters in js
//-------------------------------
//what is a function -> if there is a set of code that i want touse many times so instead of writinf the same set of code multiple times we can just put it in a function and then we can use it multiple times

// function myname(){ //function declaration  
//     console.log("My name is sthita");
// }
// //here myname is the function name or the function refernce that stores the address of the function
// myname() //function calling/execution , output->My name is sthita

// //addition of two numbers
// function sum(n1,n2){ //n1 and n2 are parameters
//     console.log(n1+n2);
// }
// sum(5,7)// 12  //5 and 7 are called as the arguments
// sum(3,"4")//34
// sum(3,"a")//3a
// const x=sum(2,3)
// console.log(x);//undefined  //as there is no return value

//-------------------------------

// function sum(n1,n2){ //n1 and n2 are parameters
//     const result=n1+n2
//     return result
//     console.log("hello");//unreachable statement or code
// }
// const x=sum(2,3)
// console.log(x);//5


//-------------------------------


// function sum(n1,n2){ //n1 and n2 are parameters
//     return n1+n2
// }
// const x=sum(2,3)
// console.log(x);//5

//------------------------


// function loginusermsg(username){
//     return `${username} just logged in`
// }
// loginusermsg("sthita") //no out put as the function is returning a string and it is not being stored any where therefore no output


//------------------------


// function loginusermsg(username){
//     return `${username} just logged in`
// }
// console.log(loginusermsg("sthita"))//sthita just logged in

//----------------------------


// function loginusermsg(username){
//     return `${username} just logged in`
// }
// console.log(loginusermsg())//undefined just logged in


//----------------------------


// function loginusermsg(username){
//     if (username === undefined) {
//         console.log("please enter a valid username");
//     }
//        return `${username} just logged in`
// }
// console.log(loginusermsg())
// please enter a valid username
// undefined just logged in


//----------------------------


// function loginusermsg(username){
//     if (!username) {  // if username is not true that is false
//         console.log("please enter a valid username");
//     }
//        return `${username} just logged in`
// }
// console.log(loginusermsg())
// // please enter a valid username
// // undefined just logged in



// function check_username(name){
//     if(name===undefined || name===null){
//         return `please enter a valid user name`
//     }
//     return `${name} just logged in here`
// }
// console.log(check_username());  // please enter a valid username
// console.log(check_username(null));  // please enter a valid username
// console.log(check_username(1));  // 1 just logged in here
// console.log(check_username("sthita"));  // sthita just logged in here




// function check(name="shubham"){  // here we have given default value to the parameter
//     if(name===undefined || name===null){
//         return `please enter a valid user name`
//     }
//     return `${name} just logged in here`
// }
// // note : if we dont pass any valid name then it will consider name as shubham but if we pass any valid name then that argument will override the default value of name
// console.log(check());//shubham just logged in here
// console.log(check(null));//please enter a valid user name
// console.log(check("satyam"));//satyam just logged in here


