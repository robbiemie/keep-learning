/*
 ** 找出根节点到叶子节点的最大数字和的路径（使用广度优先算法）
 ** TreeNode {
 **         value: number;
 **   children: TreeNode[] | null
 ** }
 ** SingleNode {
 **         value: number;
 **         next: SingleNode | null
 ** }
 */
class TreeNode {
  value: number;
  children: TreeNode[] | null;

  constructor(value: number, children: TreeNode[] | null = null) {
      this.value = value;
      this.children = children;
  }
}

class SingleNode {
  value: number;
  next: SingleNode | null;

  constructor(value: number, next: SingleNode | null = null) {
      this.value = value;
      this.next = next;
  }
}

function findPath(tree: TreeNode): SingleNode | null {
  if (!tree) return null;

  let queue: Array<{ node: TreeNode; sum: number; path: number[] }> = [];
  let maxSum = 0;
  let maxPath: number[] = [];

  // 初始化队列
  queue.push({ node: tree, sum: tree.value, path: [tree.value] });

  while (queue.length > 0) {
      const { node, sum, path } = queue.shift()!;

      // 叶子节点
      if (node.children === null || node.children.length === 0) {
          if (sum > maxSum) {
              maxSum = sum;
              maxPath = path;
          }
      } else {
          // 改造叶子节点
          node.children.forEach(child => {
              queue.push({
                  node: child,
                  sum: sum + child.value,
                  path: [...path, child.value],
              });
          });
      }
  }

  // 转换
  let head: SingleNode | null = null;
  for (let i = maxPath.length - 1; i >= 0; i--) {
      head = new SingleNode(maxPath[i], head);
  }

  return head;
}
