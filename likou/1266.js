/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let time = 0;
    for(let i = 0; i < points.length -1 ; i++){
        // x坐标相减 
        let a = Math.abs(points[i][0] - points[i+1][0]);
        // y坐标相减
        let b = Math.abs(points[i][1] - points[i+1][1]);
        // 取最大，差值即为时间值
        (a > b) ? time = time + a :time = time + b;
    }
    return time;
};

