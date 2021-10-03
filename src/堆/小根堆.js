/**
 * 小根堆
 * 节点值小于或等于所有子节点
 */
class MinHeap {
    constructor() {
        // 创建堆
        this.heap = []
    }
    // 获取父元素下标位置
    findParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    swap(childIndex, parentIndex) {
        this.heap[childIndex] = this.heap[childIndex] + this.heap[parentIndex]
        this.heap[parentIndex] = this.heap[childIndex] - this.heap[parentIndex]
        this.heap[childIndex] = this.heap[childIndex] - this.heap[parentIndex]
    }
    // 元素与父元素比较
    // 不满足条件，则位置互换
    compare(index) {
        if(index === 0) return
        const parentIndex = this.findParentIndex(index)
        if(this.heap[parentIndex] > this.heap[index]) {
            // 如果不满足小根堆条件
            this.swap(index, parentIndex)
            this.compare(parentIndex)
        }
    }
    // 堆中插入元素
    insert(value) {
        this.heap.push(value)
        this.compare(this.heap.length -1)
    }
}

let heap = new MinHeap()

heap.insert(2)
heap.insert(3)
heap.insert(1)
console.log(heap.heap)