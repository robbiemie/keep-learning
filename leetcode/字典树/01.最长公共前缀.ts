function longestCommonPrefix(strs: string[]): string {
  let isValid = true;
  let index = 0;
  let chars = strs[0]
  let str = ''
  if(strs.length === 1) return chars;
  
  while(index < chars.length && isValid) {
      let char = chars[index];
      let i: number;
      for(i=1;i<strs.length;i++) {
          if(!isValid) break;
          if(char !== strs[i][index]) {
              isValid = false
          }
      }
      if(i === strs.length && isValid) {
          str += char || '';
      }
      index++;
  }

  return str;
};