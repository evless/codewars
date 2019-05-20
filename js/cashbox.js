function tickets(peopleInLine) {
    const TICKET_PRICE = 25;
    let cashbox = {
        25: 0,
        50: 0,
        100: 0
    };
    for (let i = 0; i < peopleInLine.length; i++) {
        const dollars = peopleInLine[i];
        console.log(cashbox);
        if (dollars === TICKET_PRICE) {
            cashbox[25] += 1;
        }
        if (dollars === TICKET_PRICE * 2) {
            if (cashbox[25] > 0) {
                cashbox[25] -= 1;
                cashbox[50] += 1;
            } else {
                return 'NO'
            }
        }
        if (dollars === TICKET_PRICE * 4) {
            if (cashbox[50] > 0 && cashbox[25] > 0) {
                cashbox[50] -=1;
                cashbox[25] -=1;
                cashbox[100] +=1;
            } else if (cashbox[25] > 2) {
                cashbox[25] -= 3;
                cashbox[100] += 1;
            } else {
                return 'NO'
            }
        }
    }

    return 'YES';
}



// const result = tickets([25, 25, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100, 50, 100]);
const result = tickets([25, 25, 50, 50]);
console.log(result);