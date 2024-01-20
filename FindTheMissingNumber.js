// Find the Missing Number
// Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.

// Note: There are no duplicates in the list.

// Input: arr[] = {1, 2, 4, 6, 3, 7, 8}
// Output: 5
// Explanation: Here the size of the array is 7, so the range will be [1, 8]. The missing number between 1 to 8 is 5

// Time & Space Complexity too. Give solution in JS.

function findMissingNumber(arr) {
    const n = arr.length + 1; // Expected size of the array
    const expectedSum = (n * (n + 1)) / 2; // Sum of the first N integers

    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    return expectedSum - actualSum;
}

// Sample Input
const inputArray = [1, 2, 4, 6, 3, 7, 8];

// Find the missing number
const missingNumber = findMissingNumber(inputArray);

// Output
console.log("Missing Number:", missingNumber);

Missing Number: 5

// Time Complexity:

// The time complexity of this solution is O(N), where N is the size of the input array. This is because we iterate through the array once to calculate the actual sum.
// Space Complexity:

// The space complexity is O(1) since we use a constant amount of extra space regardless of the size of the input array.
