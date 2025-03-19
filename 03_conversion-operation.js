// let score=33
// console.log(typeof(score));//number
// console.log(typeof score);//number
// let y=Number(score); // the Number(x) converts x into Number type
// console.log(typeof y); //number
// console.log(score);//33
// console.log(y);//33


//----------------------

// let score="44"
// console.log(typeof(score));//string
// console.log(typeof score);//string
// let y=Number(score); // the Number(x) converts x into Number type
// console.log(typeof y); //number
// console.log(score);//44
// console.log(y);//44

//---------------------

// let score="33abc"
// console.log(typeof(score));//string
// console.log(typeof score);//string
// let y=Number(score); // the Number(x) converts x into Number type
// console.log(typeof y); //number
// console.log(score);//33abc
// console.log(y);//NaN // Nan stands for "not a number"

//-------------------------

// let score=null
// console.log(typeof(score));//object
// console.log(typeof score);//object
// let y=Number(score); // the Number(x) converts x into Number type
// console.log(typeof y); //number
// console.log(score);//null
// console.log(y);//0

//-----------------------

// let score=undefined
// console.log(typeof(score));//undefined
// console.log(typeof score);//undefined
// let y=Number(score); // the Number(x) converts x into Number type
// console.log(typeof y); //number
// console.log(score);//undefined
// console.log(y);//NaN


//---------------------

// let score="sthita"
// console.log(typeof(score));//string
// console.log(typeof score);//string
// let y=Number(score); // the Number(x) converts x into Number type
// console.log(typeof y); //number
// console.log(score);//sthita
// console.log(y);//NaN

//------------------

// let score=true
// console.log(typeof(score));//boolean
// console.log(typeof score);//boolean
// let y=Number(score); // the Number(x) converts x into Number type
// console.log(typeof y); //number
// console.log(score);//true
// console.log(y);//1

//-------------------------

// let score=false
// console.log(typeof(score));//boolean
// console.log(typeof score);//boolean
// let y=Number(score); // the Number(x) converts x into Number type
// console.log(typeof y); //number
// console.log(score);//false
// console.log(y);//0


//conclusion : 
// values of Number()
//-----------------------
// 33 -> number
// "33abc" -> NaN
// true -> 1
// false -> 0
// null -> 0
// undefined -> NaN
// "sthita" -> NaN

//converting to Boolean type
//----------------------------
// let x=1;
// let y=Boolean(x)
// console.log(x);//1
// console.log(y);//true


// let x=0;
// let y=Boolean(x)
// console.log(x);//0
// console.log(y);//false


// let x="";
// let y=Boolean(x)
// console.log(x);// output is nothing
// console.log(y);//false


// let x=null;
// let y=Boolean(x)
// console.log(x);//null
// console.log(y);//false


// let x;
// let y=Boolean(x)
// console.log(x);//undifined
// console.log(y);//false


// let x="sthita";
// let y=Boolean(x)
// console.log(x);//sthita
// console.log(y);//true

// let x=98;
// let y=Boolean(x)
// console.log(x);//98
// console.log(y);//true

//conclusion :
//---------------
//1 -> true
//0 -> false
//"" -> false
//null -> false
// "sthita" -> true
// 76 -> true
// undefined -> false


//conversion to string
//------------------------
// let x=33
// let y=String(x);
// console.log(x);//33
// console.log(y);//33
// console.log(typeof y);//string



//other basic operations
//---------------------------

// let value=2;
// let negvalue= -value; // negvalue has the negative of value 
// console.log(negvalue);//-2


// console.log(2+3);//5
// console.log(2-3);//-1
// console.log(2*3);//6
// console.log(2**3);//8
// console.log(2/3);// gives quotient 0.6666666666
// console.log(2%3);// gives remainder 0







