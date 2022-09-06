// program to display text 5 times
const n = 100;

// looping from i = 1 to 100
for (let i = 1; i <= n; i++) {
    
    if ((i%3==0) && (i%5!=0)){
        console.log (i + ":" + "Fizz");}        
    else if ((i%3!=0) && (i%5==0)){
          console.log (i + ":" + "Buzz");}
    else if ((i%3==0) && (i%5==0)){
          console.log (i + ":" + "Fizz Buzz");}
    else {
            console.log (i);
        }    
}


