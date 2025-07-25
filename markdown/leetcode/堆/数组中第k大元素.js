/**
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 */
/**
 * 思路
 * 1. 构建一个最小堆，依次把数组插入到堆中
 * 2. 当堆的容量超过 K ，则删除堆顶元素
 * 3. 插入结束之后，堆顶元素就是第 K 大个元素
 */

 class MinHeap {
    constructor() {
        this.heap = []
    }
    findParentIndex(index) {
        return Math.floor((index -1) / 2)
    }
    findLeftChildIndex(index) {
        return index * 2 + 1
    }
    findRightChildIndex(index) {
        return index * 2 + 2
    }
    swap(childIndex, parentIndex) {
        this.heap[childIndex] = this.heap[childIndex] + this.heap[parentIndex]
        this.heap[parentIndex] = this.heap[childIndex] - this.heap[parentIndex]
        this.heap[childIndex] = this.heap[childIndex] - this.heap[parentIndex]
    }
    compareParent(childIndex) {
        if(childIndex === 0) return
        const parentIndex = this.findParentIndex(childIndex)
        if(this.more(parentIndex, childIndex)) {
            this.swap(childIndex, parentIndex)
            this.compareParent(parentIndex)
        }
    }
    compareChild(parentIndex) {
        let leftChildIndex = this.findLeftChildIndex(parentIndex)
        let rightChildIndex = this.findRightChildIndex(parentIndex)
        if(this.more(parentIndex, leftChildIndex)) {
            this.swap(leftChildIndex, parentIndex)
            this.compareChild(leftChildIndex)
        }
        if(this.more(parentIndex, rightChildIndex)) {
            this.swap(rightChildIndex, parentIndex)
            this.compareChild(rightChildIndex)
        }
    }
    more(i, j) {
        return this.heap[i] > this.heap[j]
    }
    insert(value) {
        this.heap.push(value)
        this.compareParent(this.heap.length - 1)
    }
    pop() {
        this.heap[0] = this.heap.pop()
        this.compareChild(0)
    }
    size() {
        return this.heap.length
    }
    peek() {
        return this.heap[0]
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {

    let minHeap = new MinHeap()
    nums.forEach(item => {
        minHeap.insert(item)
        if(minHeap.size() > k) {
            minHeap.pop()
        }
    })
    console.log(minHeap.heap)
    return minHeap.peek()
};

