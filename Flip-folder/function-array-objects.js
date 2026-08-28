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
for (let a = 0; a < materials.length; a++)
   console.log(materials[a]);

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
