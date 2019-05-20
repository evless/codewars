// Converts a URL Query String into an object map
function convertQueryToMap(query) {
    let result = {}
    query
        .split('&')
        .forEach(params => {
            const splitter = params.split('=');
            splitter[0]
                .split('.')
                .reduce(function(cur, next, i, arr) {
                    if (!cur[next]) cur[next] = {};
                    if (i === arr.length - 1) cur[next] = decodeURIComponent(splitter[1]);
                    return cur[next];
                }, result)
        });
    
    return result;
}



var q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue';
console.log(convertQueryToMap(q));
