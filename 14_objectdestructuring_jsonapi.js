//object destructuring and the json api
//-------------------------------------------
const cource={
    name:"hindi",
    price:999,
    instructor:"sthita"
}
console.log("hello");
console.log(cource.instructor); //sthita -> but it is very difficult to write cource.instructor every time we need the value of instructor , so there is another way to write it that is bellow:

const {instructor}=cource
console.log(instructor);//sthita  -> now also we can make it more small
const {instructor:x}=cource
console.log(x);//sthita

// i have left this part at 4:25:40 


