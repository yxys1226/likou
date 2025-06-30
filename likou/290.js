var wordPattern = function(pattern, s) {
    //把两个字符串都转化为数组
    let res = pattern.split("")
    let ans = s.split(" ")
    //比较长度
    if(res.length != ans.length){
        return false
    }
    //遍历数组，进行比较
    for(let i=0;i<res.length;i++){
        if(res.indexOf(res[i]) != ans.indexOf(ans[i])){
            return false
        }
    }
    return true
};
