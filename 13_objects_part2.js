//objects part2
//----------------
const x=new Object(); // it is a singleton object
console.log(x); //{}  -> it is a empty object

const y={} //it is a non-singleton object
console.log(y);//{}  -> it is a empty object

//--------------------------------

const user={};
user.id="123abc"
user.name="sthita"
user.city="bbsr"
console.log(user.name+" "+user.id+" "+user.city);//sthita 123abc bbsr
console.log(`${user.name}+" "+${user.id}+" "+${user.city}`);//sthita+ 123abc+ b


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
console.log(pp.fullname.userfullname["lastname"]);//sahoo
// //console.log(pp.fullname.userfullname[lastname]);//error
console.log(pp.fullname["userfullname"]["firstname"]);//sthitapragnya    


//---------------------------------


const genda={
    1:"one",
    2:"two"
}
const senda={
    3:"three",
    4:"four"
}
const penda={genda,senda}
// //console.log(penda.genda.1);//error
// // console.log(penda.genda."1");//error
console.log(penda.genda["1"]);//one
console.log(penda.genda[1]);//one




//-----------------------------------


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

const obj4=Object.assign({},obj1,obj2) //the Object.assign() functions helps to combine multiple objects and bring them into a single 1-d object   and the syntax is Object.assign({},obj1,obj2,obj3,obj4,...)  {} -> is target and obj1,obj2,obj3,obj4,... are the source
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
console.log(arr[2]["value"]);//3



//-------------------------------------



const obj10={
    1:"a",2:"b",3:"c"
}
console.log(obj10);//{ '1': 'a', '2': 'b', '3': 'c' }
// console.log(obj10.length());//error -> Object.length() is not a function
console.log(Object.keys(obj10));//[ '1', '2', '3' ]      // coverts all the keys into a array
console.log(Object.values(obj10));//[ 'a', 'b', 'c' ]    //converts all the values into a array
console.log(Object.entries(obj10));//[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ] ]     // convert all the key-value pairs into 2-d array and in the 2-d array it has 1-d arrays and in 1-d array the first element is key and the second element is the value


//note:  console.log(obj10.length());//error -> Object.length() is not a function  -> so the solution to this issue means we can find out the length of an object by 3 ways which i have mentioned bellow
//---------------------------------------------------------------------------------

const obj11={
    11:"aa",
    22:"bb",
    33:"cc"
}
//way1
const obj12=Object.keys(obj11);
console.log(obj12);//[ '11', '22', '33' ]
console.log(obj12.length);//3

//way2
console.log(Object.values(obj11).length);//3

//way3
console.log(Object.entries(obj11).length);//3



//----------------------------------------


console.log(obj10.hasOwnProperty(1));//true
console.log(obj10.hasOwnProperty("1"));//true
console.log(obj10.hasOwnProperty("name"));//false


