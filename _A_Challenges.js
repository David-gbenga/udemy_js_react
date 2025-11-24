// using const (constant)- cannot re-assign
const last_Name = "Jordan";
// using let : you can always reassign a variable
let first_name = "kolawole";

//variables
let firtName = "kbaba";
let last_name = "Olanipekun";

let address = "webley line ";

address = "station_2";

console.log(firtName);
console.log(last_name);
console.log(address);

// Concatenate strings
let street = "osogun";
let country = "Vietnam";
let fullMailingAddress = street + " " + country;

console.log(fullMailingAddress);

//numerical challenge
let score1 = 10;
let score2 = 20;
let score3 = 30;
let total_score = score1 + score2 + score3;
let average_score = (score1 + score2 + score3) / 3;
console.log(total_score);
console.log(average_score);

// Array challenge
let fruits = ["orange", "apple", "bannana", 7];
let fruit1 = fruits[0];
fruits[3] = "pear";
console.log(fruits);
console.log(fruit1);

// function challenge
function hello(name) {
  console.log("hello there " + name);
}

hello("bob");
hello("anana");
hello("susy");

//Object Challenge

let car = {
  make: "BMW",
  model: "250E",
  year: "2020",
  colors: ["black", "blue", "navy blue"],
  hybrid: true,
  drive() {
    console.log("move car ");
  },
  stop() {
    console.log("stop the car");
  },
};

console.log(car.make);

console.log(car.colors[0]);

car.drive();

car.stop();

// QUick note on arrow functions
mutiply_code = (num1, num2) => {
  return num1 * num2;
};

// strings challenge

// (a) javascript cannot tell which is firstName or lastName in the output, it just follows the order of arrangement
/*
function fullName(firstName, lastName) {
  let nami = `${firstName} ${lastName}`;
  return nami.toUpperCase();
}

console.log(fullName("ada", "emma"));
 */

//(b) javascript can tell which is which
//this arrangement ensures each parameter can be directed to specific variables.
//when the function is invoked
function fullName({ firstName, lastName }) {
  let nami = `${firstName} ${lastName}`;
  return nami.toUpperCase();
}

console.log(fullName({ lastName: "kola", firstName: "David" }));

// Array Exercise
array1 = ["kola", "Jane", "Asher"];
array2 = ["olanipekun"];
let full_name = [];
for (let i = 0; i < array1.length; i++) {
  full_name.push(`${array1[i]} ${array2}`);
}

console.log(full_name);

//sum total
gas = [20, 30, 45];
food = [40, 60, 100];

// function for inch converter
function inch_to_cm(inch) {
  return inch * 2.54;
}

console.log(inch_to_cm(10));

function total_exp(arr) {
  let total_val = 0;
  for (let i = 0; i < arr.length; i++) {
    total_val += arr[i];
  }
  if (total_val > 200) {
    console.log("Expenses above budget");
  } else {
    console.log("Within budget");
  }
  return total_val;
}

console.log({
  gas_val: total_exp(gas),
  food_val: total_exp(food),
});
