/**
 * https://www.codewars.com/kata/59a9735a485a4d807f00008a/train/javascript
 */

const matchString = (str, index = 0, result = []) => {
    const search = str.search(/W|E/g);
    if (search > -1) {
        return [search + index, ...result, ...matchString(str.slice(search + 1), search + index + 1, result)]
    }

    return [...result]
}

const getEqualsWhileLoop = (s) => {
    let match = matchString(s);
    let result = {};
    while(match.length) {
        let lastW;
        for (let i = 0; i < match.length; i++) {
            const element = s[match[i]];
            if (element === 'W') {
                lastW = i;
            } else if (element === 'E') {
                result[match[lastW]] = match[i];
                result[match[i]] = match[lastW];
                match.splice(lastW, 2);
            }
        }
    }

    return result;
}

function poohbear(s) {
    let result = '';
    let cursor = 0;
    let arr = [];
    let cloneItem = 0;
    let positionWhileLoop = getEqualsWhileLoop(s);
    for (let i = 0; i < s.length; i++) {
        const el = s[i];
        let summ;
        arr[cursor] = Math.floor(arr[cursor]) || 0;

        if (arr[cursor] > 255) {
            arr[cursor] = 0;
        }

        if (arr[cursor] < 0) {
            arr[cursor] = 255;
        }

        switch (el) {
            case '+':
                arr[cursor] = arr[cursor] + 1;
                break;
            case '-':
                arr[cursor] = arr[cursor] - 1;
                break;
            case '>':
                cursor += 1;
                break;
            case '<':
                cursor -= 1;
                break;
            case 'c':
                cloneItem = arr[cursor];
                break;
            case 'p':
                arr[cursor] = cloneItem;
                break;
            case 'W':
                if (arr[cursor] === 0) {
                    i = positionWhileLoop[i];
                }
                break;
            case 'E':
                if (arr[cursor] !== 0) {
                    i = positionWhileLoop[i];
                }
                break;
            case 'P':
                result += String.fromCharCode(arr[cursor]);
                break;
            case 'N':
                result += Number(arr[cursor]);
                break;
            case 'T':
                arr[cursor] = arr[cursor] * 2;
                break;
            case 'Q':
                arr[cursor] = arr[cursor] ** 2;
                break;
            case 'U':
                arr[cursor] = Math.sqrt(arr[cursor]);
                break;
            case 'L':
                arr[cursor] = arr[cursor] + 2;
                break;
            case 'I':
                summ = arr[cursor] - 2;
                if (summ < 0) {
                    summ += 256;
                }
                arr[cursor] = summ;
                break;
            case 'V':
                arr[cursor] = arr[cursor] / 2;
                break;
            case 'A':
                arr[cursor] = arr[cursor] + cloneItem;
                break;
            case 'B':
                summ = arr[cursor] - cloneItem;
                if (summ < 0) {
                    summ += 256;
                }
                arr[cursor] = summ;
                break;
            case 'Y':
                arr[cursor] = arr[cursor] * cloneItem;
                break;
            case 'D':
                arr[cursor] = arr[cursor] / cloneItem;
                break;
            default:
                break;
        }
    }

    return result;
}

// console.log(poohbear('LQTcQAP>pQBBTAI-PA-PPL+P<BVPAL+T+P>PL+PBLPBP<DLLLT+P'))
// console.log(poohbear('+c BANANA'))
// console.log(poohbear('LQQT+P+P+P+P+P+P'))
// console.log(poohbear('+LTQII>+WN<P>+E'))
// LILcABNBpYDYYYYLLL+P-+W-EQNW-ELLQUTTTT+P
// console.log(poohbear('LILcABNBpYDYYYYLLL+P-+W-EQNW-ELLQUTTTT+P'))
// console.log(poohbear('cW>LQQT+P<pE'))
// console.log(poohbear('LL+W c>p>p<- W c>Y<- E>c>A<<<- E>>>N'))