def iq_test(numbers):
    arr = numbers.split()
    countOdd = 0
    countEven = 0
    resultOdd = 0
    resultEven = 0

    for idx, num in enumerate(arr):
        n = int(num)
        if n % 2 :
            countEven +=1
            resultEven = idx + 1
        else :
            countOdd += 1
            resultOdd = idx + 1

    if countOdd > countEven :
        return resultEven
    else :
        return resultOdd

print iq_test('2 4 7 8 10')
raw_input()