
/*


A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

function isPalindrome(str) {
    for (var i=0;i< Math.floor(str.length/2); i++) 
        if (str.charAt(i) != str.charAt( str.length - i -1 )) //check from the front and the back
            return (false);
    return (true);
}




//get largest palindrome 
var largest = 999*999;
var smallest = 100*100;
print (isPalindrome(largest.toString()));
//print (large);

var Found = 0;

outerloop:
for (i=largest;i>smallest;i--) { //start with largest number
    
    if (isPalindrome(i.toString())) { //check only if number is palindrome
        Found = i;
        for (var j=999;j>100;j--)
            if (i%j===0 && i/j>99 && i/j<1000) { //is divisible and is 3 digit multiples
                print (Found + '=' + j +'*'+(i/j));
                //i=smallest; //change value of i to break outerloop or use the loop naming style
                break outerloop;
            }
        
    }
}

