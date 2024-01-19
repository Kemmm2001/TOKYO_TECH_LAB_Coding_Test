const prompt = require('prompt-sync')();

while (true) {
    let inputString = prompt("Input: ");
    let inputArray = inputString.split(' ');

    let m = parseInt(inputArray[0], 10); // Số lượng quái
    let d = parseInt(inputArray[1], 10); // độ bền
    let k = parseInt(inputArray[2], 10); // Đơn vị giảm độ bền
    let c = parseInt(inputArray[3], 10); // vàng để sửa

    //Tính số lượng một lần có thể giết
    let killCount = Math.floor(d / k)

    // //Tính số lần phải sửa lại kiếm
    let repairCount = Math.floor(m / killCount);

    if (d % k !== 0) {
        repairCount -= 1
    }

    if(m % killCount !== 0){
        repairCount += 1
    }

    let totalGold = Math.floor(repairCount * c);
    console.log(totalGold)
}