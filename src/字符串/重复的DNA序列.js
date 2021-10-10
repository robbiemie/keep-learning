/**
 * 重复的DNA序列
 * 所有 DNA 都由一系列缩写为 'A'，'C'，'G' 和 'T' 的核苷酸组成，
 * 例如："ACGAATTCCG"。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。
 * 编写一个函数来找出所有目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。
 * https://leetcode-cn.com/problems/repeated-dna-sequences
 */

/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) {
    if(s.length <= 10) return []
    let subs  = []
    let begin = 0
    let end = begin + 10
    let str = ''
    let map = {}
    while(end<= s.length) {
        // 找一个子串
        str = s.slice(begin, end)
        if(map[str]) {
            map[str] += 1
        } else {
            map[str] = 1
        }
        begin++
        end = begin + 10
    }
    Object.keys(map).forEach(key => {
        if(map[key] > 1) {
            subs.push(key)
        }
    })
    return subs
};