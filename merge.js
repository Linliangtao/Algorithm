/* 归并排序 js 实现*/
/*
left : [1, 3, 4, 7]
right: [2, 5, 6, 9]
result: [1, 2, 3, 4, 5, 6, 7, 9]
 */

function mergeSort(arr) {
    var merge = function(left, right) {
      var result = []
      while(left.length && right.length) {
        result.push(left[0] <= right[0] ? left.shift() : right.shift())
      }
      return result.concat(left.concat(right))
    }
    if(arr.length < 2) return arr
    var mid = arr.length >> 1
    return merge(mergeSort(this.slice(0, mid)), mergeSort(this.slice(mid)))
  }