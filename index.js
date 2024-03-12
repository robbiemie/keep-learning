function multiplyLargeNumbers(str1, str2) {
    function reverse(str = '') {
        return str.split('').reverse().map(item => +item);
    }
    let result = '';
    let arr = new Array(str1.length + str2.length).fill(0);
    let maxStr = str1;
    let minStr = str2;
    // if(str1.length < str2.length) {
    //     maxStr = str2;
    //     minStr = str1;
    // }
    let numbers1 = reverse(maxStr);
    let numbers2 = reverse(minStr);
    for (let i = 0; i < numbers1.length; i++) {
        let index = i;
        for (let j = 0; j < numbers2.length; j++) {
            const multi = numbers1[i] * numbers2[j];
            const sum = arr[index] + multi;
            arr[index] = sum % 10;
            arr[index + 1] += Math.floor(sum / 10);
            index += 1;
        }
    }
    // console.log(arr.reverse()) // 121932631137021795226185032733622923332237463801111263526900
    return arr.reverse().join('');
}
// 测试示例
const str1 = "123456789012345678901234567890";
const str2 = "987654321098765432109876543210";
console.log(multiplyLargeNumbers(str1, str2));
