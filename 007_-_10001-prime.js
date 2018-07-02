
/*




By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?


*/

function isPrime (num) {
    if (num==2 || num === 3) return (true);
    if (num%2==0) return (false);
    for (var i=3;i<num;i+=2) {
        if (num%i==0) return (false);
    }
    return (true);
       
}
var notfound =true
var j=3;//start from 3

var count =2;//assume firt 2 is already calculated
do {
    j+=2;
    if (isPrime(j)) count+=1;
    
    if (count==10001) notfound=false;
}while (notfound);
print (count + ' ' + j);


