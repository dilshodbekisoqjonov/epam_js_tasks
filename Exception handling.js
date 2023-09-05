// Practical task
// Exception handling Practical Task

//In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'

try {
  console.log(a);
  let a = 3;
} catch (error) {
  console.log('Error: let must be declared before use');
} 



let denom = 0;
try {
  if (denom === 0) throw new Error('Cannot be divided by zero'); 
  let result = 1 / denom;
} catch (error) {
  console.log('Error:', error.message);
}