function countOccurrences(arr: number[]): void {
    const freq = new Map<number, number>();

    for (const num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (const [key, value] of freq) {
        console.log(`${key} : ${value}`);
    }
}

// Example
let arr = [1, 2, 2, 3, 1, 4, 2];

countOccurrences(arr);