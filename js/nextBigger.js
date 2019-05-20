/* 
    You have to create a function that takes a positive
    integer number and returns the next bigger number formed by the same digits:

    nextBigger(12)==21
    nextBigger(513)==531
    nextBigger(2017)==2071

    Решение Дениса Сафрашенкова
*/

function nextBigger(n) {
    let digits = n.toString().split('').map(i => Number(i)).reverse();
    for (let i = 1; i < digits.length; i++) {
        const prevNumb = digits[i];
        const temp = digits.slice(0, i);
        temp.sort()

        for (let u = 0; u < temp.length; u++) {
            const nextNumb = temp[u];
            if (nextNumb > prevNumb) {
                console.log(n);
                digits[i] = nextNumb;
                digits[u] = prevNumb;
                let tail = digits.splice(0, i);
                tail.sort();
                return Number(digits.reverse().concat(tail).join(''))
            }
        }
    }

    return -1;
}

console.log(nextBigger(59884848459853)) // 1234567908