/* 冒泡排序算法 js 实现*/
function bubleSort(arr) {
    for(let i = 0; i < arr.length-1 /*i代表轮数*/; i++) {
      for(let j = 0; j < arr.length - 1 - i /*j代表当前轮选中的元素下标*/; j++) {
        if(arr[j] > arr[j+1]) {
          [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ] /*交换元素*/
        }
        //console.log(arr)
      }
    }
  }
  
  var arr = [10, 34, 21, 47, 3, 28]
  bubleSort(arr)
  console.log(arr)