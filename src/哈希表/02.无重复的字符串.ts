function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length;

  let maxLength = 0;
  // 创建 hashTable
  let charIndexMap = new Map();

  let fastPoint = 0;
  let slowPoint = 0;

  while (fastPoint < s.length) {

    if (charIndexMap.has(s[fastPoint])) {
      slowPoint = Math.max(slowPoint, charIndexMap.get(s[fastPoint]) + 1);
    }

    charIndexMap.set(s[fastPoint], fastPoint);

    maxLength = Math.max(maxLength, fastPoint - slowPoint + 1);

    fastPoint += 1;
  }

  return maxLength;
}