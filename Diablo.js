const prompt = require('prompt-sync')();

const isValidInput = (m, d, k, c) =>
    Number.isInteger(m) &&
    Number.isInteger(d) &&
    Number.isInteger(k) &&
    Number.isInteger(c) &&
    0 <= m && m <= 1000 &&
    0 <= k && k <= 1000 &&
    0 <= c && c <= 1000 &&
    0 < d && d <= 1000;

let inputIsValid = false;

do {
    let inputString = prompt("Input: ");
    let inputArray = inputString.split(' ');

    let m = parseInt(inputArray[0], 10); // số lượng quái cần giết
    let d = parseInt(inputArray[1], 10); // độ bền của kiếm
    let k = parseInt(inputArray[2], 10); // Đơn vị giảm độ bền khi giết 1 quái
    let c = parseInt(inputArray[3], 10); // số vàng để sửa kiếm

    let initialDurability = d // gán độ bền ban đầu

    inputIsValid = isValidInput(m, d, k, c);

    if (!inputIsValid) {
        console.log("Sai input");
    } else {
        inputIsValid = false
        // Kiểm tra xem có thể qua màn không và xử lý logic tiếp theo
        if (d <= k && d > 1) {
            console.log("-1");
        } else {
            // Số lần sửa thanh kiếm
            let repairCount = 0;
            while (m > 0) {
                // Kiểm tra xem có phải sửa lại kiếm không
                if (d - k <= 0 && m > 1) {
                    repairCount++;
                    d = initialDurability;
                }
                m = m - 1;
                d -= k;
            }
            console.log(repairCount * c);
        }
    }
} while (!inputIsValid);
