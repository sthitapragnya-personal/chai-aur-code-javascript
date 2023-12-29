// magic of prototype -> imp topic from interview pov
//-----------------------------------------------------
// bydeafult js is a protypic lang-> means if it tries to find something first in child then in parent then in grandparent as goes on , that is every hting that is present in the js is mostly object and 
// refer to 39a.png  , wether function is a object or not that we are going to see in the bellow example


function multiplyby5(num){
    return num*5
}
console.log(multiplyby5(5));//25
console.log(multiplyby5.power);//undefined
console.log(multiplyby5.prototype);//{}
multiplyby5.power=7
console.log(multiplyby5.power);//7

//note : function is a function but it can be technically a object and we can use it as a object too


//-----------------------------
function createUser(username,score){
    this.username=username
    this.score=score
}

// note : we know that function is a object too so can we inject my own fubctionalities/functions in it ?? -> yes we can do that
//bellow we are going to see function injection
createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printme=function(){
    console.log(`the score of ${this.username} is ${this.score}`);
}
const chai1=createUser("chai",25)
const tea1=createUser("tea",35)

// chai1.printme()//error -> TypeError: Cannot read properties of undefined (reading 'printme')
// tea1.printme()//error -> TypeError: Cannot read properties of undefined (reading 'printme')  
// // we are seeig this above error because we have injected few functions after the creation of the original function/object , and that we have to metion while creating an instance of the original ofject but in the above case we haven't done that and it will be done only by using the 'new' keyword 
const chai2=new createUser("chai",25)
const tea2=new createUser("tea",35)
chai2.printme()//the score of chai is 25
tea2.printme()//the score of tea is 35
// note : in the above 2 lines it is showing "the score of undefined is undefined" as the output when we are using fat arrow function to define the function at the time of external function injection to the function/object


//note:
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/




// next we will understand the prototype in more depth
//-------------------------------------------------------
// let myname="sthita"
// console.log(myname.length);//6
// myname="sthita          "
// console.log(myname.length);//16
// so i want to finc out the true length of the string without using the trim function
// console.log(myname.trueLength());  // -> but no     as such method exists in string -> so what i want is to create such a method and then inject it into the prototype of the String so that we can use it   -> and to do this task we need to understand a lot of concepts that are shown bellow and once we learn and understand them we will do this task at the last.


let myheroes=["thor","spiderman","ben10"] //array
let heropower={  //object
    thor:"hammer",
    spiderman:"web",
    ben10:"watch",
    getspiderpower:function(){
        console.log(`spider man power is ${this.power}`);
    }
}

// now what we will do is that we will inject a function called as sthita() into the Object prototype and we already know that if a function is present in the object then the strinf arrays and the functions can also use it , lets see
Object.prototype.sthita=function(){
    console.log(`the name is sthita`);
}
let str1="this is a demo string"
myheroes.sthita()//the name is sthita
str1.sthita()//the name is sthita
// from the above we can colclude that if a function is present in the object then the strinf arrays and the functions can also use it


// now lets check if we declare a function in array can string or function or the object use them , lets see:
Array.prototype.shubham=function(){
    console.log("shubham says hello");
}
// heropower.shubham() // error -> means if function if declared in array.prototype then the object cannot use it
// str1.shubham() // error -> means if function if declared in array.prototype then the string or functions cannot use it
myheroes.shubham() ///shubham says hello -> this is possible as the shubham() function is declared in the array.prototype



//-------------------------------


//inheritance
//---------------
const user={
    username:"satyam",
    email:"s@gmail.com"
}
const teacher = {
    makevideo:true
}
const teachingSupport={
    isAvailable:false
}
const TAsupport={
    makeAssignment:"javascript assignment",
    fullTime:true,
    __proto__:teachingSupport    //here we are linking 2 objects
}
// teacher.__proto__=user

// //mordern systax of .__proto__
// Object.setPrototypeOf(teachingSupport,TAsupport) //error -> TypeError: Cyclic __proto__ value
// // teachingsupport can access the properties of the TAsupport


//----------------------------
//now we will do that string task
//------------------------
let myname="sthita"
console.log(myname.length);//6
myname="       sthita          "
console.log(myname.length);//23
String.prototype.trueLength=function(){
    //console.log(this);//[String: '       sthita          ']
    console.log(`the true Length is : ${this.trim().length}`);
}
myname.trueLength();//the true Length is : 6
"welcome to my code world".trueLength()//the true Length is : 24