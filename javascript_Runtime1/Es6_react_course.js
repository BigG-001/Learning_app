//object destructuring
const userInformation = {
  firstName: "Mathew", 
  lastName: "Udoka",
  contry: "Nigeria",
  Tel_No: "08103847225"
}

const {firstName: fn, lastName: ln} = userInformation
console.log(`${fn} ${ln}`);

// Destructuting an Array
// remember When assigning to a constant variable, the variable cannot be changed in the future.
let name = ["mike", "joseph", "mathew"];
// const [firstName, middleName, lastName] = name
//   middleName = "victoria"; didn't work because wehad assigned it to a constant variable 
let [firstName, middleName, lastName] = name;
console.log(lastName)
middleName = "Victoria";
console.log(middleName)

                    //   (3)  Object literals
                    // It is a syntax for declaring and creating object directly using curly braces{}.  It is the simplest and most common way to define an object, allowing you to write out a comma-separated list of key-value pairs (properties and methods) in a single declaration
        function userAddress(city, state){
          const newAddress = {city, state};
          console.log(newAddress);
        }
        userAddress("Uyo", "Akwaibom")

                //(4) Object literal challenge
                // Combining template literal, object literal and destructuring together
          function addressMaker(address){
            const {city, state} = address    
            const newAddress = {
              city,//: address.city,
              state,// address.state,
              country: "Nigeria"
            };
            console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
          }
          addressMaker({city:"uyo", state:"Akwa Ibom"})

          //       (5) for loop on strings
          let fullName = "Godswill Effiong Udofia";

          for (const char of fullName){
              console.log(char);
          }

          //for loop of array
          let incomes = [8000, 3500, 2000, 6000];
          let total = 0;
          for (const income of incomes){
              console.log(income)
              total += income;
          } 
          console.log(total)

          // Spread operator
          let example1 = [1,2,3,4,5,6,7,8,9,0];
          let example2 = [... example1];
          example2.push(true);
          console.log(example2);

          // Rest operators Used to wen we don't  really Know the input we have
          // function add(...num){
          //   console.log(num);
          // }
          // add(4, 2, 4, 6, 12);

          // introducing rest operator to the rest oprator
          function add(...num){
            let total = num.reduce((x, y) => x + y);
            console.log(total)
          }
          add(4, 2, 4, 6, 12);

         let schoolBag = {
          item1: "Books",
          item2: "Pen",
          item3: "Pencil",
          item4: "money"
         };
         
        //   for (const key in schoolBag){
        //   console.log(`${key}, ${schoolBag[key]}`)
        //  }
         

        //  //const user = { name: 'Alice', age: 25 };
        // for (const key in user) {
        //   console.log(key, user[key]); // Logs keys and their values
        //   }