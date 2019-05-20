const sum = (a, b, c, d, e) => a + b + c + d + e

const transform = function (fn) {
  let result = 0;

  function func (...args) {
    result += sum.apply(null, [...args, ...Array(5 - args.length).fill(0)])

    return func;
  }

  func.toString = function () {
    const res = result;
    result = 0;
    return res
  }

  func.valueOf = function () {
    const res = result;
    result = 0;
    return res
  }

  return func;
}

const transformedSum = transform(sum)

console.log(transformedSum(1, 2, 3, 4, 5).toString())
console.log(transformedSum(1, 2, 3, 4, 5))
console.log(transformedSum(12, 33, 4)(5, 6).toString())

