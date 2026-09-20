// function getUsers(){
//     return [
//       {username: "Godswill", email: "guddys@gmail.com"},
//       {username: "Mathew", email: "mat222@gmail.com"}
//     ];
// }
// function findUser(Username){
//   let users = getUsers();
//   let user1 = users.find((user) => user.username === Username);
//    return user1;
// }
// console.log(findUser("Godswill"))
// //  console.log(getUsers())

function getUsers() {
  return [
      {username: "Godswill", email: "guddysax@gmail.com", gender: "male"},
      {username: "Blessing", email: "bless92@gmail.com", gender: "female"},
      {username: "Favour", email: "favguy56@gmail.com", gender: "female"},
      {username: "Christian", email: "chris12@gmail.com", gender: "male"}
  ];
}

function findUser(entryName){
  let users = getUsers();
  let eachUser = users.find((user) => user.username === entryName);
  return eachUser;
}
console.log(findUser("Favour"))



// Callback = A callback is a function that is passed as an argument to another function
//             used to add asynchronous operations
//             1 reading a file
//             2 Network request 
//             3 Iteracting with database 
//              "Hey, when you're done, call this next = (e.g when you're done reading the file, show the content)"


 // promise declaration
//  const promise = new Promise((resolve, reject) => {
//    // logic
//    //return the state
//    if(success){
//      resolve(value);
//    }else{
//      reject(error);
//    }
//  })
 // three ways to consume a promise
 // (1)then (2)catch (3)finaly
 // A promise: once it changes the state from pending, it can be changed again
 // then() method: It accept two callback function 
 // (i) onFulfilled (ii) rejected  ---- parameter
 

//  function parameter when declaring 
//       aguement when calling 

function getEnemies(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve([
              {username: "Godswill", email: "guddysax@gmail.com", gender: "male"},
              {username: "Blessing", email: "bless92@gmail.com", gender: "female"},
              {username: "Favour", email: "favguy56@gmail.com", gender: "female"}
            ])
        }, 10000)
    });
}
 function onFufilled(users){
     console.log(users);
  
 }
function onRejected(error){
     console.log(error);
  
 }
 
let promise1 = getEnemies();
promise1.then(
  (users) => console.log, 
  (error) => console.log
)
