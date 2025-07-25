function smallestK(arr: number[], k: number): number[] {

  let result = arr.slice(0,k);
  if(result.length === 0) return [];
  result.sort((a,b) => a -b);

  function findPosition(num, arr2) {
      const index = arr2.findIndex(item => item > num)
      if(index > -1) {
          arr2.splice(index, 0, num);
          arr2.pop();
      }
      return arr2;
  }
  
  for(let i=k;i<arr.length;i++) {
      result = findPosition(arr[i], result);
  }

  return result;
};