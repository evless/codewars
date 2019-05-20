// // const str = 'MCMXC';
// // const str = 'MMCC';
// // const str = 'MDCLXVI';
// const str = 'XXI';

// const parseSymbol = (item) => {
//     switch(item) {
//         case 'I':
//             return 1;
//         case 'V':
//             return 5;
//         case 'X':
//             return 10;
//         case 'L':
//             return 50;
//         case 'C':
//             return 100;
//         case 'D':
//             return 500;
//         case 'M':
//             return 1000;
//     }

//     return item;
// }

// const arr = str.split('').map(parseSymbol);
// let result = 0;
// while(arr.length) {
//     if (arr[0] >= arr[1]) {
//         result += arr[0];
//         arr.splice(0, 1);
//     } else if (arr[0] < arr[1]) {
//         result += (arr[1] - arr[0]);
//         arr.splice(0, 2);
//     } else {
//         result += arr[0];
//         arr.splice(0, 1);
//     }
// }


// console.log(result);

const parse = (item) => {
    if (!item) return null;

    switch(item) {
        case 1:
            return 'I';
        case 2:
            return 'II';
        case 3:
            return 'III';
        case 4:
            return 'IV';
        case 5:
            return 'V';
        case 6:
            return 'VI';
        case 7:
            return 'VII';
        case 8:
            return 'VIII';
        case 9:
            return 'IX';
        case 10:
            return 'X';
        case 20:
            return 'XX';
        case 30:
            return 'XXX';
        case 40:
            return 'XL';
        case 50:
            return 'L';
        case 60:
            return 'LX';
        case 70:
            return 'LXX';
        case 80:
            return 'LXXX';
        case 90:
            return 'XC';
        case 100:
            return 'C';
        case 200:
            return 'CC';
        case 300:
            return 'CCC';
        case 400:
            return 'CD';
        case 500:
            return 'D';
        case 600:
            return 'DD';
        case 700:
            return 'DD';
        case 800:
            return 'DD';
        case 900:
            return 'CM';
        case 1000:
            return 'M';
        case 2000:
            return 'MM';
        case 3000:
            return 'MM';
        case 4000:
            return 'MM';
    }

    return item;
}

const numb = 2008;

let arr = String(numb)
    .split('')
    .reverse()
    .map((item, index) => Number(`${item}${'0'.repeat(index)}`))
    .map(parse)
    // .reverse()
    // .filter(Boolean)
    // .join('');

console.log(arr);