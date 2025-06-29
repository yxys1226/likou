/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function (s) {
    const map = new Map()
    for (let i = 0, len = s.length; i < len; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    const match = Array.from(map)
    for (let i = 0, len = s.length; i < len; i++) {
        const item = match.find(item => item[0] === s[i]) 
        if (item[1] === Number(s[i]) && s[i + 1] && s[i + 1] !== s[i]) {
            const first = match.find(item => item[0] === s[i + 1])
            if (first[1] === Number(s[i + 1])) {
                return s[i] + s[i + 1]
            }
        }
    }
    return ''

};
