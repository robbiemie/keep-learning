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
    // 先将数组转换为叶子节点
    let treeMap = arr.reduce((prev, cur) => {
        prev[cur.id] = new TreeNode(cur)
        return prev
    }, {})
    let root = null
    arr.forEach(item => {
        if(!item.parentId) {
            // 根节点
            root = treeMap[item.id]
        } else {
            let parentId = item.parentId
            treeMap[parentId]?.children.push(treeMap[item.id])
        }
    })
    return root

  }
  
const tree = buildTree(arr);
console.log(tree)