function searchMatrix(matrix: number[][], target: number): boolean {
  const rows:number = matrix.length;
  const cols:number = matrix[0].length;

  let start:number = 0;
  let end:number = rows * cols - 1;

  while(start <= end) {
    // 二维数组转一维数组: [i][j] -> i * cols + j
    const middleIndex = start + Math.floor((end - start) / 2);
    // 一维索引找二维数组: i: Math.floor(index / cols) j: % cols
    const middleValue = matrix[Math.floor(middleIndex / cols)][middleIndex % cols];
    if(middleValue === target) return true;

    if(middleValue > target) {
      end = middleIndex - 1;
    } else {
      start = middleIndex + 1;
    }
  }

  return false;
};