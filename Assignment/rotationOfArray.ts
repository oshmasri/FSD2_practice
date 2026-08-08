function rotateArray(arr: number[], k: number): number[] {
    let n = arr.length;

    k = k % n;

    return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}

// Example
let arr = [1, 2, 3, 4, 5];
let k = 2;

console.log(rotateArray(arr, k));