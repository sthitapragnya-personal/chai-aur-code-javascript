// console.log(2>1);//true
// console.log(2<1);//false
// console.log(2>=1);//true
// console.log(2<=1);//flase
// console.log(2==1);//false
// console.log(2!=1);//true
// console.log(2==2);//true  -> compares only value and not datatype
// console.log(2===2);//true -> compares both value and datatype
// console.log(2=="2");//true 
// console.log(2==="2");//false
// console.log("2">1);//true
// console.log("02">1);//true

// console.log("a"=="b");//false

// console.log(null>0);//false   -> here the value of null is converted to 0
// console.log(null==0);//false  -> here the value of null is not converted to 0
// console.log(null>=0);//true   -> here the value of null is converted to 0
// note : here in this case the  == and the >,<,>=,<= operators work differntly , >,<,>=,<= operators concert the null to number that is 0 but in case of == null is not converted to number 


// and in case of undefined it is not changed to number in case of any operator 
// console.log(undefined>0);//false
// console.log(undefined==0);//false
// console.log(undefined>=0);//false


// == checks only value but === checks both value as well as datatype
// console.log("2"==2);//true
// console.log("2"===2);//false
