//Program to loop integers from 1..100 and print Fizz/Buzz/FizzBuzz/number if divisible by 3/5/both/neither
//To run: C:\Program Files\nodejs>node c:\GitHub\TechTests\FizzBuzz\PrintNumber.js

function GenerateFizzBuzz() {
var results=[];
const rows = 100;
for (let i = 1; i <= rows; i++) {
    
    if ((i%3==0) && (i%5!=0)){
        //console.log (i + ":" + "Fizz");
        results[i] = (i + ":" + "Fizz");
    }                
    else if ((i%3!=0) && (i%5==0)){
          //console.log (i + ":" + "Buzz");
          results[i] = (i + ":" + "Buzz");  
    }
    else if ((i%3==0) && (i%5==0)){
          //console.log (i + ":" + "Fizz Buzz");
          results[i] = (i + ":" + "Fizz Buzz");            
    }
    else {
            //console.log (i);
            results[i] = (i);            
        }    
}
return results;
}

//Unit test to cover a set of inputs
const inputs = [1, 10, 15, 36, 50, 77, 100];
let i = 0;

while (inputs[i]) {
  var outputs = GenerateFizzBuzz();
  console.log(outputs[inputs[i]]);
  i++;
}
