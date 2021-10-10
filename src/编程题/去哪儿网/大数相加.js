let addStrings = (num1, num2) => {
    let str1 = String(num1)
    let str2 = String(num2)
    let max = Math.max(str1.length, str2.length)
    let result = new Array(max + 1).fill(0)

    let i = str1.length - 1
    let j = str2.length - 1
    let curIndex = 0    
    while((i >= 0 && j >= 0)) {
        let value = result[curIndex] + Number(str1[i]) + Number(str2[j])
        result[curIndex] = value % 10
        result[curIndex + 1] = Math.floor(value / 10)
        i--
        j--
        curIndex++
    }
    while(i>=0) {
        value = result[curIndex] + Number(str1[i])
        result[curIndex] = value % 10
        result[curIndex + 1] = Math.floor(value / 10)
        i--
        curIndex++
    }
    while(j>=0) {
        value = result[curIndex] + Number(str2[j])
        result[curIndex] = value % 10
        result[curIndex + 1] = Math.floor(value / 10)
        j--
        curIndex++
    }
    if(result[curIndex] === 0) {
        return result.reverse().slice(1).join('')
    }
    return result.reverse().join('')
}

console.log(addStrings(456,77))