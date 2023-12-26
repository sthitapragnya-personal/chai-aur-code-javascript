//promises in js
//---------------------
// basically promises means here certain work/event or task needs to be done so they are pushed in a queue and will be completed but not imidiately .
// means they will be completed but it can take some time 
// it is an object that deals with the eventual completetion of the events and tasks


// it has 3 states
//--------------------
// pending state
// fullfilled state
// rejected state


//let us first see some examples of the promises in js
//------------------------------------------
//1
//-----
// fetch("https://www.google.com").then().catch().finally()   -> here we are consuming the Promise

//let us first create the rpomises
//-------------------------------------
// // here we are creating a object of promise and we are storing it's reference in promise1
// const promise1= new Promise(function(resolve,reject){  // here the function is a call back
//     //do an async task
//     //db calls cryptography, network
//     setTimeout(function(){
//         console.log("async1 that is complete");//async1 that is complete
//         resolve()  // now it is connected to .then()  if we don't write this then ,    .then() won't be called
//     },2000)
// }); 

// // -> promise1.then() it has direct relation with resolve
// // .then() also has a call back in it 
// promise1.then(function(){
//     console.log("promise1 is consumed");//promise1 is consumed
// })  




//another way
//--------------------------------------------
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async2 is completed");//async2 is completed
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async2 is consumed/resolved");//async2 is consumed/resolved
// })



//another way
//------------------
// const promise3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(
//             {
//                 username:"sthita",
//                 age:21,
//                 goodperson:true
//             }
//         )
//     },1000)
// })
// promise3.then(function(user){
//     console.log(user);//{ username: 'sthita', age: 21, goodperson: true }
// })




//another way
//-----------------
//note: like resolve is connected to then() , similarly rejected is connected to catch()
// const promise4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         const error=false  //true
//     if(!error){
//         resolve(
//             {
//                 username:"sthita",
//                 password:"shubham"
//             }
//         )
//     }
//     else{
//         reject("ERROR : something went wrong")
//     }
//     },1000)
// })

// promise4.then(function(user){
//     console.log(user);
//     const username=user.username
//     return username  // note : anything we return from then() goes to the further next chained then()
// }).then(function(username){
//     console.log(username);
// }).catch(function(errormsg){
//     console.log(errormsg);
// }).finally(function(){
//     console.log("either the error is resolved or it is rejected");
// })
// output of both the cases , error=true and error=false
// -----------------------------------
// PS D:\sthita-github\chai-aur-code-javascript> node 36_promise.js
// ERROR : something went wrong
// either the error is resolved or it is rejected
// PS D:\sthita-github\chai-aur-code-javascript> node 36_promise.js
// { username: 'sthita', password: 'shubham' }
// sthita
// either the error is resolved or it is rejected
// PS D:\sthita-github\chai-aur-code-javascript>



//another way
//-----------------
// const promise5=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false  //true
//         if(!error){
//             resolve(
//                 {
//                     username:"sthita2",
//                     password:"shubham2"
//                 }
//             )
//         }
//         else{
//             reject("ERROR : something went wrong")
//         }
//     },1000)
// });
// // here we will not use .then() rather we will use async await
// //-----------------------------------------
// async function consumepromise5(){
//     try {
//         const x = await promise5
//         console.log(x); //doubt why this is not working
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumepromise5()  // this needs to be called or else the function will not execute
//output in both error=true and error=false cases
//-----------------------------
// PS D:\sthita-github\chai-aur-code-javascript> node 36_promise.js
// ERROR : something went wrong
// PS D:\sthita-github\chai-aur-code-javascript> node 36_promise.js
// { username: 'sthita2', password: 'shubham2' }
// PS D:\sthita-github\chai-aur-code-javascript> 




// //----------------------------------
// async function getallusers(){
//    try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json() //converting string to json/object  but it also takes time so we need to also use await here
//     console.log(data);
//    } catch (error) {
//     console.log("error : ",error);
//    }
// }
// getallusers();
// //output:
// //-----------
// // PS D:\sthita-github\chai-aur-code-javascript> node 36_promise.js
// // [
// //   {
// //     id: 1,
// //     name: 'Leanne Graham',
// //     username: 'Bret',
// //     email: 'Sincere@april.biz',
// //     address: {
// //       street: 'Kulas Light',
// //       suite: 'Apt. 556',
// //       city: 'Gwenborough',
// //       zipcode: '92998-3874',
// //       geo: [Object]
// //     },
// //     phone: '1-770-736-8031 x56442',
// //     website: 'hildegard.org',
// //     company: {
// //       name: 'Romaguera-Crona',
// //       catchPhrase: 'Multi-layered client-server neural-net',
// //       bs: 'harness real-time e-markets'
// //     }
// //   },
// //   {
// //     id: 2,
// //     name: 'Ervin Howell',
// //     username: 'Antonette',
// //     email: 'Shanna@melissa.tv',
// //     address: {
// //       street: 'Victor Plains',
// //       suite: 'Suite 879',
// //       city: 'Wisokyburgh',
// //       zipcode: '90566-7771',
// //       geo: [Object]
// //     },
// //     phone: '010-692-6593 x09125',
// //     website: 'anastasia.net',
// //     company: {
// //       name: 'Deckow-Crist',
// //       catchPhrase: 'Proactive didactic contingency',
// //       bs: 'synergize scalable supply-chains'
// //     }
// //   },
// //   {
// //     id: 3,
// //     name: 'Clementine Bauch',
// //     username: 'Samantha',
// //     email: 'Nathan@yesenia.net',
// //     address: {
// //       street: 'Douglas Extension',
// //       suite: 'Suite 847',
// //       city: 'McKenziehaven',
// //       zipcode: '59590-4157',
// //       geo: [Object]
// //     },
// //     phone: '1-463-123-4447',
// //     website: 'ramiro.info',
// //     company: {
// //       name: 'Romaguera-Jacobson',
// //       catchPhrase: 'Face to face bifurcated interface',
// //       bs: 'e-enable strategic applications'
// //     }
// //   },
// //   {
// //     id: 4,
// //     name: 'Patricia Lebsack',
// //     username: 'Karianne',
// //     email: 'Julianne.OConner@kory.org',
// //     address: {
// //       street: 'Hoeger Mall',
// //       suite: 'Apt. 692',
// //       city: 'South Elvis',
// //       zipcode: '53919-4257',
// //       geo: [Object]
// //     },
// //     phone: '493-170-9623 x156',
// //     website: 'kale.biz',
// //     company: {
// //       name: 'Robel-Corkery',
// //       catchPhrase: 'Multi-tiered zero tolerance productivity',
// //       bs: 'transition cutting-edge web services'
// //     }
// //   },
// //   {
// //     id: 5,
// //     name: 'Chelsey Dietrich',
// //     username: 'Kamren',
// //     email: 'Lucio_Hettinger@annie.ca',
// //     address: {
// //       street: 'Skiles Walks',
// //       suite: 'Suite 351',
// //       city: 'Roscoeview',
// //       zipcode: '33263',
// //       geo: [Object]
// //     },
// //     phone: '(254)954-1289',
// //     website: 'demarco.info',
// //     company: {
// //       name: 'Keebler LLC',
// //       catchPhrase: 'User-centric fault-tolerant solution',
// //       bs: 'revolutionize end-to-end systems'
// //     }
// //   },
// //   {
// //     id: 6,
// //     name: 'Mrs. Dennis Schulist',
// //     username: 'Leopoldo_Corkery',
// //     email: 'Karley_Dach@jasper.info',
// //     address: {
// //       street: 'Norberto Crossing',
// //       suite: 'Apt. 950',
// //       city: 'South Christy',
// //       zipcode: '23505-1337',
// //       geo: [Object]
// //     },
// //     phone: '1-477-935-8478 x6430',
// //     website: 'ola.org',
// //     company: {
// //       name: 'Considine-Lockman',
// //       catchPhrase: 'Synchronised bottom-line interface',
// //       bs: 'e-enable innovative applications'
// //     }
// //   },
// //   {
// //     id: 7,
// //     name: 'Kurtis Weissnat',
// //     username: 'Elwyn.Skiles',
// //     email: 'Telly.Hoeger@billy.biz',
// //     address: {
// //       street: 'Rex Trail',
// //       suite: 'Suite 280',
// //       city: 'Howemouth',
// //       zipcode: '58804-1099',
// //       geo: [Object]
// //     },
// //     phone: '210.067.6132',
// //     website: 'elvis.io',
// //     company: {
// //       name: 'Johns Group',
// //       catchPhrase: 'Configurable multimedia task-force',
// //       bs: 'generate enterprise e-tailers'
// //     }
// //   },
// //   {
// //     id: 8,
// //     name: 'Nicholas Runolfsdottir V',
// //     username: 'Maxime_Nienow',
// //     email: 'Sherwood@rosamond.me',
// //     address: {
// //       street: 'Ellsworth Summit',
// //       suite: 'Suite 729',
// //       city: 'Aliyaview',
// //       zipcode: '45169',
// //       geo: [Object]
// //     },
// //     phone: '586.493.6943 x140',
// //     website: 'jacynthe.com',
// //     company: {
// //       name: 'Abernathy Group',
// //       catchPhrase: 'Implemented secondary concept',
// //       bs: 'e-enable extensible e-tailers'
// //     }
// //   },
// //   {
// //     id: 9,
// //     name: 'Glenna Reichert',
// //     username: 'Delphine',
// //     email: 'Chaim_McDermott@dana.io',
// //     address: {
// //       street: 'Dayna Park',
// //       suite: 'Suite 449',
// //       city: 'Bartholomebury',
// //       zipcode: '76495-3109',
// //       geo: [Object]
// //     },
// //     phone: '(775)976-6794 x41206',
// //     website: 'conrad.com',
// //     company: {
// //       name: 'Yost and Sons',
// //       catchPhrase: 'Switchable contextually-based project',
// //       bs: 'aggregate real-time technologies'
// //     }
// //   },
// //   {
// //     id: 10,
// //     name: 'Clementina DuBuque',
// //     username: 'Moriah.Stanton',
// //     email: 'Rey.Padberg@karina.biz',
// //     address: {
// //       street: 'Kattie Turnpike',
// //       suite: 'Suite 198',
// //       city: 'Lebsackbury',
// //       zipcode: '31428-2261',
// //       geo: [Object]
// //     },
// //     phone: '024-648-3804',
// //     website: 'ambrose.net',
// //     company: {
// //       name: 'Hoeger LLC',
// //       catchPhrase: 'Centralized empowering task-force',
// //       bs: 'target end-to-end models'
// //     }
// //   }
// // ]
// // PS D:\sthita-github\chai-aur-code-javascript> 




//but lets say i want to do the avobe thing with the help of then and catch
//----------------------------------------------------------------------------
// fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
//     return response.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// //output
// //-------------
// // [
// //     {
// //       id: 1,
// //       name: 'Leanne Graham',
// //       username: 'Bret',
// //       email: 'Sincere@april.biz',
// //       address: {
// //         street: 'Kulas Light',
// //         suite: 'Apt. 556',
// //         city: 'Gwenborough',
// //         zipcode: '92998-3874',
// //         geo: [Object]
// //       },
// //       phone: '1-770-736-8031 x56442',
// //       website: 'hildegard.org',
// //       company: {
// //         name: 'Romaguera-Crona',
// //         catchPhrase: 'Multi-layered client-server neural-net',
// //         bs: 'harness real-time e-markets'
// //       }
// //     },
// //     {
// //       id: 2,
// //       name: 'Ervin Howell',
// //       username: 'Antonette',
// //       email: 'Shanna@melissa.tv',
// //       address: {
// //         street: 'Victor Plains',
// //         suite: 'Suite 879',
// //         city: 'Wisokyburgh',
// //         zipcode: '90566-7771',
// //         geo: [Object]
// //       },
// //       phone: '010-692-6593 x09125',
// //       website: 'anastasia.net',
// //       company: {
// //         name: 'Deckow-Crist',
// //         catchPhrase: 'Proactive didactic contingency',
// //         bs: 'synergize scalable supply-chains'
// //       }
// //     },
// //     {
// //       id: 3,
// //       name: 'Clementine Bauch',
// //       username: 'Samantha',
// //       email: 'Nathan@yesenia.net',
// //       address: {
// //         street: 'Douglas Extension',
// //         suite: 'Suite 847',
// //         city: 'McKenziehaven',
// //         zipcode: '59590-4157',
// //         geo: [Object]
// //       },
// //       phone: '1-463-123-4447',
// //       website: 'ramiro.info',
// //       company: {
// //         name: 'Romaguera-Jacobson',
// //         catchPhrase: 'Face to face bifurcated interface',
// //         bs: 'e-enable strategic applications'
// //       }
// //     },
// //     {
// //       id: 4,
// //       name: 'Patricia Lebsack',
// //       username: 'Karianne',
// //       email: 'Julianne.OConner@kory.org',
// //       address: {
// //         street: 'Hoeger Mall',
// //         suite: 'Apt. 692',
// //         city: 'South Elvis',
// //         zipcode: '53919-4257',
// //         geo: [Object]
// //       },
// //       phone: '493-170-9623 x156',
// //       website: 'kale.biz',
// //       company: {
// //         name: 'Robel-Corkery',
// //         catchPhrase: 'Multi-tiered zero tolerance productivity',
// //         bs: 'transition cutting-edge web services'
// //       }
// //     },
// //     {
// //       id: 5,
// //       name: 'Chelsey Dietrich',
// //       username: 'Kamren',
// //       email: 'Lucio_Hettinger@annie.ca',
// //       address: {
// //         street: 'Skiles Walks',
// //         suite: 'Suite 351',
// //         city: 'Roscoeview',
// //         zipcode: '33263',
// //         geo: [Object]
// //       },
// //       phone: '(254)954-1289',
// //       website: 'demarco.info',
// //       company: {
// //         name: 'Keebler LLC',
// //         catchPhrase: 'User-centric fault-tolerant solution',
// //         bs: 'revolutionize end-to-end systems'
// //       }
// //     },
// //     {
// //       id: 6,
// //       name: 'Mrs. Dennis Schulist',
// //       username: 'Leopoldo_Corkery',
// //       email: 'Karley_Dach@jasper.info',
// //       address: {
// //         street: 'Norberto Crossing',
// //         suite: 'Apt. 950',
// //         city: 'South Christy',
// //         zipcode: '23505-1337',
// //         geo: [Object]
// //       },
// //       phone: '1-477-935-8478 x6430',
// //       website: 'ola.org',
// //       company: {
// //         name: 'Considine-Lockman',
// //         catchPhrase: 'Synchronised bottom-line interface',
// //         bs: 'e-enable innovative applications'
// //       }
// //     },
// //     {
// //       id: 7,
// //       name: 'Kurtis Weissnat',
// //       username: 'Elwyn.Skiles',
// //       email: 'Telly.Hoeger@billy.biz',
// //       address: {
// //         street: 'Rex Trail',
// //         suite: 'Suite 280',
// //         city: 'Howemouth',
// //         zipcode: '58804-1099',
// //         geo: [Object]
// //       },
// //       phone: '210.067.6132',
// //       website: 'elvis.io',
// //       company: {
// //         name: 'Johns Group',
// //         catchPhrase: 'Configurable multimedia task-force',
// //         bs: 'generate enterprise e-tailers'
// //       }
// //     },
// //     {
// //       id: 8,
// //       name: 'Nicholas Runolfsdottir V',
// //       username: 'Maxime_Nienow',
// //       email: 'Sherwood@rosamond.me',
// //       address: {
// //         street: 'Ellsworth Summit',
// //         suite: 'Suite 729',
// //         city: 'Aliyaview',
// //         zipcode: '45169',
// //         geo: [Object]
// //       },
// //       phone: '586.493.6943 x140',
// //       website: 'jacynthe.com',
// //       company: {
// //         name: 'Abernathy Group',
// //         catchPhrase: 'Implemented secondary concept',
// //         bs: 'e-enable extensible e-tailers'
// //       }
// //     },
// //     {
// //       id: 9,
// //       name: 'Glenna Reichert',
// //       username: 'Delphine',
// //       email: 'Chaim_McDermott@dana.io',
// //       address: {
// //         street: 'Dayna Park',
// //         suite: 'Suite 449',
// //         city: 'Bartholomebury',
// //         zipcode: '76495-3109',
// //         geo: [Object]
// //       },
// //       phone: '(775)976-6794 x41206',
// //       website: 'conrad.com',
// //       company: {
// //         name: 'Yost and Sons',
// //         catchPhrase: 'Switchable contextually-based project',
// //         bs: 'aggregate real-time technologies'
// //       }
// //     },
// //     {
// //       id: 10,
// //       name: 'Clementina DuBuque',
// //       username: 'Moriah.Stanton',
// //       email: 'Rey.Padberg@karina.biz',
// //       address: {
// //         street: 'Kattie Turnpike',
// //         suite: 'Suite 198',
// //         city: 'Lebsackbury',
// //         zipcode: '31428-2261',
// //         geo: [Object]
// //       },
// //       phone: '024-648-3804',
// //       website: 'ambrose.net',
// //         name: 'Hoeger LLC',
// //         catchPhrase: 'Centralized empowering task-force',
// //         bs: 'target end-to-end models'
// //       }
// //     }
// //   ]
// //   PS D:\sthita-github\chai-aur-code-javascript> node 36_promise.js
// //   [
// //     {
// //       id: 1,
// //       name: 'Leanne Graham',
// //       username: 'Bret',
// //       email: 'Sincere@april.biz',
// //       address: {
// //         street: 'Kulas Light',
// //         suite: 'Apt. 556',
// //         city: 'Gwenborough',
// //         zipcode: '92998-3874',
// //         geo: [Object]
// //       },
// //       phone: '1-770-736-8031 x56442',
// //       website: 'hildegard.org',
// //       company: {
// //         name: 'Romaguera-Crona',
// //         catchPhrase: 'Multi-layered client-server neural-net',
// //         bs: 'harness real-time e-markets'
// //       }
// //     },
// //     {
// //       id: 2,
// //       name: 'Ervin Howell',
// //       username: 'Antonette',
// //       email: 'Shanna@melissa.tv',
// //       address: {
// //         street: 'Victor Plains',
// //         suite: 'Suite 879',
// //         city: 'Wisokyburgh',
// //         zipcode: '90566-7771',
// //         geo: [Object]
// //       },
// //       phone: '010-692-6593 x09125',
// //       website: 'anastasia.net',
// //       company: {
// //         name: 'Deckow-Crist',
// //         catchPhrase: 'Proactive didactic contingency',
// //         bs: 'synergize scalable supply-chains'
// //       }
// //     },
// //     {
// //       id: 3,
// //       name: 'Clementine Bauch',
// //       username: 'Samantha',
// //       email: 'Nathan@yesenia.net',
// //       address: {
// //         street: 'Douglas Extension',
// //         suite: 'Suite 847',
// //         city: 'McKenziehaven',
// //         zipcode: '59590-4157',
// //         geo: [Object]
// //       },
// //       phone: '1-463-123-4447',
// //       website: 'ramiro.info',
// //       company: {
// //         name: 'Romaguera-Jacobson',
// //         catchPhrase: 'Face to face bifurcated interface',
// //         bs: 'e-enable strategic applications'
// //       }
// //     },
// //     {
// //       id: 4,
// //       name: 'Patricia Lebsack',
// //       username: 'Karianne',
// //       email: 'Julianne.OConner@kory.org',
// //       address: {
// //         street: 'Hoeger Mall',
// //         suite: 'Apt. 692',
// //         city: 'South Elvis',
// //         zipcode: '53919-4257',
// //         geo: [Object]
// //       },
// //       phone: '493-170-9623 x156',
// //       website: 'kale.biz',
// //       company: {
// //         name: 'Robel-Corkery',
// //         catchPhrase: 'Multi-tiered zero tolerance productivity',
// //         bs: 'transition cutting-edge web services'
// //       }
// //     },
// //     {
// //       id: 5,
// //       name: 'Chelsey Dietrich',
// //       username: 'Kamren',
// //       email: 'Lucio_Hettinger@annie.ca',
// //       address: {
// //         street: 'Skiles Walks',
// //         suite: 'Suite 351',
// //         city: 'Roscoeview',
// //         zipcode: '33263',
// //         geo: [Object]
// //       },
// //       phone: '(254)954-1289',
// //       website: 'demarco.info',
// //       company: {
// //         name: 'Keebler LLC',
// //         catchPhrase: 'User-centric fault-tolerant solution',
// //         bs: 'revolutionize end-to-end systems'
// //       }
// //     },
// //     {
// //       id: 6,
// //       name: 'Mrs. Dennis Schulist',
// //       username: 'Leopoldo_Corkery',
// //       email: 'Karley_Dach@jasper.info',
// //       address: {
// //         street: 'Norberto Crossing',
// //         suite: 'Apt. 950',
// //         city: 'South Christy',
// //         zipcode: '23505-1337',
// //         geo: [Object]
// //       },
// //       phone: '1-477-935-8478 x6430',
// //       website: 'ola.org',
// //       company: {
// //         name: 'Considine-Lockman',
// //         catchPhrase: 'Synchronised bottom-line interface',
// //         bs: 'e-enable innovative applications'
// //       }
// //     },
// //     {
// //       id: 7,
// //       name: 'Kurtis Weissnat',
// //       username: 'Elwyn.Skiles',
// //       email: 'Telly.Hoeger@billy.biz',
// //       address: {
// //         street: 'Rex Trail',
// //         suite: 'Suite 280',
// //         city: 'Howemouth',
// //         zipcode: '58804-1099',
// //         geo: [Object]
// //       },
// //       phone: '210.067.6132',
// //       website: 'elvis.io',
// //       company: {
// //         name: 'Johns Group',
// //         catchPhrase: 'Configurable multimedia task-force',
// //         bs: 'generate enterprise e-tailers'
// //       }
// //     },
// //     {
// //       id: 8,
// //       name: 'Nicholas Runolfsdottir V',
// //       username: 'Maxime_Nienow',
// //       email: 'Sherwood@rosamond.me',
// //       address: {
// //         street: 'Ellsworth Summit',
// //         suite: 'Suite 729',
// //         city: 'Aliyaview',
// //         zipcode: '45169',
// //         geo: [Object]
// //       },
// //       phone: '586.493.6943 x140',
// //       website: 'jacynthe.com',
// //       company: {
// //         name: 'Abernathy Group',
// //         catchPhrase: 'Implemented secondary concept',
// //         bs: 'e-enable extensible e-tailers'
// //       }
// //     },
// //     {
// //       id: 9,
// //       name: 'Glenna Reichert',
// //       username: 'Delphine',
// //       email: 'Chaim_McDermott@dana.io',
// //       address: {
// //         street: 'Dayna Park',
// //         suite: 'Suite 449',
// //         city: 'Bartholomebury',
// //         zipcode: '76495-3109',
// //         geo: [Object]
// //       },
// //       phone: '(775)976-6794 x41206',
// //       website: 'conrad.com',
// //       company: {
// //         name: 'Yost and Sons',
// //         catchPhrase: 'Switchable contextually-based project',
// //         bs: 'aggregate real-time technologies'
// //       }
// //     },
// //     {
// //       id: 10,
// //       name: 'Clementina DuBuque',
// //       username: 'Moriah.Stanton',
// //       email: 'Rey.Padberg@karina.biz',
// //       address: {
// //         street: 'Kattie Turnpike',
// //         suite: 'Suite 198',
// //         city: 'Lebsackbury',
// //         zipcode: '31428-2261',
// //         geo: [Object]
// //       },
// //       phone: '024-648-3804',
// //       website: 'ambrose.net',
// //       company: {
// //         name: 'Hoeger LLC',
// //         catchPhrase: 'Centralized empowering task-force',
// //         bs: 'target end-to-end models'
// //       }
// //     }
// //   ]