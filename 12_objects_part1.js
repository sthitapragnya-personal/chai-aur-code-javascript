// //objects 
// //-------------
// //singleton -> object.create()
// //object literals  -> const js={};


// //object literals
// //---------------
// const js={        // here the information is stoed in the form of key and value pair
//     name:"sthita",   // here internally the system takes it as "name":"sthita"
//     age:21,
//     city:"bbsr",
//     country:"India",
//     isloggedin:false,
//     subjects:["mon","tue","wed"]
// }


// let obj={
//     name:"abc",
//     age:19,
//     subjects:['eng','math','odia']
// }
// console.log(obj);// { name: 'abc', age: 19, subjects: [ 'eng', 'math', 'odia' ] }
// console.log(obj.age);//19
// console.log(obj["age"]);//19



// console.log(js.name);//sthita
// // console.log(js[name]); //error
// console.log(js["name"]);//sthita

//also we can aaccess the elements of the objects using sysmbol
//--------------------------------------------------------------
// const mysum=Symbol("key1")  //declaring a Symbol
// const x=Symbol("key2")
// const js={
//     name:"sthita",
//     age:21,
//     mysum:"mykey1",
//     city:"bbsr",
//     country:"India",
//     isloggedin:false,
//     subjects:["mon","tue","wed"]
// }
// console.log(typeof js.mysum); //string   -> but we wanted symbol so we are going to look into it

//-------------------------------

// const mysum=Symbol("key1") //declaring a Symbol
// const x=Symbol("key2")
// const js={
//     name:"sthita",
//     age:21,
//     [mysum]:"mykey1",
//     city:"bbsr",
//     country:"India",
//     isloggedin:false,
//     subjects:["mon","tue","wed"],
//     [x]:"chi chi chi re nani chi"
// }
// console.log(typeof js.mysum);//undefined
// console.log(js[mysum]); //mykey1
// console.log(js[x]);//chi chi chi re nani chi
// console.log(js.mysum); //undefined



//how to make changes in the key value pairs in the object
//----------------------------------------------------
// const js={
//     name:"sthita",
//     age:21,
//     city:"bbsr",
//     country:"India",
//     isloggedin:false,
//     subjects:["mon","tue","wed"]
// }
// console.log(js.age);//21
// js.age=98
// console.log(js.age);//98
// js.city="hiroshima";
// console.log(js.city);//hiroshima



//but lets say that i want my object in such a way that no changes can be done to it  -> so we use the Object.freeze(object_name)  method
//-----------------------------------------------------------
// const js={
//     name:"sthita",
//     age:21,
//     city:"bbsr",
//     country:"India",
//     isloggedin:false,
//     subjects:["mon","tue","wed"]
// }

// Object.freeze(js)
// js.name="shubham"
// js.age=77
// console.log(js); 
// {   name: 'sthita',  
//     age: 21,
//     city: 'bbsr',    
//     country: 'India',
//     isloggedin: false,
//     subjects: [ 'mon', 'tue', 'wed' ]
//   }



//objects with functions
//---------------------------
// const js={
//     name:"sthita",
//     age:21,
//     city:"bbsr",
//     country:"India",
//     isloggedin:false,
//     subjects:["mon","tue","wed"]
// }
// js.greeting = function(){
//     console.log("hello js user");
// }
// console.log(js.greeting);//[Function (anonymous)] means here it only returns the address of the function
// console.log(js.greeting());//hello js user
// //undefined


// js.greetingtwo = function(){
//     console.log(`hello js user ${js.name} and age is ${this.age}`);
// }
// console.log(js.greetingtwo());//hello js user sthita and age is 21
// //undefined

// //note : this refres to the current object 







