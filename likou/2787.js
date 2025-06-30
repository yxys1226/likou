var findSpecialInteger = function(arr) {
    const m = Math.floor(arr.length / 4);
    for (const i of [m, m * 2 + 1]) {
        const x = arr[i];
        if (_.sortedLastIndex(arr, x) - _.sortedIndex(arr, x) > m) {
            return x;
        }
    }
    // 如果答案不是 arr[m] 也不是 arr[2m+1]，那么答案一定是 arr[3m+2]
    return arr[m * 3 + 2];
};

