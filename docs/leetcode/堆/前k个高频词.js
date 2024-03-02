/**
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 */
 class MinHeap {
    constructor() {
        this.heap = []
    }
    findParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }
    findLeftChildIndex(parentIndex) {
        return parentIndex * 2 + 1
    }
    findRightChildIndex(parentIndex) {
        return parentIndex * 2 + 2
    }
    swap(i,j) {
        this.heap[i] = this.heap[i] + this.heap[j]
        this.heap[j] = this.heap[i] - this.heap[j]
        this.heap[i] = this.heap[i] - this.heap[j]
    }
    compareParent(childIndex) {
        let parentIndex = this.findParentIndex(childIndex)
        if(this.more(parentIndex, childIndex)) {
            // 交换
            this.swap(parentIndex, childIndex)
            // 递归
            this.compareParent(parentIndex)
        }
    }
    compareChild(parentIndex) {
        let leftChildIndex = this.findLeftChildIndex(parentIndex)
        let rightChildIndex = this.findRightChildIndex(parentIndex)
        if(this.more(parentIndex, leftChildIndex)) {
            this.swap(parentIndex, leftChildIndex)
            this.compareChild(leftChildIndex)
        }
        if(this.more(parentIndex, rightChildIndex)) {
            this.swap(parentIndex, rightChildIndex)
            this.compareChild(rightChildIndex)
        }
    }
    more(i, j) {
        return this.heap[i] > this.heap[j]
    }
    // 插入元素到堆中
    insert(value) {
        this.heap.push(value)
        // 插入的元素与其父元素比较
        this.compareParent(this.heap.length - 1)
    }
    pop() {
        this.heap[0] = this.heap.pop()
        // 堆顶元素与其子元素比较
        this.compareChild(0)
    }
    size() {
        return this.heap.length
    }
    top(k) {
        return this.heap[k]
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    nums.forEach(key => {
        // 统计元素出现频率
        map[key] = map[key] ? map[key] + 1 : 1 
    })
    // 创建一个最小堆
    let minHeap = new MinHeap()
    Object.keys(map).forEach(key => {
        minHeap.insert(map[key])
        if(minHeap.size() > k) {
            // 删除
            minHeap.pop()
        }
    })
    let list = Object.keys(map).filter(key => {
        return minHeap.heap.indexOf(map[key]) > -1
    }).map(item => Number(item))
    return list
};