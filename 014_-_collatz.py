# https://projecteuler.net/problem=14

import time
import math

start = time.time()


def theLoop (val):
    totalCount = 1 # dont forget initial value
    while val > 1:

        if val %2 == 0:
            val = val / 2
        else:
            val= (3*val)+1

        totalCount +=1 
    return totalCount

x = 1000000
value =0
highestCount = 0
while x > 13:
    count = theLoop(x)
    if highestCount <  count: 
        highestCount = count
        value = x
    x = x - 1
    


elapsed = (time.time() - start)

print ("result %s returned in %s seconds." %  (value,elapsed)) #show values