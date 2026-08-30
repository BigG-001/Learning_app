// (1) ARRAY LENGTH
// Array length tells one how many items are inside an array
let subject = ["English", "Mathematics", "chemistry"];
console.log(subject.length);

// (2) push(); 
// It adds an item at the end of an array.
let food = ["Rice", "Beans"];
food.push("Soup");
console.log(food); 

//(3) unshift()
// This adds an item at the begining of an array 
let fruit = ["Banana", "Pinnaple"];
fruit.unshift("Mango","Orange");
console.log(fruit); 

// (4)pop(),   (5)shift()
// Pop() -> Removes the last items
// shift() -> Remove the first item.

//(4)
fruit.pop();
console.log(fruit);

//(5)
fruit.shift()
console.log(fruit);

// (6) includes()
// Checks wether an array contains something.
// if it conatins an item in the array, it result true, else result false.
let phone = ["Itel", "Iphone", "Samsung"];
console.log(phone.includes("Iphone"));
console.log(phone.includes("Tecno"));

// (7) indexOf() -> Finds the position  of an item in an array
console.log(phone.indexOf("Samsung"));

// (8) slice() -> Get parts of an array without changing the original array.
let result = phone.slice(0, 2);
console.log(result);

//(9) splice()-> It can remove, replace, or add items.
 phone.splice(1, 1); // The first 1 means: Start at index 1. The second 1 means: Remove 1 item.
console.log(phone);


//(10) for loop.

let materials = ["Cement", "Gravels", "Rod"];
for (let i = 0; i < materials.length; i++)
   console.log(materials[i]);

//(11) Maps
//map() creates a new array by transforming every item.
let numbers = [5, 10, 2, 5];
let doubled = numbers.map((number) => number * 2);
console.log(doubled)

// Or
let tripple = numbers.map(function(number){
  return number * 3;
});
console.log(tripple);

let items = ["Pen", "Book", "Pencil", "Erazer"];
console.log(items.join(""));
console.log(items.join(" "));
console.log(items[2]);
console.log(items[items.length -1]);

items.push("Sharpener");
console.log(items);
items.unshift("Crayon");
console.log(items);
console.log(items[1] = "Table"); // This replaced 
console.log(items)
//(2) Change
// solution
// Change name from amanda to adama
function change(string){
  return string.split("").reverse().join("");
}
console.log(change("Amanda"));

//  for loop interation
const total = [40, 10, 4, 28, 19];
let sum = 0;
for (let i = 0; i < total.length; i++){
   sum += total[i];
}
console.log(sum);

// Asigning a for loop to a  function
function motal(){
  const myTotal = [40, 10, 4, 28, 19];
 let sum = 0;
 for (let i = 0; i < myTotal.length; i++){
  sum += myTotal[i];
 }
 return sum;
}
console.log(motal())

// map array using arrow function
const mynum = [1, 2, 3, 4, 5];
let dobled = mynum.map((total) => total * 2);
console.log(dobled)

// forEach() loop
const numb = [1, 2, 3, 4, 5];
numb.forEach(printDouble);

function printDouble(number){
  console.log(number * 2)  
}
// Using the for Each method to tranform strings to upper cass
 const breadfasts = ["Akara", "Pap", "Custard", "Indomie"];
//  breadfasts.forEach((breadfast) => {
//   console.log((breadfast.toUpperCase()));
//  })
 breadfasts.forEach((breadfast, index, array) => {
  console.log((breadfast.toUpperCase()))
  console.log(array[3]);
  console.log(breadfast, array[index +1]); // 
 });

 //       FILTER ARRAY
 // CREATES  a new array by selecting out elements
 let ogNums = [1, 2, 3, 4, 5, 6, 7, 8];
 let evenNums = ogNums.filter(isEven);
 console.log(evenNums);
 
 let oddNums = ogNums.filter(isOdd);
 console.log(oddNums);

 function isEven(even){
  return even % 2 === 0;
 } 

 function isOdd(odd){
  return odd % 2 !== 0;
 }
 // Assuming we are in a class and we want to diff adults from children
 const ages = [16, 17, 18, 19, 20, 60];
 const adult = ages.filter(isAdult);
 console.log(adult)

 function isAdult(element){
  return element >= 18;
 }

 // Create an array that filters words from the original array.
 const ogWords = ["apple", "mango", "banana", "coconut", "cocumber", "watermelon", "pineapple"]
 const shortWords = ogWords.filter(isShortWords);
 console.log(shortWords); 

 const longWords = ogWords.filter(isLongWords);
console.log(longWords)

 function isShortWords(element){
    return element.length <= 6;
 }

 function isLongWords(element){
  return element.length > 6;
 }

 //   find() method
 const colours = ["yellow", "white", "blue", "red", "black"];

 const targetColours = colours.find((element) => element.includes("r"));
 console.log(targetColours);

 // finding an inventory 
 const inventory = [
  { name: "apple", quantity: 2},
  { name: "banana", quantity: 5},
  { name: "watermelon", quantity: 3},
  { name: "pawpaw", quantity: 7}
 ];

 const found = inventory.find((fruit) => fruit.name ==="banana");
 console.log(found);