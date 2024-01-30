function isPalindrome(x: number): boolean {
  let isValid = false;

  let str =  `${x}`;

  let start = 0;
  let end = str.length - 1;

  while(start <= end) {
      console.log(str[start], str[end])
      if(str[start] === str[end]) {
          start++;
          end--;
          continue;
      }
      break;
  }

  return start > end;
};

function isPalindrome1(x: number): boolean {
  let isValid = false;

  let str =  `${x}`;

  let arr = str.split('');
  let reverse = arr.reverse().join('')

  return str === reverse;
};