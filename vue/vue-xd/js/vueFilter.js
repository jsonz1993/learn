/**
 * Created by Jsonz on 2016/3/24.
 */

Vue.filter('returnYuan', function (val){
    return val + '元';
});

/**
 * 传入 时间戳、YYYY-MM-DD、MM-DD
 * 返回 MM-DD
 */
Vue.filter('mmDd', function(val) {
    // 时间戳
    if (val.toString().length === 13) {
        var _date = new Date(val);
        return (_date.getMonth() + 1) + '-' + _date.getDate();
    }

    var dataArr = val.split('-'),
        dataArrDoc = val.split('.');
    if(dataArr.length === 3 || dataArrDoc.length === 3) {
        return dataArr[1] + '-' + dataArr[2];
    } else if (dataArr.length === 2) {
        return val;
    } else if (dataArrDoc.length === 2) {
        return dataArr[0] + '-' + dataArr[1];
    }
});