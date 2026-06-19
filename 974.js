var subarraysDivByK = function(nums, k) {
    const cnt = new Map();
    let ans = 0, s = 0;
    for (const x of nums) {
        cnt.set(s, (cnt.get(s) ?? 0) + 1);
        s = (s + x % k + k) % k; // 保证 s 非负
        ans += cnt.get(s) ?? 0;
    }
    return ans;
};

