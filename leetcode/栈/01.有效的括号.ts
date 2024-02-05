function isValid(s: string): boolean {
  let arr = s.split('');
  let map = {
      ')': '(',
      '}': '{',
      ']': '[',
  }
  let stack:string[] = [];
  for(let i=0;i<arr.length;i++) {
      let char:string = arr[i];
      if(stack.length && stack[stack.length - 1]  === map[char]) {
          stack.pop()
      } else {
          stack.push(char)
      }
  }
  return stack.length === 0;
};