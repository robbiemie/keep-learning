const treeList = [
  { id: 1, parentId: 2 },
  { id: 2, parentId: 0 },
  { id: 3, parentId: 4 },
  { id: 4, parentId: 0 },
  { id: 5, parentId: 4 },
  { id: 6, parentId: 2 },
  { id: 7, parentId: 2 },
  { id: 8, parentId: 3 }
];

class TreeNode {
  value: number
  children: TreeNode[]

  constructor(value) {
    this.value = value
    this.children = [];
  }
}

function restoreTree(treeList):TreeNode[] {
  const map:Map<number, TreeNode> = new Map();
  let head:TreeNode[] = [];

  for(let item of treeList) {
    const node = new TreeNode(item.id);
    map[item.id] = node;
  }
  for(let item of treeList) {
    if(item.parentId === 0) {
      head.push(map[item.id])
    } else {
      const parentNode = map[item.parentId];
      parentNode.children.push(map[item.id])
    }
  }

  return head;
}


const tree = restoreTree(treeList);
console.log(JSON.stringify(tree))