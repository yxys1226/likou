var strStr = function(haystack, needle){
    if (needle==="") return 0
    for(var i=0;i<haystack.length;i++){
        if(haystack[i]===needle[0]){
            var flag = true;
            for (var j=1;j<needle.length;j++){
                if (haystack[i+j]!=needle[j]){
                    flag = false
                    break;
                }
            }
            if (flag) return i
        }
    }
    return -1
};

