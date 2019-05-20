/**
 * CSV Parser.  Takes a string as input and returns
 * an array of arrays (for each row).
 * 
 * @param input String, CSV input
 * @param separator String, single character used to separate fields.
 *        Defaults to ","
 * @param quote String, single character used to quote non-simple fields.
 *        Defaults to "\"".
 */
function parseCSV(input, separator, quote) {
    console.log(input, separator, quote)
    separator = separator || ',';
    quote = quote || '"';
    const symbols = input.split('');
    let openedQuote = false;
    let str = '';
    let result = [];
    symbols.forEach(curr => {
        if (curr === quote) openedQuote = !openedQuote;
        if (curr === separator && !openedQuote) {
            result.push(str);
            str = '';
        } else {
            str += curr;
        }
    });
    console.log(result);
}


console.log(parseCSV("1,\"two, too\",3\n4,5,6"));