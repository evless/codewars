function spinningRings(innerMax, outerMax) {
    let i = 0, o = 0, counter = 0;
    const calc = () => {
        counter++;
        i--;
        o++;
        if (o > outerMax) o = 0;
        if (i < 0) i = innerMax;
    }

    calc();
    
    while (i !== o) {
        calc();
    }

    return counter;
}

console.log(spinningRings(2, 10) === 13);
console.log(spinningRings(10, 2) === 10);