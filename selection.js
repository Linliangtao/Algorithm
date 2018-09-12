/* 选择排序算法 js实现*/

function sectionSort(arr) {
    for(let min = i = 0; i < arr.length - 1 /*i代表轮数*/; i++) {
      min = i
      for(let j = i + 1; j < arr.length; j++) {
        if(arr[min] > arr[j]) {
          min = j
        }
      }
      [ arr[i], arr[min] ] = [ arr[min], arr[i] ] //把每轮的第一个和当前轮的最小值交换位置
    }
  }
  
  var arr = [10, 34, 21, 47, 3, 28]
  sectionSort(arr)
  console.log(arr)