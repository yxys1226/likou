/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
    let map = new Map();
    for (let i = 0; i < logs.length; i++) {
        let start = logs[i][0];
        let end = logs[i][1];
        while (start < end) {
            map.set(start, (map.get(start) || 0) + 1)
            start++;
        }
    }
    let mapList = [...map];
    mapList.sort((a, b) => {
        if (a[1] == b[1]) {
            return a[0] - b[0]
        } else {
            return b[1] - a[1]
        }
    })
    return mapList[0][0]
};

