// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function zero(action) { return action ? action(0) : 0; }
function one(action) { return action ? action(1) : 1; }
function two(action) { return action ? action(2) : 2; }
function three(action) { return action ? action(3) : 3; }
function four(action) { return action ? action(4) : 4; }
function five(action) { return action ? action(5) : 5; }
function six(action) { return action ? action(6) : 6; }
function seven(action) { return action ? action(7) : 7; }
function eight(action) { return action ? action(8) : 8; }
function nine(action) { return action ? action(9) : 9; }

function plus(numb) { return (n) => n + numb; }
function minus(numb) { return (n) => n - numb; }
function times(numb) { return (n) => n * numb; }
function dividedBy(numb) { return (n) => n / numb; }

console.log(seven(times(five())))