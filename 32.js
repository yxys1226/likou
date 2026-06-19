var longestValidParentheses = function(s) {
    const n = s.length;
    const isValid = Array(n).fill(false);
    const st = []; 

    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            st.push(i); 
        } else if (st.length > 0) {
            isValid[i] = isValid[st.pop()] = true;
        }
    }

    let ans = 0, cnt = 0;
    for (const b of isValid) {
        if (b) {
            cnt++; 
            ans = Math.max(ans, cnt);
        } else {
            cnt = 0; 
        }
    }
    return ans;
};
