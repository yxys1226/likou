/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '?') {
            if (i === 0) {
                return findLatestTime(s.replace('?', s[1] > 1 ? 0 : 1))
            } else if (i === 1) {
                return findLatestTime(s.replace('?', s[0] < 1 ? 9 : 1))
            } else if (i === 3) {
                return findLatestTime(s.replace('?', 5))
            } else if (i === 4) {
                return findLatestTime(s.replace('?', 9))
            }
        }
    }
    return s
};
