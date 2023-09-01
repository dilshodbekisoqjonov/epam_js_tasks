// Practical task
// Arrays and Cycles Practical Task
 //1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const movies = ['Spider-Man: Across the Spider-Verse', 'Spider-Man: No Way Home', 'Spider-Man: Far From Home', 'Spider-Man: Into the Spider-Verse', 'Spider-Man: Homecoming'];

movies.forEach((name => console.log(name)));

// 2. Given an array of car manufacturers, convert the array to a string and back to an array
const cars = ['Tesla', 'Kia', 'Lexus', 'Volswagen'];

//Convert array to string
let carStr = '';
for (let i = 0; i < cars.length; i++) {
  carStr += cars[i];
  if (i != cars.length) {
    carStr += ',';
  }
  
}
//console.log(carStr);

//Convert string back to array
const carsArr = [];
let currentCar = '';
for (let i = 0; i < carStr.length; i++) {
  if (carStr[i] === ',') {
    carsArr.push(currentCar);
    currentCar = '';
  }
  else {
    currentCar += carStr[i];
  }
  
}

//console.log(carsArr);

//3. Given an array of the names of your friends, add the words hello to each element of the array
const friendNames = ['Abdugani', 'Maqsudjon', 'Murodjon', 'Samandar'];
const arrOfNamesWithHello = [];

friendNames.forEach((friendName) => arrOfNamesWithHello.push('Hello ' + friendName));
//console.log(arrOfNamesWithHello);

//4. Convert numeric array to Boolean
const numArr = [0, 1, 2, 3, 4];
const boolArr = numArr.map((num) => Boolean(num));
//console.log(boolArr);

//5. Sort the array [1,6,7,8,3,4,5,6] in descending order
const arr = [1, 6, 7, 8, 3, 4, 5, 6];
arr.sort((a, b) => b - a);
console.log(arr);

//6. Filter array [1,6,7,8,3,4,5,6] by value> 3
const givenArr = [1, 6, 7, 8, 3, 4, 5, 6];
const arrOfValuesGreaterThan3 = givenArr.filter((num) => num > 3);
console.log(arrOfValuesGreaterThan3);

//7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function findIndex(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return 'not found';
}
const array = [1,2,3,7,8]
const number = 10;
//console.log(findIndex(array, number));

// 8. Implement a loop that will print the number 'a' until it is less than 10
let a = 0;

while (a<10) {
  console.log(a);
  a++
}

//9. Implement a loop that prints prime numbers to the console
const start = 2;
const end = 1000;

for (let number = 0; number < end; number++) {
  let isPrime = true;
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number %i === 0) {
      isPrime = false;
      break;
    }
    
  }
  if (isPrime) {
    console.log(number);
  }
}

//10. Implement a loop that prints odd numbers to the console
const startOdd = 2;
const endOdd = 1000;

for (let number = 0; number <= endOdd; number++) {
  if (number % 2 !=0) {
    console.log(number);
  }
  
}
