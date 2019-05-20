// https://www.codewars.com/kata/51646de80fd67f442c000013/train/javascript

function stripUrlParams(url, paramsToStrip) {
    const domain = url.split('?')[0];
    const params = url.split('?')[1];
    if (!params) return url;

    const result = params.split('&').reduce((prev, curr) => {
        const item = curr.split('=');
        if (prev.indexOf(`${item[0]}=`) > -1 || (paramsToStrip && paramsToStrip.some(i => i === item[0]))) {
            return prev;
        }
        return prev === '' ? curr : `${prev}&${curr}`;
    }, '');

    return `${domain}?${result}`;
}

console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=1&b=3', ['b']));