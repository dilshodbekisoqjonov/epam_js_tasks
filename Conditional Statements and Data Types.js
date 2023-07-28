// Practical task
// Conditional statements and Data types Practical task 

// 1. Perform addition of various types (string + boolean, string + number, number + boolean)

//string + boolean
let myName = 'Dilshodbek';
let iAmDeveloper = false;
let addStrBool = myName + ' ' + iAmDeveloper;
console.log(addStrBool); // "Dilshodbek false"

//string + number
let mySurname = 'Isokjonov';
let myAge = 18;
let addStrNmb = mySurname + ' ' + myAge;
console.log(addStrNmb); // "Isokjonov 18"

//number + boolean
let myFavoriteNmb = 7;
let iHaveMacBook = true;
let addNmbBool = myFavoriteNmb + ' ' + iHaveMacBook;
console.log(addNmbBool); // 8


// 2. Perform multiplication of various types(string * boolean, string * number, number * boolean)

//string * boolean
let myFriendName = 'Jony';
let myFriIsDeveloper = false;
let mltpStrBool = myFriendName * myFriIsDeveloper;
console.log(mltpStrBool); // NaN

//string * number
let myFriSurname = 'Volkov';
let myFriAge = 18;
let mltpStrNmb = myFriSurname * myFriAge;
console.log(mltpStrNmb); // NaN

// number * boolean
let myFriFavoriteNmb = 7;
let myFriHasMacBook = false;
let mltpNmbBool = myFriFavoriteNmb * myFriHasMacBook;
console.log(mltpNmbBool); //0



// 3. Divide different types (string / boolean, string / number, number / Boolean)

//string / boolean
let myStr = 'hellooo!';
let myBool = true;
let divStrBool = myStr / myBool;
console.log(divStrBool); // NaN

//string / number
let myNmb = 10;
let divStrNmb = myStr / myNmb;
console.log(divStrNmb); // NaN

// number / boolean
let myBool2 = false;
let divNmbBool = myNmb / myBool2;
console.log(divNmbBool); // Infinity


// 4. Perform explicit conversion (number, string, boolean)

// Convert to number
let number1 = '2004';
let add = number1 + 1;
let sub = number1 - 1;
let mltp = number1 * 2;
let div = number1 / 2;
console.log(add, sub, mltp, div); //20041 2003 4008 1002

let number2 = Number('2004');
let addCon = number2 + 1;
console.log(addCon); // 2005

let number3 = Number('hey!'); // NaN
let number4 = Number(true); // 1
let number5 = Number(false); // 0


// Convert to string
let str1 = String(123); // "123"
let str2 = String(true); // "true"
let str3 = String(false); // "false"


// Convert to boolean
let bool1 = Boolean('U ok?'); // true
let bool2 = Boolean(0); // false
let bool3 = Boolean(null); // false
let bool4 = Boolean(undefined); // false
let bool5 = Boolean(NaN); // false
let bool6 = Boolean(333); // true