const grid = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
]


function dfs(grid: number[][], r: number, c: number): number {
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 0) {
    return 0;
  }
  // 标记当前位置已访问
  grid[r][c] = 0;
  let area = 1; // 当前位置的面积为 1
  // 探索上下左右四个方向
  area += dfs(grid, r - 1, c);
  area += dfs(grid, r + 1, c);
  area += dfs(grid, r, c - 1);
  area += dfs(grid, r, c + 1);
  return area;
}

function maxAreaCount(grid: number[][]): number {
  let maxArea = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) {
        maxArea = Math.max(maxArea, dfs(grid, r, c));
      }
    }
  }
  return maxArea;
}
