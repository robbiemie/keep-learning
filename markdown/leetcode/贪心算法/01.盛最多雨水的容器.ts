// 暴力穷举法
function maxArea1(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = 0;

  while(left < height.length) {
      right = left + 1;
      for(let i=right;i<height.length;i++) {
          const w = i - left;
          const h = Math.min(height[i], height[left]);
          max = Math.max(max, w * h);
      }
      left++;
  }
  return max;
};
// 双指针
function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while(left < right) {
      let w = right - left;
      let h = Math.min(height[left], height[right]);

      max = Math.max(max, w * h);

      if(h === height[left]) {
          left++
      } else {
          right--;
      }
  }
  return max;
};