// https://www.codewars.com/kata/54c27ef1fb7da0118600046a/train/javascript

function sum(x, y) {
    return x + y;
}

function double(x) {
    return sum(x, x);
}

function minus(x, y) {
    return x - y;
}

function addOne(x) {
    return sum(x, 1);
}

function countArguments(target) {
    const argsFun = target.args || target.toString()
                                    .replace(/(\/\/.*)/g, '')
                                    .replace(/(\/\*.*\*\/)/g, '')
                                    .replace(/\s/g, '')
                                    .match(/\((.*)\)\{/)[1].split(',');
    return argsFun.length;
}

function chain(fns) {
    let calc = {
        result: 0
    };
    calc.execute = function() {
        return this.result;
    }
    for (const name in fns) {
        const fn = fns[name];
        calc[name] = function(...args) {
            const count = countArguments(fn);
            if (args.length !== count)
                args.unshift(this.result);
            const result = fn.apply(this, args);
            return Object.assign({}, calc, {result});
        }
    }

    return calc;
}

var c = chain({sum: sum, minus: minus, double: double, addOne: addOne});
// console.log(c);
var c1 = c.sum(1, 5).minus(7)
console.log(c1.execute());
// console.log(c2.execute());