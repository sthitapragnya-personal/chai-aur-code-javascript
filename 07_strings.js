//strings
//----------
// first go to console

// console.log("hello"+"world");//helloworld
// const name="sthita"
// const repocount=50
// console.log(name+repocount+"value");//sthita50value

// //use of ``
// //-----------
// console.log(`hello my name is ${name} and my repocount is ${repocount}`);//hello my name is sthita and my repocount is 50

// // another way to declare the String
// // ------------------------------------
// const game= new String("game1");
// console.log(game); //[String: 'game1']
// console.log(typeof game);//object


// console.log(game[0]);//g


// //string inbluid functions
// //--------------------------
// console.log(game.__proto__);//{}
// console.log(game.length);//5 //used to get the length of the string
// console.log(game.toUpperCase());//GAME1 //used to convert to uppercase
// console.log(game.toLowerCase());//game1  //used to convert to lowercase
// console.log(game.toLocaleUpperCase());//GAME1  //used to convert to uppercase
// console.log(game.toLocaleLowerCase());//game1  //used to convert to lowercase
// console.log(game.charAt(0));//g   //get the character at a given index
// console.log(game.charAt(100));  //returns nothing if the index is invalid
// console.log(game.indexOf('a'));//1  //used to get the index of a given character from first
// console.log(game.indexOf('z'));//-1   //returns -1 if the character is not found



// // comparing strings
// //-------------------
// const a = "a";
// const b = "b";
// if (a < b) {
//   console.log(`${a} is less than ${b}`); //a is less than b
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }


//string mdn js documentation starts from here
//---------------------------------------------
// the string can be sraeted as the string leterals or objects using the string() constructor
// const string1 = "A string primitive";   //string literal
// const string2 = 'Also a string primitive';   //string literal
// const string3 = `Yet another string primitive`;   //string literal
// console.log(typeof string1);//string   
// console.log(typeof string1);//string   
// console.log(typeof string1);//string   

// const string4 = new String("A String object");// string object
// console.log(typeof string4);//object

// "cat".charAt(1); // gives value "a"
// "cat"[1]; // gives value "a"

// //comparing strings
// //------------------
// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

// //string primitive/literal and string object
// //--------------------------------------------
// const strPrim = "foo"; // A literal is a string primitive
// const strPrim2 = String(1); // Coerced into the string primitive "1"
// const strPrim3 = String(true); // Coerced into the string primitive "true"
// const strObj = new String(strPrim); // String with new returns a string wrapper object.

// console.log(typeof strPrim); // "string"
// console.log(typeof strPrim2); // "string"
// console.log(typeof strPrim3); // "string"
// console.log(typeof strObj); // "object"


// //eval() and valueOf() function
// //--------------------------------
// //String primitives and String objects also give different results when using eval().
// const s1 = "2 + 2"; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the string "2 + 2"

// // A String object can always be converted to its primitive counterpart with the valueOf() method.
// console.log(eval(s2.valueOf())); // returns the number 4


// //string methods
// //---------------
// // String.anchor() -> but yes this is depricated
// //---------------------------------
// const contentString = "Hello, world";
// const x = contentString.anchor("hello"); //basically this converts a string to a anchor tag
// console.log(x); //<a name="hello">Hello, world</a>

// //String.prototype.at() -> used to get the element at a given index of the string and returns nothing for invalid index
////----------------------------------------------------------
// const x="sthita"
// console.log(x.charAt(0));//s  //used to get the first element of the string
// console.log(x.charAt(-1));//a //used to get the last element of the string
// console.log(x.charAt(100));// returns nothing


//String.prototype.big() -> depricated 
//depricated ->String.prototype.blink()
//String.prototype.bold()  ->depricated

//String.prototype.charAt()
//--------------------------
// const game="game1"
// console.log(game.charAt(0));//g   //get the character at a given index
// console.log(game.charAt(100));  //returns nothing if the index is invalid


//String.prototype.charCodeAt()
//-----------------------------
// const game="game1"
// console.log(game.charCodeAt(0));//103   //get the assci value of the character at a given index
// console.log(game.charCodeAt(100));//NaN  //returns NaN if the index is invalid


//String.prototype.codePointAt()
//--------------------------------
//gives the value of utf-16 code point of a given index
//  const game="game1"
//  console.log(game.codePointAt(0)); //103
//  console.log(game.codePointAt(4)); //49
//  console.log(game.codePointAt(1)); //97


// String.prototype.concat()
// ----------------------------
// The concat() method of String values concatenates the string arguments to this string and returns a new string.
// const str1 = 'Hello';
// const str2 = 'World';
// console.log(str1.concat(' ', str2));//Hello World
// // Expected output: "Hello World"
// console.log(str2.concat(', ', str1));//World, Hello
// // Expected output: "World, Hello"



//String.prototype.endsWith()
//-----------------------------
// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
// endsWith(searchString)
// endsWith(searchString, endPosition)

// const str1 = 'Cats are the best!';
// console.log(str1.endsWith('best!'));//true
// console.log(str1.endsWith('best', 17));//true
// const str2 = 'Is this a question?';
// console.log(str2.endsWith('question'));//false
// const str = "To be, or not to be, that is the question.";
// console.log(str.endsWith("question.")); // true
// console.log(str.endsWith("to be")); // false
// console.log(str.endsWith("to be", 19)); // true

//String.prototype.fixed() ->depricated
//-------------------------------------------

// String.prototype.fontcolor() ->depricated
//-------------------------------------------

// String.prototype.fontsize() ->depricated
//-------------------------------------------


// String.prototype.includes()
// -------------------------------
// weather a character/string is present in a given string or not
// returns true if present and returns false if the string is not present

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(sentence.includes(word)); //true
// console.log(sentence.includes('over')); //true
// console.log(sentence.includes('100')); //false

// console.log("Blue Whale".toLowerCase().includes("blue"));// true
// includes(searchString)
// includes(searchString, position)
// const str = "To be, or not to be, that is the question.";
// console.log(str.includes("To be")); // true
// console.log(str.includes("question")); // true
// console.log(str.includes("nonexistent")); // false
// console.log(str.includes("To be", 1)); // false
// console.log(str.includes("To be", 0)); // true
// console.log(str.includes("TO BE")); // false
// console.log(str.includes("")); // true



// const game="my name is khan"
// const x=game.substring(0,7)//my name
// console.log(x);//my name
// const y=game.slice(3,6)//nam
// console.log(y);//nam
// const z="      helooo   "
// console.log(z.length);//15
// console.log(z.trimStart().length);//9
// console.log(z.trimEnd().length);//12
// console.log(z.trim().length);//6

// const p="sthita is my name and 123 $#56"
// console.log(p.replace("is","999"));//sthita 999 my name and 123 $#56



//other methods
//--------------
// String.prototype.indexOf()
// String.prototype.isWellFormed()
// String.prototype.italics()
// Deprecated
// String.prototype.lastIndexOf()
// String.prototype.link()
// Deprecated
// String.prototype.localeCompare()
// String.prototype.match()
// String.prototype.matchAll()
// String.prototype.normalize()
// String.prototype.padEnd()
// String.prototype.padStart()
// String.raw()
// String.prototype.repeat()
// String.prototype.replace()
// String.prototype.replaceAll()
// String.prototype.search()
// String.prototype.slice()
// String.prototype.small()
// Deprecated
// String.prototype.split()
// String.prototype.startsWith()
// String.prototype.strike()
// Deprecated
// String.prototype.sub()
// Deprecated
// String.prototype.substr()
// Deprecated
// String.prototype.substring()
// String.prototype.sup()
// Deprecated
// String.prototype.toLocaleLowerCase()
// String.prototype.toLocaleUpperCase()
// String.prototype.toLowerCase()
// String.prototype.toString()
// String.prototype.toUpperCase()
// String.prototype.toWellFormed()
// String.prototype.trim()
// String.prototype.trimEnd()
// String.prototype.trimStart()
// String.prototype.valueOf()

