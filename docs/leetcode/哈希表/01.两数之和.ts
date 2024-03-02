/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
  你可以按任意顺序返回答案。
 */
function twoSum(nums: number[], target: number): number[] {
  let first_index: number = 0;
  let last_index: number = first_index + 1
  let length = nums.length
  while(first_index < last_index) {
      for(let i = length - 1; i >= last_index; i--) {
          if(nums[first_index] + nums[i] === target) {
              return [first_index, i];
          }
      }
      first_index += 1;
      last_index = first_index + 1
      if(last_index >= length) last_index = length - 1
  }
  return  []
};

// 解法二：hashTable
function twoSum2(nums: number[], target: number): number[] {
  // 创建 hashTable
  let map = {}
  for(let i=0;i<nums.length;i++) {
      let value = target - nums[i];
      if(map[value] >= 0) {
          return [i, map[value]]
      }
      map[nums[i]] = i
  }
  return []
};