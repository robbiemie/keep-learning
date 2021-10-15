var a = 1

function fn() {
    console.log(a)
    var a = 2 // undefined
    // 如果是这个： let a = 2 throw error
}

fn()