// Practical task
// String, RegExp, DateTime Practical Task

//1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const textStr = 'ahb acb aeb aeeb adcb axeb';
const re = /a.b/g;
const matched = textStr.match(re);
//console.log(matched);

//2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const textStr0 = '2 + 3 223 2223';
const re0 = /2 \+ 3/;
const matched0 = textStr0.match(re0)
//console.log(matched0);

//3. Get the day, month and year of the current date and output it to the console separately
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
console.log('Day:', day);
console.log('Month:', month);
console.log('Year:', year);
