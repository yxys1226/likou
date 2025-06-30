/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
    let num = 0;
    while (num < n) {
        num = (num << 1) + 1;
    }
    return num;
};
