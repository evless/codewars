https://www.codewars.com/kata/52fa7b5704bc8f7c85000d32/train/javascript

String.prototype.indexOf = function (reg, start = 0) {
    const str = this.slice(start);
    const result = str.match(reg);
    return result ? result.index + start : -1;
};

String.prototype.lastIndexOf = function (reg, start = this.length) {
    const str = this;
    for (let i = start; i >= 0; i--) {
        const result = str.slice(i, str.length).search(reg);
        if (result === 0) {
            return str.slice(0, i).length
        }
    }

    return -1;
};


// console.log("qwerty".lastIndexOf("r", 4) === 3);
// console.log("abcba".lastIndexOf("cb", 1) === -1);
// console.log("abcba".lastIndexOf(/b/, 2) === 1);
// console.log("abcba".lastIndexOf(/bc|cb/) === 2);
console.log("abcba".lastIndexOf(/^c/, 2));
