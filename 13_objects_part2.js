//objects part2
//----------------
const x=new Object(); // it is a singleton object
console.log(x); //{}

const y={} //it is a non-singleton object
console.log(y);//{}

const user={};
user.id="123abc"
user.name="sthita"
user.city="bbsr"
console.log(user.name+" "+user.id+" "+user.city);//sthita 123abc bbsr

const pp={
    email:"sthita@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sthitapragnya",
            lastname:"sahoo"
        }
    }
}
console.log(pp.fullname.userfullname.firstname);//sthitapragnya



//combinig of objects
//---------------------
const obj1={
    1:"a",2:"b",3:"c"
}
const obj2={
    4:"d",5:"e"
}
// now lets say i want to combine obj1 and obj2
const obj3={obj1,obj2}
console.log(obj3);//{
//     obj1: { '1': 'a', '2': 'b', '3': 'c' },
//     obj2: { '4': 'd', '5': 'e' }
//   }   //but here all the key palue pairs are not directly inside a single object rather here a single object has 2 objects

const obj4=Object.assign({},obj1,obj2) //the Object.assign() functions helps to combine multiple objects and bring them into a single 1-d object   and the syntax is Object.assign({},obj1,obj2,obj3,obj4,...)  {} -> is target and onj1,obj2,obj3,obj4,... are the source
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }



//spread operator in Object
//-------------------------
const obj5={...obj1,...obj2}
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }


//array of objects
//--------------
const arr=[
    {
        name:"a",
        value:1
    },
    {
        name:"b",
        value:2
    },
    {
        name:"c",
        value:3
    },
    {
        name:"d",
        value:4
    }
]

console.log(arr[1].name);//b

console.log(obj1);
console.log(obj1.length);
console.log(Object.keys(obj1));//[ '1', '2', '3' ]      // coverts all the keys into a array
console.log(Object.values(obj1));//[ 'a', 'b', 'c' ]    //converts all the values into a array
console.log(Object.entries(obj1));//[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ] ]     // convert all the key-value pairs into 2-d array and in the 2-d array it has 1-d arrays and in 1-d array the first element is key and the second element is the value


console.log(obj1.hasOwnProperty(1));//true
console.log(obj1.hasOwnProperty("1"));//true
console.log(obj1.hasOwnProperty("name"));//false


