Largest Sum Contiguous Subarray (Kadane’s Algorithm)

Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum. 

You can solve this problem efficiently using Kadane's Algorithm.
Here's a JavaScript program to find the largest sum contiguous subarray:

function maxSubarraySum(arr) {
    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // Calculate the maximum sum ending at the current index
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

        // Update the maximum sum so far
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Example Usage
const array1 = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log("Largest sum contiguous subarray:", maxSubarraySum(array1));

const array2 = [1, 2, 3, -2, 5];
console.log("Largest sum contiguous subarray:", maxSubarraySum(array2));

// Output 
Largest sum contiguous subarray: 7
Largest sum contiguous subarray: 9

This program uses Kadane's Algorithm to find the maximum sum contiguous subarray.
The algorithm maintains two variables: maxEndingHere represents the maximum sum of a subarray ending at the current index,
and maxSoFar represents the maximum sum encountered so far.

Time Complexity:

The time complexity of Kadane's Algorithm is O(n), where n is the size of the input array. We iterate through the array once.
Space Complexity:

The space complexity is O(1) as we use only a constant amount of extra space regardless of the size of the input array.
