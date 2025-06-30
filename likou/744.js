var nextGreatestLetter = function (letters, target) {
    //将target放进letters数组里,利用...增加语法 ,在进行去重,去除和target相同的字母
    let arr = Array.from(new Set([...letters,target]));
    arr.sort(); //进行排序
    //如果target在最后一个,相当于大于前面所有的,需要返回第一个字母
    if(arr[arr.length - 1] === target) return arr[0];
    //获取target所在索引
    let index = arr.indexOf(target);
    //返回target所在的下一个字母,进行返回 <=>因为前面已经排好序,大于target的最小字母就是它下一个
    return arr[index+1]
    };
    
