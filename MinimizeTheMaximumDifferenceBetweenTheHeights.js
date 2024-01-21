Minimize the maximum difference between the heights

Given the heights of N towers and a value of K, Either increase or decrease the height of every tower by K (only once) where K > 0.
After modifications, the task is to minimize the difference between the heights of the longest 
and the shortest tower and output its difference.

Examples: 

Input: arr[] = {1, 15, 10}, k = 6
Output:  Maximum difference is 5.
Explanation: Change 1 to 7, 15 to 9 and 10 to 4.
Maximum difference is 5 (between 4 and 9). We can’t get a lower difference.

Input: arr[] = {1, 5, 15, 10}, k = 3   
Output: Maximum difference is 8, arr[] = {4, 8, 12, 7}

To minimize the maximum difference between the heights, you can sort the array and then
try all possible values of the tower at index i as the tallest tower and at index j as the smallest tower.
You can then update the heights accordingly and find the minimum difference.
Here's a JavaScript program to implement this:

function minimizeMaxDifference(arr, k) {
    const n = arr.length;

    // Sort the array
    arr.sort((a, b) => a - b);

    // Initialize the result with the difference between the tallest and smallest tower
    let result = arr[n - 1] - arr[0];

    // Iterate through all possible tallest and smallest towers
    for (let i = 1; i < n; i++) {
        let maxH = Math.max(arr[i - 1] + k, arr[n - 1] - k);
        let minH = Math.min(arr[0] + k, arr[i] - k);
        result = Math.min(result, maxH - minH);
    }

    return result;
}

// Example Usage
const array1 = [1, 15, 10];
const k1 = 6;
console.log("Minimum maximum difference:", minimizeMaxDifference(array1, k1));

const array2 = [1, 5, 15, 10];
const k2 = 3;
console.log("Minimum maximum difference:", minimizeMaxDifference(array2, k2));

// Output

Minimum maximum difference: 5
Minimum maximum difference: 8

This program sorts the array and then iterates through all possible pairs of tallest and smallest towers.
It calculates the maximum and minimum heights for each pair and updates the result with the minimum difference.

Time Complexity:

The time complexity is O(n log n) due to sorting, where n is the number of towers.

Space Complexity:

The space complexity is O(1) as we use only a constant amount of extra space regardless of the size of the input array.

