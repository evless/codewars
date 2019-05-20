function smaller(arr) {
    const posNumbers = [];
    const negNumbers = [];
    return arr.reduceRight((prev, curr, index) => {
        let res;
        console.log(posNumbers, negNumbers);
        if (curr > 0) {
            posNumbers[curr] = !posNumbers[curr] ? 1 : posNumbers[curr] + 1;
            res = posNumbers.slice(1, curr).reduce((prev, curr) => prev + curr, 0);
            res += negNumbers.reduce((prev, curr) => prev + curr, 0);
        } else {
            const numb = Math.abs(curr);
            negNumbers[numb] = !negNumbers[numb] ? 1 : negNumbers[numb] + 1;
            res = negNumbers.slice(numb + 1).reduce((prev, curr) => prev + curr, 0);
        }

        return [...prev, res];
    }, []).reverse();
}

// console.log(smaller([5, 4, 3, 2, 1]));
console.log(smaller([1, 1, -1, 0, 0]));