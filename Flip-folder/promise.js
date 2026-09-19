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

// promise declaration
const promise = new Promise((resolve, reject) => {
  // logic
  //return the state
  if(success){
    resolve(value);
  }else{
    reject(error);
  }
})