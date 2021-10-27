let str = 'I`m a boy.'

// 翻转上述字符串
// 期望结果为 .boy a m`I
function reverse(s) {
    let result = ''

    let reg = /[a-zA-Z]/
    let startIndex = 0
    let endIndex = 0
    for(let i =0;i<str.length;i++) {
        let char = str[i]
        if(reg.test(char)) {
            endIndex++
        } else {
            result = `${str.slice(startIndex, endIndex)}${result}`
            result = `${str[i]}${result}`
            startIndex = i + 1
            endIndex = startIndex
        }
    }


    return result
}


reverse(str)