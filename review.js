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