const prompt = require('prompt-sync')();


let inputIsValid = false;
do {
    let NumberLines = prompt("Input: ");
    let testCases = [];
    inputIsValid = validate(NumberLines);

    //Kiểm tra valid input
    if (!inputIsValid) {
        console.log("Sai input");
    } else {
        for (let i = 0; i < NumberLines; i++) {
            let testCase = prompt();
            inputIsValid = (NumberLines, testCase)
            if (validate) {
                testCases.push(testCase);
            } else {
                console.log("sai input");
                break;
            }

        }
        let output = checkBalance(testCases);
        console.log(output.join('\n'));
        inputIsValid = false
    }
} while (!inputIsValid)

function checkBalance(testCases) {
    let results = [];
    for (let i = 0; i < testCases.length; i++) {
        results.push(isBalanced(testCases[i]) ? 'true' : 'false');
    }
    return results;
}

function isBalanced(input) {
    let arrBalanced = [];
    // Các dấu mở và đóng tương ứng
    let openingBrackets = ['{', '[', '('];
    let closingBrackets = ['}', ']', ')'];

    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        // Kiểm tra xem có phải dấu mở hay không
        if (openingBrackets.includes(currentChar)) {
            arrBalanced.push(currentChar);
        } else if (closingBrackets.includes(currentChar)) {
            // Nếu là dấu đóng, lấy dấu mở tương ứng từ mảng
            let lastOpeningBracket = arrBalanced.pop();

            // Kiểm tra tính hợp lệ của cặp ngoặc
            if (!lastOpeningBracket || openingBrackets.indexOf(lastOpeningBracket) !== closingBrackets.indexOf(currentChar)) {
                return false; // Nếu không hợp lệ, trả về false
            }
        }
    }
    return arrBalanced.length === 0;
}


function validate(N, strings) {

    if (N) {
        if (N <= 0 || N > 100) {
            return false;
        }
    }

    if (strings) {
        for (let i = 0; i < N; i++) {
            if (strings[i].length > 100000) {
                return false;
            }
        }
    }

    return true;
}
