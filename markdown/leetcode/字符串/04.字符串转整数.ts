function myAtoi(s: string): number {

  let str = s.trim();

  function isValid(testStr: string = ''): boolean {
      return !!testStr.match(/\+|-|[0-9]/g)
  }
  if(!isValid(str[0])) return 0;

  let result = str.match(/^(\+|-)?\d+/);
  str = result ? result[0] : '';
  let number = +str;
  console.log(str, number)
  if(isNaN(number)) return 0;
  let symbol = number > 0 ? 1 : -1;
  let abs = Math.abs(number);
  let maxNumber = Math.pow(2, 31);
  if(symbol > 0) {
      maxNumber -= 1
  }
  if(abs > maxNumber) {
      number = maxNumber * symbol
  }
  return number
};