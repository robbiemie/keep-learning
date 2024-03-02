function multiply(num1: string, num2: string): string {

    function reverse(str: string = ''):number[] {
        return str.split('').reverse().map(item => +item);
    }

    let arrReverseA = reverse(num1);
    let arrReverseB = reverse(num2);
    let total = new Array(arrReverseA.length + arrReverseB.length).fill(0);

    //console.log(`arrReverseA: ${arrReverseA}, arrReverseB:${arrReverseB}`);
    let index = 0
    for(let i=0;i<arrReverseA.length;i++) {
        let left = arrReverseA[i]
        index = i;
        for(let j=0;j<arrReverseB.length;j++) {
            let result = left * arrReverseB[j] + total[index]
            total[index] = result % 10
            total[index + 1] += Math.floor(result / 10);
            index++;
        }
    }
    return total.reverse().join('').replace(/^0+(?=\d+)/, '');
};