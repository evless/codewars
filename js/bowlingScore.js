// https://www.codewars.com/kata/5531abe4855bcc8d1f00004c/train/javascript

// 1: 10 + 20 = 30
// 2: 10 + 20 = 30
// 3: 10 + 20 = 30
// 4: 10 + 20 = 30
// 5: 10 + 20 = 30
// 6: 10 + 20 = 30
// 7: 10 + 20 = 30
// 8: 10 + 20 = 30
// 9: 10 + 20 = 30

// 10: 10 + 20 = 10
// 11: 10 + 10 = 10
// 12: 10 + 10 = 10

function bowlingScore(frames) {
    const summ = frames
        .split(' ')
        .reduce((prev, curr, index) => {
            let [first, second, third] = curr.split('').map(item => (item === 'X' ? 10 : (item === '/') ? item : Number(item)));
            let type = 'normal';
            if (second === '/') {
                second = (10 - first);
                type = 'spare';
            }
            if (third === '/') third = (10 - second);
            let result = (first || 0) + (second || 0) + (third || 0);
            return [...prev, { round: index + 1, first, second, third, result, type }];
        }, []);

    return summ.reduce((prev, curr, index) => {
        if (curr.round !== 10 && curr.first === 10) {
            const next = summ[index + 1];
            const nextNext = summ[index + 2];
            return prev + curr.first + next.first + (next.second !== undefined ? next.second : nextNext.first);
        }

        if (curr.round !== 10 && curr.type === 'spare') {
            const next = summ[index + 1];
            return prev + curr.result + next.first;
        }

        return prev + curr.result;
    }, 0);
}

// const result = bowlingScore('11 11 12 11 11 11 11 11 11 11');
// const result = bowlingScore('X X X X X X X X X XXX');
// 0 14 15 8 6 4 15 14 9 30 = 115
// const result = bowlingScore('00 5/ 4/ 53 33 22 4/ 5/ 45 XXX');
// 9 + 4 + 12 + 2 + 5 + 8 + 8+ 2 + 9 + 7 = 66
const result = bowlingScore('81 22 X 20 50 71 71 11 72 34');

console.log(result, result === 115);