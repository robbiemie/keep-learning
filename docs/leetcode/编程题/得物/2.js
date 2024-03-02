/********************第 2 题**********************/
// 实现⼀个函数，可以将数组转化为树状数据结构
// ⼊参格式参考：
const arr = [
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 8, name: "i8", parentId: 7 },
];
// 出参格式可⾃⾏设计

/**
 * TreeNode
 * @param {number} id
 * @param {string} name
 * @param {[TreeNode]} children
 */
class TreeNode {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.children = props.children || [];
  }
}

function buildTree(arr = []) {
  /*** 此处写代码逻辑 */
  if (!arr || arr.length === 0) {
    console.warn("No data");
    return;
  }
  let root = null 
  let nodeCount = 0
    // 寻找根节点
    arr.forEach((item) => {
        if(!item.parentId) {
            root = new TreeNode(item)
            nodeCount++
        }
  })
  
  /**
   * 递归生成 TreeNode
   * @param {*} node 
   * @param {*} array 
   */
  const fn = (node, array) => {
    array.forEach(item => {
        if(item.parentId === node.id) {
            // 插入子树
            const nodeTree = new TreeNode(item)
            node.children.push(nodeTree)
            nodeCount++
        }
    })

    node.children.forEach(item => {
        fn(item, array)
    })
  }

  fn(root, arr)
  return root
}

buildTree(arr);
