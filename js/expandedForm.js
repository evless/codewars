function expandedForm(num) {
    const splitter = (''+num).split('')
    return splitter.map((item, index) => (
        Number(item) ? `${item}${'0'.repeat(splitter.length - index - 1)}` : false
    )).filter(Boolean).join(' + ')
}

console.log(expandedForm(70304));
console.log(expandedForm(70304) === '70000 + 300 + 4');