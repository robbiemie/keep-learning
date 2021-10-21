const template = "My name is ${name}, I`m from ${city}"

function print(template, obj) {
    /**
     * $0: match 匹配的字段
     * $1: 捕获的结果
     */
    return template.replace(/\${(\w+)}/g, ($0, $1) => {
        console.log($0, $1)
        return obj[$1]
    })
}

const result = print(template, {
    name: 'haha',
    city: 'BeiJing'
})

console.log(result) // My name is hah, I`m from BeiJing