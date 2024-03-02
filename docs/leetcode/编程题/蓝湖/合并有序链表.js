// linkNode
// [1,2,3]
// [2,4,5]

// [1,2,2,3,4,5]

/**
 * LinkNode
 * @param {number | null} value 
 * @param {LinkNode | null} next
 */

/**
 * 
 * @param {LinkNode} link1 
 * @param {LinkNode} link2 
 */
 function merge(link1, link2) {
    let point = new LinkNode(0)
    let link = point
    // 遍历两个链表
    while(link1 || link2) {
        if(link1 && link2) {
            if(link1.value < link2.value) {
                point.next = link1
                link1 = link1.next
            } else {
                point.next = link2
                link2 = link2.next
            }
            point = point.next
        } else if(link1) {
            // link2 === null
            point.next = link1
            point = point.next
            link1 = link1.next
        } else {
            // link1 === null
            point.next = link2
            point = point.next
            link2 = link2.next
        }
    }
    return link.next
}


merge([], [])
