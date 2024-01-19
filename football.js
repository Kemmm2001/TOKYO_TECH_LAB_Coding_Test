const prompt = require('prompt-sync')();

function countWaysToScore(x, y) {
    let dp = new Array(x + 1).fill(0).map(() => new Array(y + 1).fill(0));

    dp[0][0] = 1;

    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= y; j++) {
            if (i > 0) {
                dp[i][j] += dp[i - 1][j];
            }
            if (j > 0) {
                dp[i][j] += dp[i][j - 1];
            }
        }
    }

    return dp[x][y];
}

const N = parseInt(prompt("Input: "));
const testCases = [];

for (let i = 0; i < N; i++) {
    const testCase = prompt(`Enter test case #${i + 1}: `).split(' ');
    const x = parseInt(testCase[0]);
    const y = parseInt(testCase[1]);
    testCases.push({ x, y });
}

for (let i = 0; i < N; i++) {
    const result = countWaysToScore(testCases[i].x, testCases[i].y);
    console.log(result);
}
