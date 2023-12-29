// oops in js
//------------------


// Yes, JavaScript has introduced support for classes starting with ECMAScript 2015 (ES6). Prior to ES6, JavaScript used prototype-based inheritance, but the introduction of classes provides a more familiar syntax for developers coming from other object-oriented programming languages.

// Here's an example of a simple class declaration in JavaScript:
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// // Creating an instance of the class
// const person1 = new Person('John', 25);

// // Calling a method of the class
// person1.sayHello();
// In this example, Person is a class with a constructor and a method (sayHello). You can create instances of the class using the new keyword.

// It's worth noting that behind the scenes, JavaScript's class syntax is still based on prototypes. Classes provide syntactic sugar over the existing prototype-based inheritance system, making it more convenient to work with for developers familiar with classical object-oriented programming languages.



//oops
//-----------------------------------


//object
//--------
// collection of classes and methods


// why use oops


//parts of oops
//----------------
// object literals
// constructor function
// prototypes
// classes
// instances (new,this)


// 4 pillars of oops  -> read this of your own
//-----------------------------------
// Abstraction
// ebcapsulation
// inheritance
// polymorphism


// //object literal
// //--------------
// // making literally an Object
// const user={}

// const user1={
//     username:"sthita",
//     age:21,
//     signedin:true,
//     getUserDetails:function(){
//         console.log("get user detailsfrom database ");
//         console.log(`username : ${this.username}`);//username : sthita
//         console.log(this);
//         //output:
//         // {
//         //     username: 'sthita',
//         //     age: 21,
//         //     signedin: true,
//         //     getUserDetails: [Function: getUserDetails]
//         //   }
//     }
// }
// console.log(user1.username);//sthita
// console.log(user1.getUserDetails());
// // get user detailsfrom database 
// // undefined
// console.log(this);//{}

// // note : but if we do console.log(this); in the console of inspect of the browser -> then the output we get is the window object  -> refer to 38a.png
// // but in the case of vscode when we are doing the things in the node environment it is showing empty object as the output



// now what is the need of the 'new'  key word
//-------------------------------------------------
// const promise=new Promise()
// const date= new Date()
// actually this new keyword in the constructor function means we can make multiple instances of a single object

function student(username, logincount, isloggedin){
    // myusername = username  // here we have no issue 
    // username=username // but here we have confusion so :
    this.username=username 
    this.logincount=logincount
    this.isloggedin=isloggedin
    // return this  // note : weather we write the 'return this' or not it will work whenever we use the 'new' keyword but yes if we are not using the new keyword then we have to give the 'return this' statement inside the original
}
// const student1=student("kuna",10,true)
// console.log(student1);
// console.log(student1.username);//kuna
// console.log(student1.logincount);//10
// console.log(student1.isloggedin);//true

// const student2=student("muna",20,false)
// console.log(student2);
// console.log(student2.username);//muna
// console.log(student2.logincount);//20
// console.log(student2.isloggedin);//false
// console.log(student1);
// console.log(student1.username);//muna
// console.log(student1.logincount);//20
// console.log(student1.isloggedin);//false

//note : what we found is that the data of the second instance is overridding the data of the first instace so it here comes the need of the new keyword -> that is new keyword when used everytimes a new instance if the original and any change in that instance keeps limited to that only and the original or the other copies are not affected with it

const x=new student("aa",5,true)
const y=new student("bb",7,false)
console.log(x.username);//aa
console.log(x.logincount);//5
console.log(x.isloggedin);//true
console.log(y.username);//bb
console.log(y.logincount);//7
console.log(y.isloggedin);//false


//what are the steps of the basic working mechanism of the creation of the objects and the assigning of the values to it that runs internally
//---------------------------------------------------------------
//1. first by using we the new keyword we create a new instance/new object
//2. then the constructor function is called due to the use of new keyword and at that time all the arguments are packed into it 
//3. then the arguments that are send are injected into the this.properties means the instance's properties
//4. and at last we get that object with all the things that it required


// note : we can not only keep variables in the instances rather we can also use functions or objects inside a object
function employee(username,logincount,isloggedin){
    this.username=username 
    this.logincount=logincount
    this.isloggedin=isloggedin
    this.greeting=()=>{
        console.log("welcome "+this.username);
    }
    this.gift=function(){
        console.log("gift is great "+this.username);
    }
    return this
}
const e1=new employee("ajay",2,true)
console.log(e1.constructor);//[Function: employee]
e1.greeting()//welcome ajay
e1.gift()//gift is great ajay


//instaceOf method
//---------------------
// homework -> learn it from mdnjavascript
