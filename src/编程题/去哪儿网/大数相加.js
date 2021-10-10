function reverse(str = '') {
    if(typeof str !== 'string') throw new Error('Type must is String')
    return str.split('').reverse().join('')
}
let add = (num1, num2) => {
    let str1 = reverse(`${num1}`)
    let str2 = reverse(`${num2}`)

    let len1 = str1.length
    let len2 = str2.length

    let len = len1 > len2 ? len1 : len2
    let str = ''
    let isOver10 = false
    let i = 0
    let j = 0

    while(i < len1 || j < len2) {

    }

    return str
}