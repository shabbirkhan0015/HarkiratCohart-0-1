function printname(firstname, lastname) {
  console.log(firstname + " " + lastname);
}
printname("shabbir", "khan");

function namebasedongender(name, gender) {
  if (gender == "male") {
    console.log("He is " + name);
  } else {
    console.log("She is " + name);
  }
}
namebasedongender("Shabbir", "male");
namebasedongender("Kriti Sanon", "female");

for (var i = 0; i <= 1000; i++) {
  console.log(i);
}
const numbers1 = [1, 3, 5, 67, 8, 85, 44, 7, 30, 54, 21, 42];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}

const numbers2 = [1, 3, 5, 67, 8, 85, 44, 7, 30, 54, 21, 42];
let max = 0;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

const numbers = [1, 3, 5, 67, 8, 85, 44, 7, 21, 42];

for (var i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

const users = [
  {
    firstName: "Shabbir",
    Gender: "Male",
  },
  {
    firstName: "Kriti Sanon",
    Gender: "Female",
  },
];

for (let i = 0; i < users.length; i++) {
  if (users[i]["Gender"] == "Male") {
    console.log(users[i]["firstName"]);
  }
}

function sum(a, b, fncall) {
  let result = a + b;
  fncall(result);
}
// console.log(sum(5, 6));

function result(data) {
  console.log("result of the sum is " + data);
}

function resultPassive(data) {
  console.log("Sum's result is " + data);
}

const ans = sum(4, 5, resultPassive);
