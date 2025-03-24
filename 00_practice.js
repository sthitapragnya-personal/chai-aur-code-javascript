const x= new Map();
x.set("a",1);
x.set("b",2);
x.set("c",3);
x.set("a",1);
x.set("a",4)  // here if the key is duplicated then it changes the new value which is given 
x.set("p",1)

console.log(x);
for(ele of x){
    console.log(ele);
}
for(let[y,z] of x){
    console.log(`${y}     ${z}`);
    
}

let ob={
    "name":"sthita",
    age:19,
    city:"bbsr"
}
for(let rr in ob){
    console.log(ob[rr]);
    
}

let dd=[11,22,33,44]
for(let cc in dd){
    console.log(cc+"    "+dd[cc]);
    
}
for(let uu in ob){
    console.log(uu);
    
}