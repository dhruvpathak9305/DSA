// Write a Javascript Program to cyclically rotate an array by one.

function rotateArrayByOne(arr) {
    const n = arr.length;
    const lastElement = arr[n - 1];

    for (let i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = lastElement;

    return arr;
}

// Sample Input
const inputArray = [1, 2, 3, 4, 5];

// Rotate the array by one
const rotatedArray = rotateArrayByOne(inputArray);

// Output
console.log("Original Array:", inputArray);
console.log("Rotated Array:", rotatedArray);

// Original Array: [1, 2, 3, 4, 5]
// Rotated Array: [5, 1, 2, 3, 4]

// Time Complexity:

// The time complexity of this program is O(n), where n is the length of the array. This is because we iterate through the array once.
// Space Complexity:

// The space complexity is O(1) since the rotation is done in-place without using any additional space that scales with the size of the input array.
