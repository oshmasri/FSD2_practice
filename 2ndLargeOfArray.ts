function findSecondLargest(arr: number[]): number | null {
    if (arr.length < 2) {
        return null;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}

// Example
let arr = [12, 35, 1, 10, 34, 1];

console.log("Second Largest =", findSecondLargest(arr));