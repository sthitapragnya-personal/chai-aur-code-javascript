// high order array loops
//-------------------------


//for of loop
//-----------------
// const arr=[10,20,30,40,50]
// for (const x of arr) { // here x directly refers to the elements of the array
//     console.log(x);
// }
//10
// 20
// 30
// 40
// 50

//-----------------

// const y="sthitapragnya"
// for(const x of y){
//     console.log(`each char is ${x}`);
// }
// each char is s
// each char is t
// each char is h
// each char is i
// each char is t
// each char is a
// each char is p
// each char is r
// each char is a
// each char is g
// each char is n
// each char is y
// each char is a


//----------------------------


// //Map
// //-------
// //map holds values in the form of key value pairs and here order is preserved and here any data type variavle or value can be used as the key and the value , and it has unique values

// const x=new Map()
// x.set('IN','India')
// x.set('USA','united states of america')
// x.set('UK','united kingdom')
// x.set('FR','France')
// x.set('IN','India')
// x.set('USA','united states of america')

// console.log(x); // it has only the unique values and no value is repeated
// //Map(4) {
// //     'IN' => 'India',
// //     'USA' => 'united states of america',
// //     'UK' => 'united kingdom',
// //     'FR' => 'France'
// //   }

// for(const element of x){
//     console.log(element); // the ouputs are in the form of arrays
//     //[ 'IN', 'India' ]
//     // [ 'USA', 'united states of america' ]
//     // [ 'UK', 'united kingdom' ]
//     // [ 'FR', 'France' ]
// }

// for (const [y,z] of x) {
//     console.log(y+" : "+z);
//     // IN : India
//     // USA : united states of america
//     // UK : united kingdom
//     // FR : France
// }

//let us check this thing in case of objects
//---------------------------------------
// const obj={
//     name:"sthita",
//     degree:"btech",
//     roll:21
// }
// for (const [x,y] of obj) {
//     console.log(x+" - "+y);//error as object is not iterable in this case
// }

//----------------------------------



// //We can convert an object into a map using new Map(obj).
// //But we need to make sure that our object should have
// //key-value pairs otherwise it will give error.
// const y=new Map(Object.entries(obj))
// for (const [x,y] of y) {
//     console.log(x +" - "+y);
//     //name - sthita
//     //degree - btech
//     //roll - 21
//     }
//     //we can also add elements to existing map by using set() method
//     y.set("college","BITS Pilani");
//     console.log(y);
//     /*Output
//     Map(5) {
//         "name" => "sthita",
//         "degree" => "btech",
//         "roll" => 21,
//         "college" => "BITS Pilani"
//         }*/


//------------------------------
//for in loop
//-----------

// const obj={
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby",
//     swift:"swift by apple"
// }
// for (const key in obj) {
//     //console.log(key);
//     //js
//     // cpp
//     // rb
//     // swift
// }

// for (const key in obj) {
//     console.log(obj[key]);
//     // javascript
//     // c++
//     // ruby
//     // swift by apple
// }

// for (const key in obj) {
//     console.log(`keys is ${key} and value is ${obj[key]}`);
//     // keys is js and value is javascript
//     // keys is cpp and value is c++
//     // keys is rb and value is ruby
//     // keys is swift and value is swift by apple
// }


//-----------------------------


// const arr=[10,20,30,40,50]
// for (const key in arr) { // here key gives the index of the array
//     console.log(key);
//     // 0
//     // 1
//     // 2
//     // 3
//     // 4
// }
// //how to get the values in array using for in loop
// //---------------------------------------------
// for (const key in arr) { // here key gives the index of the array
//     console.log(arr[key]);
//     // 10
//     // 20
//     // 30
//     // 40
//     // 50
// }


//-----------------------------

// for in loop with Map
// ---------------------

//const x=new Map()
// x.set('IN','India')
// x.set('USA','united states of america')
// x.set('UK','united kingdom')
// x.set('FR','France')
// x.set('IN','India')
// x.set('USA','united states of america')

// for(const y in x){
//     console.log(y);// no output
// }




//best higher order functions
//------------------------------
const xx=["kuna","muna","tuna","guna"]

xx.forEach(function (ele){//as this is a callback function hence it do not have any name
    console.log(ele);
    // kuna
    // muna
    // tuna
    // guna
    
})

// we can also make the use of arrow functions in forEach loop
//-------------------------------------------------------------
xx.forEach( (ele)=> {
    console.log(ele+"####");

})



function printme(item){
    console.log(item+"    item");
    // kuna####
    // muna####
    // tuna####
    // guna####
}
xx.forEach(printme)// we can also pass the function name in forEach 
// kuna    item
// muna    item
// tuna    item
// guna    item



xx.forEach((item)=>{
    console.log(item);
    // kuna
    // muna
    // tuna
    // guna
    
})



xx.forEach( (item,index,array)=>{
    console.log(item+"    "+index+"    "+array);
    // kuna    0    kuna,muna,tuna,guna
    // muna    1    kuna,muna,tuna,guna
    // tuna    2    kuna,muna,tuna,guna
    // guna    3    kuna,muna,tuna,guna
    
})



const yy=[
    {
        lname:"js",
        lfilename:"01.js"
    },
    {
        lname:"html",
        lfilename:"02.html"
    },
    {
        lname:"python",
        lfilename:"03.py"
    }
]
console.log(yy);
// [
//     { lname: 'js', lfilename: '01.js' },
//     { lname: 'html', lfilename: '02.html' },
//     { lname: 'python', lfilename: '03.py' }
// ]

yy.forEach((ele,index,array)=>{
    console.log(ele.lname+"     "+ele["lfilename"]);
    // js     01.js
    // html     02.html
    // python     03.py
    
})


