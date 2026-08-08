function findMissingNumber(arr: number[], n: number): number {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (const num of arr) {
        actualSum += num;
    }

    return expectedSum - actualSum;
}

// Example
let arr = [1, 2, 4, 5];
let n = 5;

console.log("Missing Number =", findMissingNumber(arr, n));