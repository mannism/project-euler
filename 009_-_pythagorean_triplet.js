/*
a < b < c
(a*a) + (b*b) = (c*c)


there exists 1 triplet  for which a+b+c=1000;

Find product of abc

*/

// what we deduce

var  sumofvariables = 1000;
var a = 0;
var b = 0;
var c = 0;
var found =false;
for (a=2; a<333; a++ ) {
        // since  a < b <  therefore a cannot be bigger than 1/3 of 1000
        for (b=a+1;b< sumofvariables/2;b++) {
            c = sumofvariables - b - a;
            if ( a*a+b*b== c*c) {
                found = true;
                break;
            }
        }
        if (found) break;


}
var theProduct = a*b*c;
document.write (a.toString() + " / " + b.toString()  + " / " + c.toString() + "<br />" + theProduct.toString());

