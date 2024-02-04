function fourSum(nums: number[], target: number): number[][] {

  let result:number[][] = []
  let formatNums = [...nums].sort((a,b) => a-b);
  let set:Set<string> = new Set()

  for(let i=0;i<=formatNums.length-4;i++) {
      let num1 = formatNums[i];
      for(let j=i+1;j<=formatNums.length-3;j++) {
          let num2 = formatNums[j]
          let left = j+1;
          let right = formatNums.length - 1;
          while(left < right) {
              let sum = num1 + num2 + formatNums[left] + formatNums[right];
              if(sum === target) {
                  set.add(`${num1},${num2},${formatNums[left]},${formatNums[right]}`)
                  while(formatNums[left] === formatNums[left+1]) left++;
                  while(formatNums[right] === formatNums[right-1]) right--;
                  left++;
                  right--;
              } else if(sum > target) {
                  right--;
              } else {
                  left++;
              }
          }
      }
  }
  for(let item of set) {
      result.push(item.split(',').map(item => +item))
  }
  return result;
};