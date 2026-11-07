// Variables and data types
let unit = "SIT725";
const year = 2026;
let isEnrolled = true;
console.log(`Unit: ${unit}, Year: ${year}, Enrolled: ${isEnrolled}`);

// Function
function add(a, b) {
  return a + b;
}
console.log("5 + 3 =", add(5, 3));

// Arrow function
const square = (n) => n * n;
console.log("Square of 4 =", square(4));

// Array and loop
const tech = ["JavaScript", "Node.js", "HTML", "CSS", "Git"];
for (let i = 0; i < tech.length; i++) {
  console.log(`${i + 1}. ${tech[i]}`);
}

// Conditional
const mark = 85;
if (mark >= 80) console.log("High Distinction");
else if (mark >= 70) console.log("Distinction");
else console.log("Keep going!");

// Object
const student = { name: "YOUR NAME", id: "s1234567", unit: unit };
console.log(student);