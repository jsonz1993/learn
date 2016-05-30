/**
 * 冒泡排序： 最简单，最慢
 * 插入排序：比冒泡快，比快速排序和希尔排序慢
 * 快速排序：非常快的排序方法。v8的sort采用快速排序和插入排序的结合
 * 希尔排序：非chrome下长度小于1000，比快速排序快
 * 系统方法: 在Firefox 下非常快
 http://www.cnblogs.com/idche/archive/2011/02/16/1956397.html
 */

var array = [0, 1, 2, 44, 4, 324, 5, 65, 6, 6, 34, 4, 5, 6, 2, 43, 5, 6, 62, 43, 5, 1, 4, 51, 56, 76, 7, 7, 2, 1, 45, 4, 6, 7];
// 利用 sort 
function systemSort(array) {
    return array.sort(function(a, b) {
        return a - b;
    })
}

// 冒泡排序
function bubbleSort(array) {
    var temp;
    for (var i = 0, len = array.length; i < len; i++) {
        for (var j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

// 快速排序
function quickSort(array) {
	debugger;
    var i = 0;
    var j = array.length - 1;
    var Sort = function(i, j) {

        // 结束条件
        if (i == j) {
            return
        };

        var key = array[i];
        var stepi = i; // 记录开始位置
        var stepj = j; // 记录结束位置
        while (j > i) {
            // j <<-------------- 向前查找
            if (array[j] >= key) {
                j--;
            } else {
                array[i] = array[j]
                //i++ ------------>>向后查找
                while (j > ++i) {
                    if (array[i] > key) {
                        array[j] = array[i];
                        break;
                    }
                }
            }
        }

        // 如果第一个取出的 key 是最小的数
        if (stepi == i) {
            Sort(++i, stepj);
            return;
        }

        // 最后一个空位留给 key
        array[i] = key;

        // 递归
        Sort(stepi, i);
        Sort(j, stepj);
    }

    Sort(i, j);

    return array;
}

quickSort([1,3,421,12312,2,2,123,421,42,21]);