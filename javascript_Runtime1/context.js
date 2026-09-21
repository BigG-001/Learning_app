// Execution Context
// two execution context
// 1 creation 2 execution
const number = 10;

function timesTen(event){
  return event * 10;
}
let y = timesTen(10);
console.log(y);
console.log(global)

// Create the global object i.e., window in the web browser or global in Node.js.
// Create the this object and bind it to the global object.
// Set up a memory heap for storing variables and function references.
// Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined

// callstack is a mechanism used by js to keep track of all the functions 


//Introduction to JavaScript Call Stack 
// A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. It has information on what function is being run and what functions are invoked from within that function.

// The JavaScript engine also uses a call stack to manage execution contexts:

// The global execution context
// Function execution contexts
// The call stack works based on the last-in-first-out (LIFO) principle.

// When you execute a script, the JavaScript engine creates a global execution context and pushes it on top of the call stack.

// Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.

// If a function calls another function, the JavaScript engine creates a new function execution context for the function being called and pushes it on top of the call stack.

// When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.

function twoValue(a, b){
  return a + b;
}

function average(a, b){
  return add(a,b)/2;
}
function add(a, b) {
    return a + b;
}
let sum = console.log(average(10, 15));
