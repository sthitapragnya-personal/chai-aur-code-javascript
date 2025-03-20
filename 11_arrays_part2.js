//more functions of arrays
//-------------------------
//push()
//-----------
// const x=[1,2,3,4,5];
// const y=[6,7,8,9];
// x.push(y)
// console.log(x); //here it becomes 2d array
// console.log(x[5][2]);//8



//concat
//----------
const x=[1,2,3,4,5];
const y=[6,7,8,9];
x.concat(y)
console.log(x);//[ 1, 2, 3, 4, 5 ] //this happened as concat() returns a new array but in case of push it makes changes in the same array and no new array is returned
const z=x.concat(y)
 console.log(z);
//   [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]
console.log(x);//[ 1, 2, 3, 4, 5 ]


//spread operators
//-----------------
const a=[1,2,3]
const b=[4,5,6]
const c=[7,8,9]
const d=[...a,...b,...c]
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]
console.log(d);
const e=[...a,...b,...c,...d] 
// [
//     1, 2, 3, 4, 5, 6, 7,
//     8, 9, 1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]
console.log(e);

//  [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]


//spread operator
//--------------------
const aa=[1,2,3,[4,5,6],[[7,8],[9]]]; 
console.log(aa); //[ 1, 2, 3, [ 4, 5, 6 ], [ [ 7, 8 ], [ 9 ] ] ]
const bb=aa.flat(Infinity); //in place of infinty we can use 1 or 2 or 3 that refers to the level or the depth upto which ut will flattern
console.log(bb);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]


//Array.isArray()  -> to check wheather a variable is array or not
//--------------------
console.log(Array.isArray("hitesh"));//false
console.log(Array.isArray(aa));//true



// Array.from()  -> to convert a variable into array
//--------------------------------
console.log(Array.from("hitesh"));//[ 'h', 'i', 't', 'e', 's', 'h' ]

const obj1={
    name:"sthita",
    age:21,
    roll:20410
}
console.log(typeof obj1);//object
console.log(Array.from(obj1));//[]   //intresting  -> here it returns an empty array as we need to define like wether we want an array of keys or we want an array of values
console.log(Array.from({name:"sthita"})); //[]



//Array.of()
//-----------------
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]

console.log(Array.of(score1,score2,score3,[1,2,3])); //[ 100, 200, 300, [ 1, 2, 3 ] ]


