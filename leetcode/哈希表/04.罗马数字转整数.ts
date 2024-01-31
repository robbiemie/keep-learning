function romanToInt(s: string): number {
  let map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  let result = 0;
  let index = 0;
  while(index < s.length) {
      let current = map.get(s[index]);
      let next = map.get(s[index + 1]) || 0;
      if(current >= next) {
          result += current;
      } else {
          result -= current;
      }
      index++;
  }
  return result;
};