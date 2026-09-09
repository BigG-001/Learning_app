// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => console.log(response))
//   .catch(error => console.error(error));

// Diff btw synchronous asynchronous
// sync => javascript does things one after the other.
console.log("A");
console.log("B");
console.log("C");

// async let js start something and continue doing other things while that thing is still pending.
console.log("A")

setInterval(() => {
  console.log("B");
}, 2000);

console.log("C");