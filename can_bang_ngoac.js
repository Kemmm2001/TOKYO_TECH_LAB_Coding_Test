const prompt = require('prompt-sync')();

function isBalanced(input) {
    const stack = [];
    const openingBrackets = ['{', '[', '('];
    const closingBrackets = ['}', ']', ')'];

    for (let i = 0; i < input.length; i++) {
        const currentChar = input[i];

        if (openingBrackets.includes(currentChar)) {
            stack.push(currentChar);
        } else if (closingBrackets.includes(currentChar)) {
            const lastOpeningBracket = stack.pop();

            if (!lastOpeningBracket ||
                openingBrackets.indexOf(lastOpeningBracket) !== closingBrackets.indexOf(currentChar)) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

function checkBalance(testCases) {
    const results = [];

    for (let i = 0; i < testCases.length; i++) {
        results.push(isBalanced(testCases[i]) ? 'true' : 'false');
    }

    return results;
}

const NumberLines = prompt("Input: ");
const testCases = [];

for (let i = 0; i < NumberLines; i++) {
    const testCase = prompt(`Enter test case #${i + 1}: `);
    testCases.push(testCase);
}

const output = checkBalance(testCases);
console.log(output.join('\n'));
