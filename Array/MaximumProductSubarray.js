Maximum Product Subarray

Given an array that contains both positive and negative integers, the task is to find the product of the maximum product subarray. 

Examples:

Input: arr[] = {6, -3, -10, 0, 2}
Output:  180
Explanation: The subarray is {6, -3, -10}

Input: arr[] = {-1, -3, -10, 0, 60}
Output:   60
Explanation: The subarray is {60}

You can solve this problem using a modified version of Kadane's Algorithm to keep track of both
the maximum and minimum product subarrays. Here's a JavaScript program to find the maximum product subarray:

function maxProductSubarray(arr) {
    let maxEndingHere = arr[0];
    let minEndingHere = arr[0];
    let maxProduct = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // If the current element is negative, swap maxEndingHere and minEndingHere
        if (arr[i] < 0) {
            [maxEndingHere, minEndingHere] = [minEndingHere, maxEndingHere];
        }

        // Calculate the maximum and minimum product ending at the current index
        maxEndingHere = Math.max(arr[i], maxEndingHere * arr[i]);
        minEndingHere = Math.min(arr[i], minEndingHere * arr[i]);

        // Update the maximum product if needed
        maxProduct = Math.max(maxProduct, maxEndingHere);
    }

    return maxProduct;
}

// Example Usage
const array1 = [6, -3, -10, 0, 2];
console.log("Maximum product subarray:", maxProductSubarray(array1));

const array2 = [-1, -3, -10, 0, 60];
console.log("Maximum product subarray:", maxProductSubarray(array2));

// Output
Maximum product subarray: 180
Maximum product subarray: 60

Maximum product subarray: 180
Maximum product subarray: 60

This program uses a modified version of Kadane's Algorithm to handle both positive and negative numbers.
It maintains two variables, maxEndingHere and minEndingHere,
to track the maximum and minimum product subarrays ending at the current index.
The result is stored in the variable maxProduct.

Time Complexity:
The time complexity is O(n), where n is the size of the input array. We iterate through the array once.

Space Complexity:
The space complexity is O(1) as we use only a constant amount of extra space regardless of the size of the input array.
