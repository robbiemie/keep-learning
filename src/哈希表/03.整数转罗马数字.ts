function intToRoman(num: number): string {
  const map = new Map();
  map.set(1, 'I')
  map.set(5, 'V')
  map.set(10, 'X')
  map.set(50, 'L')
  map.set(100, 'C')
  map.set(500, 'D')
  map.set(1000, 'M')
  
  let str = `${num}`;
  let length = str.length;
  let index = length;
  let roman = ''

  function getRoman(mod: number, length: number): string {
      let value = mod * length // 8 * 1 | 3 * 1
      let char = '' 
      if(mod === 4 || mod === 9) {
          char = map.get(length) + map.get((mod + 1) * length)
      } else if(map.get(value)) {
          char = map.get(value)
      } else {
          if(mod > 5) {
              // 前缀
              char += `${map.get(5 * length)}`
          }
          // 补充尾部个数
          char += `${new Array(mod % 5).fill(map.get(length)).join('')}`
      }
      return char;
  }

  while(index > 0) {
      let char = str[length - index];
      roman += getRoman(+char,  Math.pow(10, index - 1));
      index--;
  }

  return roman;
};