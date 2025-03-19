// variables and constants in js
//---------------------------------
const accountId = 20143
let accountEmail = "sthita@gmail.com"
var accountPassword = "12345"
accountCity = "bhubaneswar" // in this way also we can declare a variable but this is not a good practice to do the variable declaration
var x; // its value is by default "undefined"

console.log(accountId);//20143
console.log(accountEmail);//sthita@gmail.com
console.log(accountPassword);//12345
console.log(accountCity);//Bhubaneswar
console.log(x); //undefined


const p=1233
let q="shubham"
var r="bbsr"
console.log(p);//1233
console.log(q);//shubham
console.log(r);//bbsr


//accountId =2 // note: this is not allowed 
//note : the value of the variable that is declared const can never be changed
// accountEmail="shubham@gmail.com"
// accountPassword="98765"
// accountCity="cuttuck"

// note : now we will learn another way to get the output of multiple variables instead of writing console.log(variable_name) for each variable we can use the console.table([variable1,variable2,.....])
console.table([accountId,accountEmail,accountPassword,accountCity,x]);

// ┌─────────┬─────────────────────┐
// │ (index) │       Values        │
// ├─────────┼─────────────────────┤
// │    0    │        20143        │
// │    1    │ 'shubham@gmail.com' │
// │    2    │       '98765'       │
// │    3    │      'cuttuck'      │
// │    4    │      undefined      │
// └─────────┴─────────────────────┘

console.table([p,q,r]);
// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │    0    │   1233    │
// │    1    │ 'shubham' │
// │    2    │  'bbsr'   │
// └─────────┴───────────┘

//note : we should not declare a varible with the var keyword becuase of the issue of block scope and the function scope that is if we declare a varible with var then it can be accesed anywhere and if another variable is declared inside a for loop or inside a function then the valueof the previous variable with the same name is changed which is grt problem . so it is preferd to use let and const and not var







