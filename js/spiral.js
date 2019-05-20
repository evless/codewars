// https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript

var spiralize = function(size) {
    let result = [];
    let n = 0;
    while(n < size) {
        result.push(Array(size).fill(0));
        n++
    }

    let max=  { t: 2, r: size - 1, l: 0, b: size - 1 };
    let cursorR = 0;
    let cursorC = 0;
    let direction = 'right';
    let move = {
        right: () => {
            if (cursorC >= max.r) {
                return console.log('right returned');
            }

            for (let i = cursorC; i <= max.r; i++) {
                cursorC = i;
                result[cursorR][cursorC] = 1;
            }
            console.log(`right ended, cursorC = ${cursorC}`);
            max.r -= 2;
            move.bottom();
        },
        bottom: () => {
            if (cursorR >= max.b) {
                return console.log('bottom returned');
            }

            for (let i = cursorR; i <= max.b; i++) {
                cursorR = i;
                result[cursorR][cursorC] = 1;
            }
            console.log(`bottom ended, cursorR = ${cursorR}`);
            max.b -= 2;
            move.left();
        },
        left: () => {
            if (cursorC <= max.l || result[cursorR - 1][cursorC - 1] === 1) {
                return console.log('left returned');
            }

            for (let i = cursorC; i >= max.l; i--) {
                cursorC = i;
                result[cursorR][cursorC] = 1;
            }
            console.log(`left ended, cursorC = ${cursorC}`);
            max.l += 2;
            move.top();
        },
        top: () => {
            if (cursorR <= max.t) {
                return console.log('top returned');
            }

            for (let i = cursorR; i >= max.t; i--) {
                cursorR = i;
                result[cursorR][cursorC] = 1;
            }
            console.log(`top ended, cursorR = ${cursorR}`);
            max.t += 2;
            move.right();
        }
    };

    move.right();
    console.log(result);
    return result;
}

// console.log(spiralize(5) === [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]);
// console.log(spiralize(7) === [[1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]]);
console.log(spiralize(10) === [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1, 0, 1], [1, 0, 1, 1, 1, 1, 0, 1, 0, 1], [1, 0, 1, 0, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 0, 0, 0, 1, 0, 1], [1, 0, 1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]);