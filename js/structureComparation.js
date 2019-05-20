// https://www.codewars.com/kata/520446778469526ec0000001/train/javascript

Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
    if (!Array.isArray(other)) {
        return false;
    }

    return this.every((val, index) => {
        const isArray = Array.isArray(val) && Array.isArray(other[index]);

        if (isArray) {
            return val.sameStructureAs(other[index]);
        }

        return !Array.isArray(val) && other[index] && !Array.isArray(other[index]);
    });
};

// const result = [ 1, [1, [1]] ].sameStructureAs( [ 2, [2, 2] ] );

const result = [1,[1,1]].sameStructureAs( [2,[2]] );
console.log(result);