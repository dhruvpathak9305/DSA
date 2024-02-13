// Write a Javascript Program to cyclically rotate an array by value K.
// Also Give its time complexity & space complexity too.
// Take a sample input & output too.

function rotateArrayByK(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than the array length

    reverseArray(arr, 0, n - 1);
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, n - 1);

    return arr;
}

function reverseArray(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Sample Input
const inputArray = [1, 2, 3, 4, 5];
const rotationValue = 2;

// Rotate the array by K
const rotatedArray = rotateArrayByK(inputArray, rotationValue);

// Output
console.log("Original Array:", inputArray);
console.log(`Rotated Array by ${rotationValue} positions:`, rotatedArray);


// Original Array: [1, 2, 3, 4, 5]
// Rotated Array by 2 positions: [4, 5, 1, 2, 3]

// Time Complexity:

// The time complexity of this program is O(n), where n is the length of the array. The array is reversed three times, and each reversal takes linear time.
// Space Complexity:

// The space complexity is O(1) since the rotation is done in-place without using any additional space that scales with the size of the input array.
