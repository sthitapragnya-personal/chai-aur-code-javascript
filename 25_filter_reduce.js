const x=["js","java","py","css"]
x.forEach((ele)=>{
    console.log(ele);
})

const values=x.forEach((ele)=>{
    console.log(ele);
})
console.log(values);// undefined means here the forEach loop do not returns anything automatically


const v=x.forEach((ele)=>{
    console.log(ele);
    return ele;
})
console.log(v);// undefined
// hence , forEach loop do not returns anything


//filter() operation
//------------------------------------------
const num=[1,2,3,4,5,6,7,8,9,10]

num.filter((ele)=>ele>4) // single line arrrow function
let newnum=num.filter((ele)=> ele>4)// gives no output
console.log(newnum);//[ 5, 6, 7, 8, 9, 10 ]

const bb=num.filter((ele) =>{
    ele>4 // gives error
})
console.log(bb);// [] -> output is a n empty array




const cc=num.filter((ele) =>{
    return ele>4 
})
console.log(cc);//[ 5, 6, 7, 8, 9, 10 ]


const dd=[] // here i have created an empty array
num.filter((ele)=>{
    if(ele>=6){
        dd.push(ele);
    }
})
console.log(dd);//[ 6, 7, 8, 9, 10 ]




//some other operations on filter() function
//-----------------------------------------------
const  books=[
    {title:"book 1",genre:"fiction",publish:1981,edition:2004},
    {title:"book 2",genre:"non-fiction",publish:1982,edition:2008},
    {title:"book 3",genre:"history",publish:1999,edition:2007},
    {title:"book 4",genre:"non-fiction",publish:1989,edition:2010},
    {title:"book 5",genre:"science",publish:2009,edition:2014},
    {title:"book 6",genre:"fiction",publish:1987,edition:2010},
    {title:"book 7",genre:"history",publish:1986,edition:1996},
    {title:"book 8",genre:"science",publish:2011,edition:2016}
];




//give me the info of thw books which have genere as history
//----------------------------------------------------------------
const userbooks=books.filter((bk)=> bk.genre==="history")
console.log(userbooks);
// [
//     { title: 'book 3', genre: 'history', publish: 1999, edition: 2007 },
//     { title: 'book 7', genre: 'history', publish: 1986, edition: 1996 }
// ]

//OR

const userbooks2=books.filter((ele)=>{
    if(ele.genre=="history"){
        return ele
    }
})
console.log(userbooks2);
// [
//     { title: 'book 3', genre: 'history', publish: 1999, edition: 2007 },
//     { title: 'book 7', genre: 'history', publish: 1986, edition: 1996 }
//   ]




//give me the info of books which are published after 2000
//-----------------------------------------------------------
const after2000=books.filter((bk)=> bk.publish>2000)
console.log(after2000);
// [
//     { title: 'book 5', genre: 'science', publish: 2009, edition: 2014 },
//     { title: 'book 8', genre: 'science', publish: 2011, edition: 2016 }
//   ]

//OR


//give me only the name of the books which are published after 2000
//--------------------------------------------------------------------
const after2000_two=books.filter((ele) =>{
    if(ele.publish>2000){
        return ele.title // i have doubt in this case senario
    }
})
console.log(after2000_two);
// [
//     { title: 'book 5', genre: 'science', publish: 2009, edition: 2014 },
//     { title: 'book 8', genre: 'science', publish: 2011, edition: 2016 }
//   ]




//give me the books info which are published after 1995 and genere should be history
//---------------------------------------------------------------------------------------
const pbhs=books.filter((ele) => ele.publish>1995 && ele.genre==="history");
console.log(pbhs);
//[ { title: 'book 3', genre: 'history', publish: 1999, edition: 2007 } ]







//map() function
//-------------------
// note : map() is also a call back function and it also automatically returns some value
const n=[1,2,3,4,5,6,7,8,9,10]

// now lets say i want to add 10 to each elemet present in the array
const m=n.map((ele)=>ele+10)
console.log(m);
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]
const o=n.map( (ele)=>{
    return ele+10
})
console.log(o);
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]






//chaining method technique
//----------------------------
const nn=[1,2,3,4,5,6,7]
//nn.map().map() -> this is called as chaining

const mm=nn.map((ele)=>ele*10).map((ele)=>ele-1)
console.log(mm);
// [
//     9, 19, 29, 39,
//    49, 59, 69
//  ]


const oo=nn.map((ele)=>ele*10).map((ele)=>ele+1).filter((ele)=>ele>40)
console.log(oo);//[ 41, 51, 61, 71 ]






//reduce()  method
//----------------------
// this is mostly used while creating shopping cart etc in your projects

const aa=[1,2,3,4,5]
const i=0;
const sum=aa.reduce((accumulator,currentvalue)=>accumulator+currentvalue,i)// note : here the initial value of the accumulator is value of i that is 0 and currentvalue is 1
// and after the first iteration the value of accumulator is 0+1 that is 1 and the currentvalue is 2
// after the 2nd iterartion the accumulator is 1+2 that is 3 and the currentvalue is 3
// and similarly this goes on ......
console.log(sum);//15




const rr=[1,2,3];
const ans=rr.reduce(function (acc,curr){
    console.log(acc+"\t"+curr);
    // 0       1
    // 1       2
    // 3       3
    return acc+curr;
},0)
console.log(ans);//6


//OR

const pns=rr.reduce((acc,curr)=>acc+curr,0)
console.log(pns);//6









