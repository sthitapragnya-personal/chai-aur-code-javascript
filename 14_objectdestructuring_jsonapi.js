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

// just like we have object destructuring similarly we also have array destructuring , but array destructuring we will learn later



//API
//-------------
// api -> jabhi apko apna kam kisi dusre ke sar pe dal dena he usiko api kehte hein . jese agar aap resturant mein jao and order dedo ki mujhe samsosa khana he ab apne to order de diya but apka headache ye nahin he ki wo itni jaldi samsosa kese bana ke layega. 

// now diving deep into api , api is nothing but a set of values that we get and how we represent those values is basically called as api
// earlier those values used to come in xml format which was very complecated to interprete but noe these values come in the form of JSON 

// {
//    // this is how json file looks -> which is similar to js object
// } 


//note: the js objects do have some name , but json files do not have any name 
//note: in json file both the key and value are in string format
// {
//     "name":"sthita",  
//     "age":"19",
//     "mark":"89.77"
// }

// // note: sometimes json files are also in the form of array and this array has objects inside it means it is an array of objects as shown bellow
// [
//     {},
//     {},
//     {}
// ]

// now we will look into a very famous api that is called as randomuser me , so type randomuserme api in google and we will get the json sample file copy the data 
//----------------------------------------------------
// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }

  // the above data is very difficult to understand 
  // to make it more readable and understandable
  // we can use the json formatter tool to format the above data in a more readable way


  


