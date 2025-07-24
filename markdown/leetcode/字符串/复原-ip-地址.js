/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 ip 地址
 */
// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let map = {
        1: [3,9],
        2: [2,6],
        3: [1,3],
        4: [0,0]
    }
    let result = []
    
    function r (start, arr, level, string) {
        
        const [prev,next] = map[level]
        let strLen = s.slice(start).length
        if( strLen < prev || 
            strLen > next || 
            String(+string).length !== string.length ||
            Number(string) < 0 ||
            Number(string) > 255 ||
            level > 4
        ) {
            return
        }
        if(level === 4) {
            result.push(arr.join('.'))
            return
        }
        for(let i=start;i<=start+2;i++) {
            if(i+1 > s.length) continue
            let newStr = s.slice(start, i+1)
            r(i+1,arr.concat(newStr), level+1, newStr)
        }
    }

    for(let i=0;i<3;i++) {
        let str = s.slice(0,i+1)
        r(i+1,[str], 1, str)
    }

    return result
};

// @lc code=end
restoreIpAddresses("010010")