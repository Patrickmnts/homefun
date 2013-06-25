//A function that says hello world.
function helloWorld() {
  return "Hello world!";
}

// A function to practice creating our own matchers.
function gimmeANumber() {
  return 80;
}

// Begin learning about spies.
var Person = function() {};

Person.prototype.helloSomeone = function(toGreet) {
  return this.sayHello() + " " + toGreet;
};

Person.prototype.sayHello = function() {
  return "Hello";
};

// Spying on an existing function that I modify
var Person = function() {};

Person.prototype.helloSomeone = function(toGreet) {
  return this.sayHello() + " " + toGreet;
};
Person.prototype.sayHello = function() {
  return "Hello";
};