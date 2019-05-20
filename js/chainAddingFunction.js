// https://www.codewars.com/kata/a-chain-adding-function/train/javascript

function add(n) {
    let result = n;
    function f(b) {
        result += b;
        return f;
    }
    f.valueOf = function() {
        return result;
    }
    return f;
}

console.log(add(5)(10)(-11).valueOf())