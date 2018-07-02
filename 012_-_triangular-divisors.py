# https://mathschallenge.net/library/number/number_of_divisors

#http://code.jasonbhill.com/sage/project-euler-problem-12/


import math
import time


def countDivisors (n):
	if n%2 ==0: n=n/2
	divisors = 1
	count = 0
	while n%2 == 0:
		count+=1
		n=n/2
	divisors = divisors * (count + 1)
	p = 3
	while n != 1:
		count=0
		while n%p == 0:
			count+=1
			n=n/p
		divisors = divisors * (count+1)
		p+=2
	return divisors

def calc_Triangle_index (factor_limit):
	n=1
	lnum, rnum =  countDivisors(n), countDivisors (n+1)
	
	while lnum * rnum < 500:
		n+=1
		lnum, rnum = rnum, countDivisors(n+1)
   
	return n




start = time.time()
value = calc_Triangle_index(500)
triangle = (value * (value + 1)) / 2
elapsed = (time.time() - start)

print "result %s returned in %s seconds." % (triangle,elapsed) #just to set time
