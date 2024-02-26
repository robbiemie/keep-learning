// 投机法
// 二维数组拍平
function kthSmallest1(matrix: number[][], k: number): number {
  const arr = matrix.reduce((prev, cur) => {
      return [...prev, ...cur]
  }, [])
  let res = arr.sort((a,b) => a-b);
  return res[k-1];
};

// 二分法
function kthSmallest2(matrix: number[][], k: number): number {
  const n = matrix.length;

  let left = matrix[0][0]; // min
  let right = matrix[n-1][n-1]; // max

  function findCount(mid) {
      let count = 0;
      for(let i=0;i<n;i++) {
          if(matrix[i][0] > mid) return count
          for(let j=0;j<n;j++) {
              if(matrix[i][j] <= mid) {
                  count++;
              } else {
                  break;
              }
          }
      }
      return count;
  }

  while(left < right) {
      let mid = Math.floor((left + right) / 2); // 向下取整
      if(findCount(mid) < k) {
          // count(mid) < k -> left 小
          left = mid + 1;
      } else {
          // count(mid) >= k -> left 大
          right = mid;
      }
  }

  return left;
};