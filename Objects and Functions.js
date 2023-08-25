// Practical task
// Objects and functions practical task 

// - Create a car object, add a color property to it with the value equals 'black'

const car = {
  color: "black",
};

// - Change the color property of the car object to 'green'
car.color = "green";

// - Add the power property to the car object, which is a function and displays the engine power to the console

car.power = function (power) { console.log(power); };

// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
function totalAccFruits(pears, apples) {
  return pears + apples;
};

// - Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

function defNameInTerminal(name) {
      if (name) {
        return "Hello, " + name + "!";
      } else {
        return "There is no such name.";
      }
};


// - Write a function for calculating the type of argument and type output to the console

const calc = function (arg) {
  console.log("Argument", arg);
  console.log("Type:", typeof arg);
};

// - Write a function that determines whether a number is prime or not
function isPrime(num) {
  if (num <= 1) { return false; };
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
   
      return true;
    
}