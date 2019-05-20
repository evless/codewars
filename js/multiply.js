function multiply(n, o) {
    console.log(n, o)
    const lengthFirstFractial = n.split('.')[1] ? n.split('.')[1].length : 0;
    const lengthSecondFractial = o.split('.')[1] ? o.split('.')[1].length : 0;
    const grade = 10 ** (lengthFirstFractial > lengthSecondFractial ? lengthFirstFractial : lengthSecondFractial);

    const firstFraction = lengthFirstFractial ? Math.trunc(n.slice(n.indexOf('.')) * grade) : 0;
    const secondFraction = lengthSecondFractial ? Math.trunc(o.slice(o.indexOf('.')) * grade) : 0;
    
    const first = Math.abs(Math.trunc(n) * grade) + firstFraction;
    const second = Math.abs(Math.trunc(o) * grade) + secondFraction;
    const sign = Math.sign(Math.trunc(n) * Math.trunc(o)) || 1;

    return String(first * second / grade / grade * sign)
}

const result = multiply('00.0908', '0.01');
console.log(result === '0.000908', result);