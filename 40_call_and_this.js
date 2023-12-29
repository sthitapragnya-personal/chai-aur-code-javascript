// refer to 40a.png to understand the problem of this 
//--------------------------------------
//practical exmple
//----------------
// function setusername(username){
//     //complex db calls
//     this.username=username
//     console.log("setusername is called");
// }
// function createuser(username,email,password){
//     // this.username=username,
//     setusername(username) 
//     this.email=email,
//     this.password=password
// }
// const x=new createuser("sthita","s@gmail.com","kgf123")
// console.log(x);// createuser { email: 's@gmail.com', password: 'kgf123' } //-> but here the username is not visible only the email and password are present 
// this is happenning because when the setusername is called from createuser it creates its own execution context in the global execution context and when its work is over , the 'this' and all the properties are also removed from the global execution context so we dont get anyhting that is created in the setusername
// to solve this problem we use .call() method

function setusername(username){
    //complex db calls
    this.username=username
    console.log("setusername is called");
}
function createuser(username,email,password){
    // this.username=username,
    setusername.call(this,username) // here we are passing the current context this to the other function so that when that other function is removed from the GEC its properties are retained back to the function/object from where it is called
    this.email=email,
    this.password=password
}
const x=new createuser("sthita","s@gmail.com","kgf123")
console.log(x);
//output:
// createuser {
//     username: 'sthita',
//     email: 's@gmail.com',
//     password: 'kgf123'
//   }