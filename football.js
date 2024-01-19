const prompt = require('prompt-sync')();
let inputIsValid = false;

do {
    const NumberLines = parseInt(prompt("Input: "));
    const testCases = [];

    inputIsValid = validate(NumberLines);

    if (!inputIsValid) {
        console.log("Sai format");
        continue;
    }

    for (let i = 0; i < NumberLines; i++) {
        const input = prompt().split(' ');
        const x = parseInt(input[0]);
        const y = parseInt(input[1]);
        testCases.push({ x, y });
    }

    inputIsValid = validate(NumberLines, testCases);

    if (!inputIsValid) {
        console.log("Sai format");
    } else {
        const results = giaoHuuBongDa(testCases);
        results.forEach(result => console.log(result));
    }
} while (!inputIsValid);

function giaoHuuBongDa(testCases) {
    const results = [];
    testCases.forEach(({ x, y }) => {
        results.push(combination(x, x + y));
    });
    return results;
}

function combination(k, n) {
    if (k === 0 || k === n) {
        return 1;
    } else {
        return combination(k - 1, n - 1) + combination(k, n - 1);
    }
}

function validate(N, testCases) {
    if (N <= 0 || N > 100) {
        return false;
    }
    if (testCases) {
        for (let i = 0; i < N; i++) {
            const { x, y } = testCases[i];
            if (x < 0 || y < 0 || x > 10 || y > 10) {
                return false;
            }
        }
    }

    return true;
}
