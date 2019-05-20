// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

function solution(input, markers) {
    const splitter = input.split('\n');
    const regExp = new RegExp(markers.map(i => `\\${i}`).join('|'));
    return splitter.map(item => {
        const search = item.search(regExp);
        if (search > -1) {
            return item.slice(0, search).trim();
        }
        return item;
    }).join('\n');
  }

// const result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
const result = solution("a #b\nc\nd $e f g", [ '#', '$' ])
console.log(result);