function convert(s: string, numRows: number): string {
  if(numRows === 1) return s;
  let arr = [];
  for(let index=0;index<numRows;index++) {
      arr.push([])
  }
  // 数组转换
  let i = 0; // 列
  let j = 0; // 行
  let point = 0;
  let type = 1
  while(point < s.length) {
      arr[i][j] = s[point++];
      if(type === 1) {
          i++
      } else {
          i--;
          j++;
      }
      if(i >= numRows) {
          type = 2;
          i-=2;
          j++;
      } else if(i < 0) {
          type = 1;
          i+=2;
          j--;
      }
  }
  let string = '';

  for(let m=0;m<numRows;m++) {
      let array = arr[m];
      string += array.join('')
  }

  return string
};