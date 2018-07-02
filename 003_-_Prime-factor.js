/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

http://rextester.com/IVVL97592
*/



function isPrime(num) {
 
    if (num ===2 || num===3) {
        return (true);
    }
    else {
          if (num%2==0) 
          	return (false);  // dont work with even numbers
          
          for ( var j=3; j< num; j++){
              if (num % j == 0 ) {
                  return (false);
              }

          }
    }
  return (true);
}




var num1 = 600851475143;
//print(Math.floor(Math.sqrt(num1)));

maxPrimeF = 1;

for ( var i=2;i< Math.floor(Math.sqrt(num1));i++) 
    if (num1%i == 0 && isPrime(i)) // check if divisible by number then check if PRime.. remember that LHS of && is handled first
        
            maxPrimeF = i; //ignore smaller number, just store largest number

print (maxPrimeF);



