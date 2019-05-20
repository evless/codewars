function order(words) {
    return words.split(' ').sort((curr, next) => {
        let first = curr.match(/\d/);
        let second = next.match(/\d/);
        first = first ? first[0] : null;
        second = second ? second[0] : null;
        return first - second;
    }).join(' ')
}

console.log(order('is2 Thi1s T4est 3a'));