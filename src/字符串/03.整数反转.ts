function reverse(x: number): number {
  let symbol = x > 0 ? 1 : -1;
  let str = `${Math.abs(x)}`
  let arr = str.split('');
  let number = +arr.reverse().join('');
  
  let maxNumber = Math.pow(2, 31);
  if(symbol > 0) maxNumber - 1
  if(number > maxNumber) return 0

  return number * symbol;
};