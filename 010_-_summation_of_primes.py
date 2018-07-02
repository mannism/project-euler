import math

"""This is Python code"""

def checkNumPrime (NumtoCheck):
    isPrime = False
    if NumtoCheck ==2 or NumtoCheck ==3 or NumtoCheck == 5 or NumtoCheck == 7:
        isPrime = True
        return isPrime
    else:
        isPrime = True

        for i in range (3, int(math.floor(math.sqrt(NumtoCheck))+1), 2 ):
            if NumtoCheck % i == 0:  
                "can be divided by a number?"
                isPrime = False
                break

    return (isPrime)



sumPrime = 2
for i in range (3, 2000000, 2):
    if  (checkNumPrime(i)== True):
        sumPrime+=i


print (sumPrime)
