function topKFrequent(nums: number[], k: number): number[] {
  
  const map:Map<number, number> = new Map();

  for(let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  const res = Object.keys(map).map(key => ({key, value: map[key]})).sort((a, b) => b.value - a.value) || [];
  return res.map(item => +item.key).slice(0, k);
};