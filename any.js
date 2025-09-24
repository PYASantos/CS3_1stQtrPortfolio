for (let i = 1; i <= 3; i++){
    console.log(i)
}

i = 1; 
while (i <= 3){
    console.log(i)
    i++
}

i = 1; 
do {
    console.log(i); 
    i++; 
} while (i <= 3)

fav_fruits = ["mango" , "banana" , "apple"]; 
fav_fruits.push("strawberry")
var popped = fav_fruits.pop()

var shifted = fav_fruits.shift()
fav_fruits.unshift("kiwi")

console.log(popped, shifted)

for (let i = 0; i < fav_fruits.length; i++){
    console.log(fav_fruits[i])
}

for (fruit of fav_fruits){
    console.log(fruit)
}

fav_fruits.forEach(print_fruit)

function print_fruit(fruit){
    console.log(fruit)
}

grades = [90, 88, 99, 98, 97]

sum = 0
avg = 0 
for (let i = 0; i < grades.length; i++){
    sum += grades[i]
    avg = sum / i 
    avg = sum / i 


}

console.log(sum)
console.log(avg)

//console.log(Math.min(...grades))
// ... -> spreader operator? 
min = 100000000000
for (i = 0; i < grades.length; i++) {
    if (grade < min){
        min = grade
    }
}
console.log(min)

min = -100000000000
for (i = 0; i < grades.length; i++) {
    if (grade > max){
        max = grade
    }
}
console.log(max)

// the one below are strings so no 

grades.push(100,20)
grades.sort()
grades.sort(sort_rules)
function sort_rules(a,b){
    return a-b
}
// or 
grades.sort((a,b) =>   a- b)

console.log(grades)