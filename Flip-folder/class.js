let name = `Godswill`;
console.log(name);

let x;

x = 5;
/* It must start with either  a letter, underscore(_) or a ($)sign.
It can contain digits(0-1) after the first character.
It cannnot be a reserved keyword.
There are case sensitive */
console.log(x);
/*  + - * = % ! $ ^ & */
const isFirstName = "John" /* Constant varable can't be replaced and it has blocked scope.
Const var can be usd wen youre declaring a new array or when declaring a new object, function or regular expression
You can actually change the value of a constant array but cannot be reasigned  */

const y = 15;
console.log(y);/*global scope */
{
  const y = 12;
  console.log(y);/*local scope */
  const x = 5;
  console.log(y+x);

  console.log(y*x);
  
}
console.log(y);

console.log(y<x);

const v = '4';
const c = 4;
console.log(v!=c);
/* ==  
 != 
 ===
 !==
 <
 >
 >=
 <= */


                            /*INTRODUCTION TO  JAVASCRIPT TYPES*/

// Number                             A number representing a numeric value
let length = 16;                        
let weight = 7.5;

// BigInt                                     A BigInt representing a large number of integer
let a = 1234567890123456789012345n;
let b = BigInt(1234567890123456789012345)

// Strings                                       A text of characters enclosed in quotes
let color = "Yellow";
let lastName = "Johnson";

// Boolean                          A data type representing true or false
let e = true;
let f = false;

// Undefined                      	A variable with no assigned value
let g;
let h;

// Null                             	A value representing object absence
let i = null;
let j = null;

// Symbol                           	A unique primitive identifier
const m = Symbol();
const n = Symbol();

// Object                           	A collection of key-value pairs of data
const person = {firstName:"John", lastName:"Doe"};
console.log(person.firstName);
// Array Object
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
// Date Object
const date = new Date("2022-03-25");

/*JAVASCRIPT conditionals */


/*typeof: is an built-in operator used to find the data type of a variable or an expression./
/* Number() function, used in turning values into numbers. we still have more like; 
parseInt("5.5") Return the whole number.
parsefloat("5.5") Return the whole number and decimal fraction 5.5.
+"5" uses the plus sign to turn text into number*/

// let voteAble;

// if (typeof age === "number" && age >= 18) {
// // code to execute if condi1 is true
// voteAble = true;
// } else if (voteAble !== "number") {
//  //cide to execute if condition1 is false and condition2 is true
//  console.log("voteable must be an input");
// } else {
//  // code to execute if the condition1 is false and conditions2 is false
//   voteAble = false;
//  console.log("voters age is not up to 18")
// }
 
/*declare a variable age , use a js functions to make it a number.

Write an if statement to check is age is a number.

declare a variable voteable , if age is a number and it greater than or equal to 18, voteable should be true, else voteable should be false , respond with the message “voter's age is not up to 18”. 

If voteable is not a number , log this message “voteable must be an input" */
let age = Number("10"); 
/*Remember typeof helps identify if a var is a number or string */

   /*This lines tells us that age appear as a string not a number */
// Ask user for their name with a default fallback


console.log(age);
console.log(typeof  age);

if (typeof age === "number" && !isNaN(age)){
  let voteAble;
  if (age >= 18 ){
    voteAble = true;
  }else {
    voteAble = false;
    console.log("Voters age is not up to 18");
  } 
  console.log(voteAble);
}else{
  console.log("voteable must be an input");
}

  let score = 75;

  if(score >= 70){
    console.log("A");
  }else if(score >= 60){
    console.log("B");
  }else if(score >= 50){
     console.log("C");
  }else if(score >= 40){
     console.log("D");
  }else{
     console.log("F");
  }

// Switch statement
// switch(expression) { 
// 	case x:
// 		// code block
// 		break;
// 	case y:
// 		// code block
// 		break;
// 	default:
// }
		// code block

// Write a JavaScript switch statement that checks the value of a variable named fruit.

// Your code must handle the following conditions:If fruit is "banana", log "Bananas are yellow." to the console.

// If fruit is "apple", log "Apples are red." to the console.If fruit is anything else, log "Unknown fruit." to the console

let fruit = "banana";
switch(fruit){
  case "banana":
    console.log("Bananas are yellow");
    break;
  case "apple":
    console.log("Apples are red");
    break;
  default:
    console.log("Unknown code");  
  
}     // LOOP 
// A loop allows a developer repeate code atomatically. 
// for:
// while: 
// do..while:
// for..of:
// for..in:
//                          --EXAMPLE-- forLOOP
   
// for(initializing; codiniton; increment){
  //code to execute;
// }
for(let i = 1; i <= 10; i++){
   if(i===5){
    break;
   }
   console.log("i");
}                   
                                      //let num = "4";

//                       --while---LOOP
// It says keep doing this while this condition is true
let eee = 1;
while(eee <= 5){
  // if (eee===5){
  //   break;
  // }
  console.log(eee);
  eee++;
}      
//                ---do --WHILE---
let me = 10;
 do{
   console.log(me);
   me++;
 }while(me <= 5);

 //              QUESTION:
 //(1) print number from 1 to 20
 //(2) print only even number from 1 to 20
 //(3) Calculate the sum of numbers from 1 to 100

 // solution
//(1.)

  for(let be = 1; be<=20; be++){
   console.log(be)
  }
//(2)

 for(let be = 0; be<=20; be++){
  if(be % 2===0)
  console.log(be)
 }
 //(3)
 
  let totalSum1 = 0;
 for (let ia = 1; ia <= 100; ia++) {
     totalSum1 += ia; // Adds the current number to the total
 }
 console.log(totalSum1); 

 //(4)
 
 for (let c = 1; c <= 5; c++){

  let row = "";

  for (let d = 1; d <= c; d++){
    
    row +="*";
  }
  console.log(row);
 }
 
 //                             -- STRINGS--
 let myName = "godswill";   // -- strings
 console.log(myName); 

 let myWorkPlace = "@85 GRA"; 
 console.log(myWorkPlace);
 
 // (1) string -- length
 console.log(name.length);

 // (2) Accessing Character
 // -- js start counting from 0;
 console.log(name[0]);
 console.log(name[1]);
 console.log(name[2]);
 console.log(name[3]);
 console.log(name[4]);
 console.log(name[5]);
 console.log(name[6]);
 console.log(name[7]);

 let myVilla = "Abot akara";
 console.log(myVilla.toLowerCase())
 // (3) --toUpperCase
 console.log(myName.toUpperCase());

 //(4) --toLowerCase
 let name1 = "GODSWILL";
 console.log(name1.toLowerCase());

 // (5) --  INCLUDES--
 let message = "I love Programming Language";
 console.log(message.includes("Programming"));

 let timeTable = "On monday we have mathematics" ;
 console.log(timeTable.includes("monday"));

 // -- indexOf--
 let word = "JavaScript";
 console.log(word.indexOf("i"));


 console.log(myVilla.slice(0, 4));
 console.log(myVilla);

 // (7) --slice()--
 console.log(word.slice(0, 4));

 // (8) --replace()
 let newMessage = message.replace("Programming", "Php");
 console.log(newMessage);

 // (9) -- TEMPLATE LITERALS
 console.log("Hello " + name); // OR
 console.log(`Hello ${name}`);

 // PRACTICAL QUESTION
 //(1) Find the length of "Frontend Developer"
 // (2) Check whether "I am learning Javascript"  contains "Javascript"
 //(3) Using template literals, print "My name is Bigbrother and I am 20 years old"

 // (1)
 let myWork = "Frontend Developer";
 console.log(myWork.length);

 // (2)
 let project = "I am learning javascript";
 console.log(project.includes("javascript"));

 // (3)
 let nickName = "Bigbrother";
 let myAge = 22;
 console.log(`My name is ${nickName} and i am ${myAge} years old`);

 
 
 //                       ---- NUMBERS -----
 //(1) increment  
 let age1 = 33;
  age1++;
  console.log(age1);

  //(2) decrement
  age1--;
  console.log(age1);

  //                      ---Math -object--
  //(a) Math.round()
  console.log(Math.round(4.5));  // round to the nearest whole number

  // (b) Math.floor()
  console.log(Math.floor(4.9)); // Drops all decimal number down.

  // (c) Math.ceil()
  console.log(Math.ceil(4.1)); // Round up 

  // (d) Math.random(): generate a random number betweeen 0 and less than 1
  console.log(Math.random());
  
  let random = Math.floor(Math.random() * 10) + 1;
  console.log(random);


  let randomN = Math.floor(Math.random() * 10) + 1;
  console.log(randomN);

  // Quest (1)
  // create a program that checks if a number is even or odd
  let randomNa = 12;
  if(randomNa % 2===0){
    console.log("It is even number");
  }else{
    console.log("It is odd");
  }
  // quest (2) Calculates the average of 70 80 90 60 100

  let average = (70 + 80 + 90 + 60 + 100) / 5;
  console.log(average)

  
  //                                  ----FUNCTION-----
  // Functions are reusable blocks of code.
  // imaging having a multiple task, instead of writing codes all the time, we can simply put it inside a function.

  // (A) Creating a Function
   function greet(name) {
    console.log(`Hello! ${name} `);
   }
   greet("Godswill");
 
   // (B) Parameters: It allows us send info into a function
   function place(work) {  // work is the parameter and "market" is the argument
    console.log(`Hello ${name} I am going to ${work}`);
   }
   place("market");

   //(C) Multiple parameters
   function multiply(a, b) {
    console.log(a * b);
   }
   multiply(20, 20);

   // (D) Return: Return send a value back from the function
   function add(a, b) {
    return a + b;
   }
   let result = add(40, 10);
   console.log(result)

   // (E) Arrow function
   // Arrow functions gives a shorter and mordern code writing experience e.g
   
   // Normal function
   function subtract(a, b) {
    return a - b;
   }
   let result1 = subtract(40, 10);
   console.log(result1)

   // Arrow function
   const subtract1 = (a, b) => {
    return a - b;
   }
   let result2 = subtract1(40, 13);
   console.log(result2)

   // shorter version
   const subtract2 = (a, b) => a - b;
   let result3 = subtract2(40, 5);
   console.log(result3)

   //                          QUESTION
   //(1) CREATE A FUNCTION CALLED GREET THAT PRINT WELCOME TO JAVASCRIPT
   //(2) CREATE A FUNCTION THAT ACCEPT A PERSON'S NAME AND PRINT "HELLO ! GODSWILL"
   //(3) CREATE A FUNCTION THAT ACCEPT TWO NUMBERS AND RETURN THEIR SUM
   //(4) CREATE A FUNCTION CALLED isAdult(), IT SHOULD ACCEPT AGE, if age is 18 or above, return true otherwise return false

   // solution

   //(1)
   function greet1() {
    console.log("Welcome to Javascript");
   }
   greet1();

   //(2)
   function mName(name) {
    console.log(`Hello! ${name}`);
   }
   mName("Godswill");

   //(3)
   const adding = (b, c) => b + c;
   let myResult = (20 + 50);
   console.log(myResult)

  function isAdult(age2) {
    if(age2 >= 18){
      return true;
    }else{
      return false;
    }
  }
  console.log(isAdult(20));   
  console.log(isAdult(10));   

  let frstName = "Big"
  let lstName = "brother"
  let desire = "iphone 17proMax"
  let fullName = [frstName + lstName];
  console.log(fullName)

  const fName = `${frstName} ${lstName}`;
  console.log(fName)

  
  console.log(`I want an ${desire}`);
  
  console.log("I want an ${desire}");

  function light() {
    let light = true;
    if(light){
      console.log("There is light");
    }else{
      console.log("There is no light")
    }
  }
  light();

  // create a function parameter called light
  // if there is light, log there is light
  // else log there is no light  

  const play = "I want us to play ball together to win the ball";

  console.log(play.length);

  /*(1)    charAt()  */ 
  console.log(play.charAt(0)) // select single character in a string similar to array;
  console.log(play[0]) // array

  //(2) indexOf()  (3)lastIndexOf()
  
  /*(2)*/ console.log(play.indexOf("ball"));   //checks from left to right  
  /*(2)*/ console.log(play.indexOf("ball", 19)); // two ball, checks the next ball after the first ball. 

  /*(3)*/ console.log(play.lastIndexOf("ball")) // checks from right to left 
  /*(3)*/ console.log(play.lastIndexOf("ball", 42 )) // checks from the last to the first
  
  /*(4)*/ console.log(play.slice("")); // nothing to slice, 
  console.log(play.slice(2, 14)); // 2: is th first parameter, 14: second parameter for position 
                                  // (2, 14): means slice from 2 and end at 14;
  console.log(play.slice(9, 4));  // it does not slice from right to left (It returns an empty string ('')
 
  /*(5)*/console.log(play.substring("")); // shares common similarities with slice();
  console.log(play.substring(9, 4)) // 

 //  write a simple function that enters my name and call the function
 function myNme(varName) {
  console.log(varName);
 }
  myNme("Godswill");

  //converts farenheit to celsius
  // \(^\circ\text{C} = (^\circ\text{F} - 32) \times \frac{5}{9}\) 
  function perCelsius(f) {
    return 5 / 9 * (f - 32);
    
  }
  let farenheit = perCelsius(6);
  console.log(farenheit);

  function sayHello() {
    return "Hello World"; 
  }
  let text = sayHello;  // Reference the function
  console.log(sayHello()); // Called the function
  console.log(text);

  // write a function that accept 3 para a b c and return the result
  function  tuff(a, b, c = 30) {
    return a + b + c;
  }
   
   console.log(tuff(50, 2, ));
   // Early return
   
    function checkAge(age) {
      if(age < 18 ){
        return "Too young";
      }
      return "Old enough";
    }
    console.log(checkAge(12));
    console.log(checkAge(19));

    //Write an array give it 5 numbers , write a function to sum all the numbers for...loops

    
    function myNum() {

      const numbers = [20, 10, 30, 15, 10]; // An array with 5 numbers
        let sum = 0;
      for (let e = 0; e <numbers.length; e++){  // Using a for..loop to sum the array
       sum += numbers[e];
       
      }
      return sum;   // Use the return to stop the execution
     }
    
    console.log(myNum())  // Calling the function

    
      // const numbers = [20, 10, 30, 15, 10];

      // let sum = 0;
      // for(let e = 0; e < numbers.length; e++){
      //   sum += numbers[e];
      // }
    
      // console.log(sum);


                //  FUNCTION EXPRESION
    // A FUNCTION EXPRESSION ->   is a function stored inside a variable.
    
    // Expresion (1)
    const protect = function() {
      return "I protect myself from harm";
    } 
    console.log(protect());

    // called an EXPRESSION -> Because the function is being used as a value and assigned to a variable
    // Expresion (2)
    const protcct = function() {
      console.log("I protect myself from harm");
    }
    protcct();

      // Expresion (3)
      const greetYou = function(name) {
        console.log(`Hello ${name}`);
      } 
      greetYou("Godswill");


      function run(fn) {
        return fn(); //A function expression can be assigned to a variable , passed as an argument to another       function, or returned from a function
      } 

      const sayHi = function() {
        return "Hi";
      }
      console.log(run(sayHi));

    //                                ARROW FUNCTION
    // ARROW FUNCTION -> It is the modern and standard method used in writing functions in JS, it makes it easier to read and shorter write.
    
    // EXAMPLE (1)
      const greetMe = (name) => {
        console.log(`Hello Mr ${name}`);
      }
      greetMe("Allen")
      // EXAMPLE (2)
      const multiply1 = (a, b, c) => {
        return a * b * c;
      }
      console.log(multiply1(10, 20, 50));

      //                  JAVASCRIPT SPREAD OPERATOR
      // It allows you to spread out the elements of an array or the properties of an object.

      // EXAMPLE (1)
      const fruits = ["Apple, Mango, Banana, Pawpaw"];
      
      const newFruit = [...fruits];
      console.log(newFruit);

      // EXAMPLE (2)
      //Adding more items to the array

      const myFruit = ["Apple, Mango, Banana, Pawpaw"];
      const myFruits = [...myFruit, "Orange", "Carrot"];
      console.log(myFruits)

      
      // EXAMPLE (3)
      // Adding objects into the Array
        const myGuy = {
          name: "Godswill",
          age: 20
        };

        const myFriends = {
            ...myGuy
        };

        console.log(myGuy);
                    // REST PARAMETERS
      //A rest parameter allows a function to accept any number of arguments and collect them into an array.
      //It uses the same three dots ...:
      // N/B: spread = unpack things,    Rest = collect things;

      
      // Hoisting => Function declarations can be called before it's being defined.
      //N/B Function expression can not be hoist.

      let multipli = multiplication(1, 4) 
         console.log(multipli);
       function multiplication(a, b){
         return a * b;
       } 
      
       // ES6 Syntax.