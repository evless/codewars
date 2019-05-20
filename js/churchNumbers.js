function zero(f, x) {
    return x;
}

function succ(church) {
    return function (f, x) {
        return f(church(f, x));
    };
}

var one = succ(zero);
var two = succ(one);
var three = succ(two);
var four = succ(three);
var five = succ(four);

function churchToInt(church) {
    return church(sumOne, 0);
}

var sumOne = sum.bind(null, 1);

function sum(x, y) {
    return x + y;
}

console.log(churchToInt(four))