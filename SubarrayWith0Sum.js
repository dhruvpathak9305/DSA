Subarray with 0 sum

Given an array of positive and negative numbers, the task is to find if there is a subarray (of size at least one) with 0 sum.

Examples: 

Input: {4, 2, -3, 1, 6}
Output: true 
Explanation:
There is a subarray with zero sum from index 1 to 3.

Input: {4, 2, 0, 1, 6}
Output: true
Explanation: The third element is zero. A single element is also a sub-array.

You can solve this problem using a hash table to keep track of the running sum and its corresponding index.
If at any point the running sum repeats, then there exists a subarray with a sum of 0.
Here's a JavaScript program to check if there is a subarray with a sum of 0:

function hasZeroSumSubarray(arr) {
    const sumMap = {};
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        // If the sum is 0 or has been seen before, there is a subarray with a sum of 0
        if (sum === 0 || sumMap.hasOwnProperty(sum)) {
            return true;
        }

        // Store the current sum along with its index in the hash table
        sumMap[sum] = i;
    }

    return false;
}

// Example Usage
const array1 = [4, 2, -3, 1, 6];
console.log("Has zero sum subarray:", hasZeroSumSubarray(array1));

const array2 = [4, 2, 0, 1, 6];
console.log("Has zero sum subarray:", hasZeroSumSubarray(array2));

Has zero sum subarray: true
Has zero sum subarray: true

This program iterates through the array while keeping track of the running sum.
If the running sum is 0 or has been seen before, it returns true. Otherwise,
it stores the current sum along with its index in the hash table.

Time Complexity:

The time complexity of this solution is O(n), where n is the size of the input array.
We iterate through the array once.
Space Complexity:

The space complexity is O(n) in the worst case, where n is the size of the input array.
This is due to the hash table used to store the running sum and its corresponding index.
