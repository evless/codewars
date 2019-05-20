// https://www.codewars.com/kata/arbitrary-length-integer-arithmetic/train/javascript

function add(augend, addend) {
    // Rewrite this to support at least 100 digits
    // var sum = Number(augend) + Number(addend);
    const first = augend.split('').reverse();
    const second = addend.split('').reverse();
    const maxLength = Math.max(first.length, second.length);
    const result = [];
    for (let i = 0; i < maxLength; i++) {
        let sum = Number(first[i] || 0) + Number(second[i] || 0);
        if (!result[i]) result[i] = 0;
        let valueToNext = (sum / 10) | 0;
        result[i] += sum % 10;
        if (valueToNext) result[i + 1] = valueToNext;
    }
    return result.reverse().join('');
}

function subtract(minuend, subtrahend) {
    // Rewrite this to support at least 100 digits
    const first = minuend.split('').reverse();
    const second = subtrahend.split('').reverse();
    const maxLength = Math.min(first.length, second.length);
    const result = [];
    for (let i = 0; i < maxLength; i++) {
        let f = Number(first[i] || 0);
        let s = Number(second[i] || 0);
        if (f < s) {
            first[i + 1] -= 1;
            f += 10;
        }
        let sum = f - s;
        result[i] = sum;
    }
    return result.reverse().reduce((prev, curr) => (
        (curr === 0 && prev === '') ? prev : `${prev}${curr}`
    ), '') || '0';
}

function multiply(multiplicand, multiplier) {
    // Rewrite this to support at least 100 digits
    // var product = Number(multiplicand) * Number(multiplier);
    const first = multiplicand;
    const second = multiplier.split('').reverse();
    const multiplyResult = [];
    for (let i = 0; i < second.length; i++) {
        multiplyResult.push(`${multiply(first, second[i])}`);
    }
    const result = [];
    for (let i = 0; i < multiplyResult.length - 1; i++) {
        let f = multiplyResult[i] || '0';
        const s = multiplyResult[i + 1] || '0';
        result.push(f.substr(-1))
        f = f.substr(0, f.length - 1);
        let sum = add(f, s);
        multiplyResult[i + 1] = sum;
    }
    result.push(multiplyResult[multiplyResult.length - 1]);
    return result.reverse().join('');
}

function divide(dividend, divisor) {
    // Rewrite this to support at least 100 digits
    var quotient = Number(dividend) / Number(divisor);
    return String(quotient);
}

console.log(add('0', '1'), add('0', '1') === '1');
console.log(add('1', '0'), add('1', '0') === '1');
console.log(add('1', '1'), add('1', '1') === '2');
console.log(add('99999', '99999'), add('99999', '99999') === '199998')
console.log(subtract('111111', '99999'), subtract('111111', '99999') === '11112')
console.log(subtract('45', '45'), subtract('45', '45') === '0')
console.log(multiply('1', '1'), multiply('1', '1') === '1');
console.log(multiply('123', '123'), multiply('123', '123') === '15129');
console.log(multiply('687', '253'), multiply('687', '253') === '173811');
console.log(multiply('12345678901234567890', '12345678901234567890'), multiply('12345678901234567890', '12345678901234567890') === '152415787532388367501905199875019052100');
// 100001
// 099999
// ------
// 011112