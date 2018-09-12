/* 插入排序  js 实现*/
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
      for(let j = 0; j < i; j++) {
        if(arr[i] < arr[j]) {
          arr.splice(j, 0, arr[i])
          arr.splice(i+1, 1)
          break
        }
        console.log(arr)
      }
    }
  }
  
  var arr = [10, 34, 21, 47, 3, 28]
  insertionSort(arr)
  console.log(arr)


  /*普通版*/
  function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
      var temp = arr[i]
      for(var j = i; j > 0 && arr[j-1] > temp; j--) {
        arr[j] = arr[j-1]
      }
      arr[j] = temp
    }
  }
  
  
  var arr = [10, 34, 21, 47, 3, 28]
  insertionSort(arr)
  console.log(arr)