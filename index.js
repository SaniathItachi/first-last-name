let fullName = window.prompt("Enter your name");
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log("firstName is",firstName);
console.log("lastName is",lastName);