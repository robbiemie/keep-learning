function quickSortFn(arr: number[]): number[] {

  function swap(a:number, b:number):void {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp
  }

  function findBaseIndex(start:number, end:number):number {
    
    const base = arr[start];
    let marker = start;
    for(let i = start + 1;i <= end; i++) {
      if(base > arr[i]) {
        marker += 1;
        swap(marker, i);
      }
    }
    swap(marker, start);

    return marker
  }

  function sort(start: number, end: number) {
    if(start < end) {
      const baseIndex = findBaseIndex(start, end);
      sort(start, baseIndex - 1);
      sort(baseIndex + 1, end);
    }
  }

  sort(0, arr.length - 1)

  return arr
}

// 示例
const arr:number[] = [4, 2, 10, 7, 8, 9, 1, 5];
console.log(quickSortFn(arr)); // 输出排序后的数组