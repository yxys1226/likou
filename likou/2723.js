/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    //promise.all接收一个由promise构成的可迭代对象（数组），返回一个新的Promise，仅在每个期约兑现后兑现
    let promise3 = Promise.all([promise1,promise2]);
    //组合的期约在全部期约兑现后返回包含解决值的数组，基于数组返回一个新的Promise即可
    return promise3.then(([a,b])=>new Promise(resolve=>resolve(a+b)));
};

