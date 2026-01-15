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

console.log('hey strontium!!!')

// gma - 7 
// abs-cbn - 2
// tv5 - 5
// ibc - 13 
// ptv - 4 

rl = require('readline')
rli = rl.createInterface({
    input: process.stdin,
})
rli.on('line', give_station)

function give_station(num) {
    switch (Number(num)) {
        case 7:
            console.log('gma' + '- 7')
            break
        case 2:
            console.log('abs-cpn' , '2')
            break
        case 5:
            first_letter = "t"
            console.log(`${first_letter}v5 - 5`)
            break
        case 13: 
            console.log('ibc - 13')
            break
        case 4:
            console.log('ptv - 4')
            break
        default:
            console.log('Unknown Station')
    }
}

let a = "";  
for (let i = 0; i < 5; i++){
    for (let j = 0; j < (i + 1); j++){
        a += "*";
    }
    a += "\n";

}
console.log(a);

console.log("\n");

let b = "";  s
for (let i = 1; i <= 5; i++){
    for (let j = 0; j < i; j++){
        b += "*";
    }
    b += "\n";
}
console.log(b);

console.log("\n");

let c = "";
for (let i = 5; i > 0; i--){
    for (let j = i; j > 0; j--){
        c += "*";
    }
    c += "\n";
}
console.log(c); 

console.log("\n");
/*
*****
*****
*****
*****
*****
*/

let d = ""; 
for (let i = 0; i < 5; i++){
    for (let j = 1; j <= 5; j++){
         d += "*";
}
 d += "\n";
}
console.log(d); 

process.stdin.on('data', input => {

  let greeting = input.toString().trim();

    switch (greeting) {
        case HELLO:
            console.log('ENGLISH')
            break
        case MABUHAY:
            console.log('TAGALOG')
            break
        case HOLA:
            console.log('SPANISH')
            break
        case HALLO: 
            console.log('GERMAN')
            break
        case BONJOUR:
            console.log('FRENCH')
            break
        case CIAO:
            console.log('ITALIAN')
            break
        case ZDRAVSTUJTE:
            console.log('RUSSIAN')
            break
        default:
            console.log('Unknown Language')
    }

  process.exit();

});

process.stdin.on('data', input => {

  const NUM= Number(input.toString().trim());  

 if(NUM%2 !== 0){
        console.log("Weird");
    }
    else if(NUM%2 == 0 && NUM >=2 || NUM <= 5){
        console.log("Not Weird");
    }
    else if(NUM%2 == 0 && NUM >= 6 || NUM <= 20){
        console.log("Weird");
    }
    else if(NUM%2 == 0 && NUM>=20){
        console.log("Not Weird");
    }
  process.exit(); 

});

/*var age = 14; 
var maxAge = 100; 
var numberPerDay = 3;

totalRequired = (numberPerDay * 365) * (maxAge - age)
console.log("You will need" + totalRequired + "cookies to last you until the ripe old age of " + maxAge);

process.stdin.on('data', input => {

  let greeting = input.toString().trim();
    switch (greeting){
        case 'HELLO':
            console.log('ENGLISH')
            break; 
        case 'MABUHAY':
            console.log('TAGALOF'); 
            break; 
        case 'HOLA':
            console.log('SPANISH'); 
            break; 
        case 'HALLO':
            console.log('GERMAN'); 
            break; 
        case 'BONJOUR':
            console.log('FRENCH'); 
            break; 
        case 'CIAO':
            console.log('ITALIAN'); 
            break; 
        case 'ZDRAVSTUJTE':
            console.log('RUSSIAN'); 
            break; 
        default: 
            console.log('Unknown Language');

    }
   // use the greeting variable in your code, and start it on the next line
   






  // end of your code
  // do not remove the lines below

  process.exit();

}); */

process.stdin.on('data', input => {

  let greeting = input.toString().trim();

    switch (greeting) {
        case HELLO:
            console.log('ENGLISH')
            break
        case MABUHAY:
            console.log('TAGALOG')
            break
        case HOLA:
            console.log('SPANISH')
            break
        case HALLO: 
            console.log('GERMAN')
            break
        case BONJOUR:
            console.log('FRENCH')
            break
        case CIAO:
            console.log('ITALIAN')
            break
        case ZDRAVSTUJTE:
            console.log('RUSSIAN')
            break
        default:
            console.log('Unknown Language')
    }

  process.exit();

});

for (let i = 2; i <= 20; i++){
    console.log(i);
}

let letters = ["a", "b", "c"]; 
letters.push("d");
letters.shift(); 
console.log(letters); 
