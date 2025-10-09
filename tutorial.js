// The code below is used to automate methods like button, so you do not have to be repetitive
document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("this is good ");
  });
});

// use this to declare variables,
let name_1 = "Jessy";

//declaring multiple variables
let house_name, postcode, description;

house_name = "19 manor mount";
postcode = "SE23 3PY";
description = "Basement Flat";
console.log(house_name, postcode, description);
console.log(name_1);

/* 
Rules for writing Variables 
Can cotain digits
must start with letter, $ or underscore
no keyword
cannot start  with number
case sensitive - fullname vs Fullname are not same
camelCase or underscore 

*/

// using const (constant)- cannot re-assign the used variable
const last_Name_1 = "Jordan";
// using let : you can always reassign a variable
let first_name_1 = "kolawole";

//

let firtName_1 = "kbaba";
let last_Name_2 = "Olanipekun";

console.log(firtName_1);
console.log(last_Name_2);

// Numbers & Arithmetic operations
//+=, -=, /=, *=, ++, --, %
// Modulus (%) operator returns the remainder after integer division
let number = 40;
number += 5;
number++;

console.log(number);

// Data Types
//primitive data types : STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL
//object data types: ARRAYS, FUNCTIONS, OBJECTS,

// typeof : typeof operator used to find the type of operator. (typeof variable), (typeof value)

// string
let txt = "some_text";
//Number
let nub = 56;
// Boolean
let value1 = true;
let value2 = false;
// Null
let result = null;

// Undefined
let nam;
// Symbol(ES6)

console.log(txt);
console.log(nub);
console.log(value1);
console.log(value2);
console.log(result);
console.log(nam);

// Arrays - [], arrays are 0 index based
let friends = ["john", "peter", "walexbiz", "malik"];
/* you can reassign an array value to a variable

   you can reassign an existing array value to another value 
   
   
   */
console.log(friends[0]);

//Functions
function hello() {
  //logic
  console.log("how are you?");
}
/*  
function  
--return statement is key and more dominant than console log,
---if you need a response from a function, then give it what to return 
---- 
*/
//CALCULATE AREA CHALLENGE
let width = 10;
let length = 15;

function area(val1, val2) {
  return "The area of the shape is  " + val1 * val2;
}
let area1 = area(width, length);
console.log(area1);

//function expression using variables does not need a function name
//it is called an anonymous function
let area2 = function (val1, val2) {
  return "The area of the shape is  " + val1 * val2;
};
console.log(area2(width, length));

//comparision operators
// >, <, >=,<=, ==, ===, !=, !==(this is a strict operator to check not equal to value and type)

//Conditional statement
//note how exclamation mark is used with parameters
let val1 = false;

if (!val1) {
  console.log("The opposite value is True");
}

//template conditional statement
let num1 = 7;
let num2 = 6;
if (num1 > num2) {
  console.log("it is bigger");
} else if (num1 == num2) {
  console.log("these values are equal");
} else {
  console.log("The other value is equal");
}

//Equality
// num1 == num2 : means you are checking if the values are equal
// num1 === num2 : means you are checking if the values and typeof are equal

num1 = 6;
num2 = "6";
let value = num1 == num2;
let value0 = num1 === num2;

// Logical operators
// || means 'OR, (&& means AND)

if (num1 == 6 || typeof num1 == int) {
  console.log("numbers in good state");
}

// switch statement
let dice = 3;
switch (dice) {
  case 1: // add condition here
    console.log("you got one");
    break;
  case 2:
    console.log("you got two");
    break;
  case 3:
    console.log("You got three");
    break;
  default:
    console.log("you did not roll the dice");
}

// whule loop
let amount = 10;

while (amount > 0) {
  console.log("I have $ " + amount + "  in my wallet");
  amount--;
}

// do while loop : used to execute an action atleat once
let amount2 = 5;
do {
  console.log("you have got " + amount2 + " in my account");
  amount2++;
} while (amount2 < 7);

// for loop
let i;
for (i = 0; i < 10; i++) {
  console.log("The number is :   " + i);
}

// methods in strings
let text = "The code challenge ";
let result1 = text.length;
console.log(result1);

let name2 = "David";
console.log(name2.length);
console.log(name2.charAt(1));
console.log(name2.charAt(name2.length - 1));

//Some string methods include
console.log(name2.trim().toUpperCase().startsWith("D"));
//NOTE
// the charat value for the last character is 4,
//however, if the value changes it will not give the last character, hence we have to use the length method.

/* Javascript Mehods and Properties 

-- WHen you define a string , you have various methods that can be used alongside the string 
e.g var name = 'kola', name.length. 'length here is a method for the string stored in the variable name
--- if you create an object, you can use a dot notation to attach methods to the properties of the object 
e.g let data = {
title : 'wpf_data',
columns: 5,
share() {
console.log('show data)}


}
data.title is an example of calling the title property of the data property.
while data.share() is calling the share method of the data property

*/

// Template literals & interploation ${}

house_name = "19 manor mount";
postcode = "SE23 3PY";
description = "Basement Flat";
console.log(house_name, postcode, description);

// instead of this
console.log("My house address is " + house_name + " " + postcode);

// Do this instead
console.log(
  `My house address is ${house_name} ${postcode}. it is ${
    2 + 2
  } metres away from the bus stop`
);

// if you decide to pass in arguemnts in a function without order, do the following

function call_me({ firstname, LastName }) {
  let fullname = `${firstname} ${LastName}`;
  return fullname.toUpperCase();
}

console.log(call_me({ firstname: "kola", LastName: "David" }));

// Array properties and methods
let array1 = ["john", "peter", "emeka"];
let array2 = ["tobi", "segun", "silas"];
//length
console.log(array1.length);
console.log(array1[array1.length - 1]);
console.log(array1.concat(array2));

// Further string methods and properties
let sentence = "The consistensy in learning";
console.log(sentence.trim().toUpperCase().startsWith("THE"));
console.log(sentence.slice(1, 2));

// Template Literals


/* 
Call back function is the function that is being passed insdie a higher order function 

Higher order function : The function that receives the call back function 

To apply call back function, create one higher order function and multiple call back function 

  */

/*   
Array iterators
-forEach, 
-map
-filter
-find
-reduce

The above iterators methods, helps iterate through an array 
*/

/* forEach 
Note : does not return new array
*/

/* map
note: returns new array 

*/
/*   
filter
does not return a new array , can manipulate size of array , returns based on condition 

*/

/* find  
returns a single object, returns first match, if no match undefined
' great for getting unique value 

*/


/* reduce
-iterates, callback function
-reduces to a single value -number, array, object
-1 paramter('acc') - total of al calculations
- 2 paramter ('curr') - current iteration/value
*/
