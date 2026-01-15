// basic exercises 
console.log("================================");
console.log("basic exercises"); 
console.log("================================");
let fruits = ["mango", "apple","orange"]; 
console.log(fruits); 
fruits.pop(); 
console.log(fruits); 
fruits.push("orange")
console.log(fruits); 
fruits.shift(); 
console.log(fruits); 
fruits.unshift("mango"); 
console.log(fruits); 
fruits.push("banana", "grape", "pineapple"); 
console.log(fruits); 
fruits.shift(); 
console.log(fruits); 
console.log("================================");

// Challenge: Create a class roster system that can add and remove students.
console.log("Challenge: Create a class roster system that can add and remove students."); 
console.log("================================");
let students = ["Trish", "Ysa", "Reeva", "Ceana"]; 
students.push("Emma"); 
console.log(students); 
students.pop(); 
console.log(students); 
let removed = students.shift(); 
console.log(students); 
console.log(removed); 
let length = students.length; 
console.log("Number of Students: " + length); 
//show each student 

for (let i = 0; i < students.length; i++){
  console.log(students[i]); 
}
console.log("================================");
console.log("Essential Array Methods"); 
console.log("================================");

let grades = [10, 20, 30, 40, 50]; 
console.log("==================");
console.log("forEach() Method: "); 
console.log("==================");
grades.forEach(function(grade, index){ console.log((index + 1) + "." + "Here's your grade: " + grade)}); 
// basically arrayname.forEach(function(anyfunctionname){ function stuff }); 
console.log("==================");
console.log(".map() Method: "); 
console.log("==================");
let prices = [60, 70, 80, 90, 100];
console.log("Prices: " + prices); 
let withDiscount = prices.map(function(price){ return price - 20 }); 
console.log("With Discount: " + withDiscount);
console.log("==================");
console.log(".filter() Method: "); 
console.log("==================");
// parang .find() which finds 1st match
let inBudget = withDiscount.filter(function(wd){ return wd <= 60 }); 
console.log("In Budget: " + inBudget); 
console.log("==================");
console.log("Combination: "); 
console.log("==================");

let scores = [70, 85, 65, 90, 78, 92];
// Filter passing scores, then add 5 bonus points
let result = scores
    .filter(function(score) { return score >= 75})
    .map(function(score) { return score + 5 });
// basically since walang ; nakaconnect ung .filter and .map sa scores ONLY PUT ; SA END
console.log("Original: " + scores);
console.log("Passed with bonus: " + result);

let passing = scores.filter(function(score){ return  score => 75})
console.log("Og: " + scores); 
console.log("Passing: " + passing); 
let withBonus = passing.map(function(pass){ return pass + 5})
console.log("Bonus: " + withBonus); 

console.log("================================");
console.log("Advanced Array Methods"); 
console.log("================================");

let index = scores.findIndex(function(score){ return score === 90})
console.log(index)
let summ = scores.reduce(function(sum, score){ return sum + score }, 0); 
// will give sum
// the ,0 will be the value for sum at the start

console.log(scores.includes("90")) // true cause .includes is boolean