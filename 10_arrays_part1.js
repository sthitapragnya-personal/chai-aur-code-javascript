// //arrays in js part 1
// //--------------------
// const arr=[1,2,3,4,5,true,"sthita"]
// console.log(arr);//[ 1, 2, 3, 4, 5, true, 'sthita' ]
// console.log(typeof arr);//object
// console.log(arr[1]);//2


// //in js the size of the array is not fixed
// // it can hac=ve elemets of different datatypes
// //the elements can only be accesed using the index
// //whenever we do the array copy it follows the shallow copy-> that means here the copies share the same refernce 
// // deep copy -> here the copis do not share the same reference


// const heroes=["batman","spiderman","superman"]
// console.log(heroes);//[ 'batman', 'spiderman', 'superman' ]

// //array methods
// //---------------
// const x=new Array(1,2,3,4,5)
// console.log(x[1]);//2
// x.push(6) //adds element at the last of the array
// console.log(x);//[ 1, 2, 3, 4, 5, 6 ]
// let q=x.pop() //deletes the last element and returns the deleted element
// console.log(q);//6
// console.log(x);//[ 1, 2, 3, 4, 5 ]
// x.unshift(9) //adds at the first of the array
// console.log(x);//[ 9, 1, 2, 3, 4, 5 ]
// let p=x.shift() //deletes the first element and returns the deleted element
// console.log(p);//9
// console.log(x);//[ 1, 2, 3, 4, 5 ]
// console.log(x.includes(7));//false
// console.log(x.includes(5));//true
// console.log(x.indexOf(10));//-1
// console.log(x.indexOf(1));//2

// const xx=x.join()
// console.log(xx);//1,2,3,4,5
// console.log(typeof x);//object
// console.log(typeof xx);//string
 
// const r=[100,"sthita",5.6,true]
// const xxx=x.join(r)
// console.log(xxx);//
// console.log(typeof x);//object
// console.log(typeof xx);//string



//slice and splice
//---------------
const arr1=[1,2,3,4,5,6]
console.log(arr1);//[ 1, 2, 3, 4, 5, 6 ] //original array is not changed
console.log(arr1.slice(1,3));//[ 2, 3 ] //here 3 is not included
console.log(arr1);//[ 1, 2, 3, 4, 5, 6 ]  //original array is not changed

console.log(arr1.splice(1,3));//[ 2, 3, 4 ]
console.log(arr1);//[ 1, 5, 6 ] 
// here once the splice function is used the portion that is spliced gets removed out of the array
// but in case of the slice the original array remains the same and also another difference is in case of slice the last index is not included but in case of the splice the last index is included too