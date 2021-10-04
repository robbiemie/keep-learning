function sort(arr) {
    for(let i =0;i<arr.length-1;i++) {
        for(let j = 0;j<arr.length - 1;j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

const arr = [5,1,3,2,4]
sort(arr)
console.log(arr)
