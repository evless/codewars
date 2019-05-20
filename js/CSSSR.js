function completeFreeze(object) {
  for (const key in object) {
      if (object.hasOwnProperty(key)) {
          object[key] = completeFreeze(object[key])
      }
  }

  return Object.freeze(object);
}


function bitsDiff(a, b) {
  let count = 0
  for (let c = a^b; c != 0; c = c >> 1)
    count += c & 1
return count
}
    


function decode(text) {
  return text
    .split('')
    .reduce((prev, curr) => (curr.charCodeAt() > 47 && curr.charCodeAt() < 58) ? `${prev}${curr}` : `${prev}|${curr}|`, '')
    .replace('||', '|')
    .split('|')
    .reverse()
    .reduce((prev, curr) => Number(curr) && curr !== ' ' ? `${prev}${String.fromCharCode(Number(curr))}` : `${prev}${curr}`, '')
}
    