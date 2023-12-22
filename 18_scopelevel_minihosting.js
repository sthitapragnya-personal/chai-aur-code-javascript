//scope level and mini hosting
//------------------------------
//nested scope / scope level

// function one(){
//     const username="sthita"
//     function two(){
//         const website="youtube.com"
//         console.log(website);//youtube.com
//         console.log(username);//sthita
//     }
//     two()//two is called
//     //console.log(website);// not defined website
//     console.log(username);//sthita
// }
// one() //one is called


//------------------------

// if (true) {
//     const name="sthita"
//     if(name==="sthita"){
//         const website ="google.com"
//         console.log(name+" "+website);//sthita google.com
//     }
//     //console.log(website);//error //cannot be acesed here as it is outside the scope of declaration
// }
//console.log(username);//error //cannot be acesed here as it is outside the scope of declaration



//-------------INTRESTING-------------------

console.log(addone(5));//6
function addone(num){
    return num+1
}
console.log(addone(5));//6

//-----------------------------------

console.log(addtwo(5));//error -> cannot access addtwo before initialization
const addtwo=function(num){
    return num+2
}
console.log(addtwo(5));//7

