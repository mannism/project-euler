
/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/




var found = false;
var num = 0;

do {
    
    num+=20; //20 is the largest number, so has to be and increment of 20
    if (num%11==0 && num%12==0 && 
        num%13==0 && num%14==0 && num%15==0 && 
        num%16==0 && num%17==0 && num%18==0 && num%19==0)
        found =true;
} while (found == false);

print (num);

/*logically
if you can divide by 18, you can divide by 9, 3 and 6
if you can divide by 16, you can divide by 4 and 2
if you can divide by 20, you can divide by 10, 2, 5, 4
if you can divide by 14, can divide by 7 and 2
if you can divide by 15, can divide by 5 and 3
so you can check using less items
*/

//232792560