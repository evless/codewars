function defaultArguments(target, defaults) {
    const argsFun = target.args || target.toString()
                                    .replace(/(\/\/.*)/g, '')
                                    .replace(/(\/\*.*\*\/)/g, '')
                                    .replace(/\s/g, '')
                                    .match(/\((.*)\)\{/)[1].split(',');
    const detour = function () {
        const input = arguments;
        return target.apply(target, argsFun.map((item, i) => {
            return i < input.length ? input[i] : defaults[argsFun[i]];
        }));
    }

    detour.args = argsFun;
    return detour;
}

function add(a,b) { return a+b;};
function addComments( a, // comments
    b /* more comments */ ) { return a+b; }

// var add_ = defaultArguments(add,{b:9});
// console.log(add_.toString());
// console.log(add_(10)); // returns 19
// console.log(add_(10,7)); // returns 17
// var add_ = defaultArguments(add_,{b:3});
// console.log(add_(10)); // returns 17
// add_(); // returns NaN
var add2 = defaultArguments(addComments)
// add_ = defaultArguments(add_,{b:3, a:2});
// add_(10); // returns 13 now
// add_(); // returns 5