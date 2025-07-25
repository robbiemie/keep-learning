function letterCombinations(digits: string): string[] {
  if(!digits) return [];

  let map = new Map();
  map.set('2', ['a','b','c']);
  map.set('3', ['d','e','f']);
  map.set('4', ['g','h','i']);
  map.set('5', ['j','k','l']);
  map.set('6', ['m','n','o']);
  map.set('7', ['p','q','r', 's']);
  map.set('8', ['t','u','v']);
  map.set('9', ['w','x','y', 'z']);


  const list = digits.split('').map(item => map.get(item))

  function travelList(prev, next) {
      let newList:string[] = []
      let copyPrev = prev.slice()
      for(let i =0;i<copyPrev.length;i++) {
          const base = copyPrev[i]
          for(let j=0;j<next.length;j++) {
              newList.push(base+next[j])
          }
      }
      return newList
  }
  let result = list[0];
  for(let i=0;i < list.length - 1;i++) {
      result = travelList(result, list[i+1]);
  }

  return result;
};