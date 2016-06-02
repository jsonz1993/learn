/**
 * 冒泡排序： 最简单，最慢
 * 插入排序：比冒泡快，比快速排序和希尔排序慢
 * 快速排序：非常快的排序方法。v8的sort采用快速排序和插入排序的结合
 * 希尔排序：非chrome下长度小于1000，比快速排序快
 * 系统方法: 在Firefox 下非常快
 http://www.cnblogs.com/idche/archive/2011/02/16/1956397.html
 不懂。 发烂渣
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
function quickSort(arr) {
    var i = 0,
        j = arr.length - 1,
        sort = function(i, j) {

            if (j === i) return;

            var key = arr[i],
                stopi = i,
                stopj = j;

            while (j > i) {
                if (arr[j] >= key) {
                    j--;
                } else {
                    arr[i] = arr[j];

                    while (j > ++i) {
                        if (arr[i] > key) {
                            arr[j] = arr[i];
                            break;
                        }
                    }
                }
            }

            if (stopi === i) {
                sort(++i, stopj);
                return;
            }

            arr[i] = key;

            sort(stopi, i);
            sort(j, stopj);


        }

    sort(i, j);
    return arr;
}