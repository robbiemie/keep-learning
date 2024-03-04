interface NodeTree {
  left: NodeTree | null
  right: NodeTree | null
  val: number
}

function maxDepthBFS(root:NodeTree):number {

  if(!root) return 0;
  const queue:Array<NodeTree|null> = [root];
  let maxDepth = 0;

  while(queue.length) {
    let size = queue.length
    for(let i=0;i<size;i++) {
      const node = queue.shift();
      if(node) {
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
    maxDepth++;
  }

  return maxDepth;
}