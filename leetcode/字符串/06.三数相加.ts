function threeSum(nums: number[]): number[][] {
  let sortNums = [...nums].sort((a,b) => {return a - b});
  let result:number[][] = [];
  // 遍历左边界
  for(let i=0;i<sortNums.length-2;i++) {
      let first = sortNums[i];
      let left = i + 1;
      let right = sortNums.length - 1;
      // 避免重复计算
      if(i >= 1 && sortNums[i] === sortNums[i-1]) continue;

      while(left < right) {
          let leftVal = sortNums[left];
          let rightVal = sortNums[right];
          let sum = first + leftVal + rightVal;
          if(sum === 0) {
              result.push([first, leftVal,rightVal])
              // 避免重复计算
              while(left < right && leftVal === sortNums[left+1]) left++;
              while(left < right && rightVal === sortNums[right-1]) right--;
              left++;
              right--;
          } else if(sum < 0) {
              left++
          } else if(sum > 0) {
              right--;
          }
      }
  }
  return result
};