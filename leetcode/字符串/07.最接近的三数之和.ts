function threeSumClosest(nums: number[], target: number): number {
  let min = nums[0] + nums[1] + nums[2];
  nums.sort((a,b) => a-b);
  for(let i = 0; i< nums.length-2;i++) {
      let first = i;
      let left= i + 1;
      let right = nums.length - 1;

      while(left < right) {
          let total = nums[first] + nums[left] + nums[right];

          if(Math.abs(target - min) > Math.abs(target - total)) {
              min = total
          }

          if(total > target) {
              right--;
          } else {
              left++;
          }
      }
  }
  return min;
};