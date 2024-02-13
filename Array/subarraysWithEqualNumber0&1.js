Count subarrays with equal number of 1’s and 0’s

Given an array arr[] of size n containing 0 and 1 only. The problem is to count the subarrays having an equal number of 0’s and 1’s.

Examples:  

Input: arr[] = {1, 0, 0, 1, 0, 1, 1}
Output: 8
Explanation: The index range for the 8 sub-arrays are: (0, 1), (2, 3), (0, 3), (3, 4), (4, 5)(2, 5), (0, 5), (1, 6)

Input: arr = { 1, 0, 0, 1, 1, 0, 0, 1}
Output: 12


You can solve this problem using the concept of prefix sum and hashing.
Here's a JavaScript program to count the subarrays with an equal number of 0's and 1's:

function countSubarraysWithEqualZerosAndOnes(arr) {
    const n = arr.length;

    // Initialize a hash table to store the count of prefix sums
    const prefixSumCount = {};
    let prefixSum = 0;
    let count = 0;

    // Initialize the count of prefix sum 0 as 1 (before encountering any element)
    prefixSumCount[0] = 1;

    // Iterate through the array and calculate the prefix sum at each index
    for (let i = 0; i < n; i++) {
        prefixSum += arr[i] === 0 ? -1 : 1;

        // If the current prefix sum has been seen before, add its count to the result
        if (prefixSumCount.hasOwnProperty(prefixSum)) {
            count += prefixSumCount[prefixSum];
        }

        // Increment the count of the current prefix sum in the hash table
        prefixSumCount[prefixSum] = (prefixSumCount[prefixSum] || 0) + 1;
    }

    return count;
}

// Example Usage
const array1 = [1, 0, 0, 1, 0, 1, 1];
console.log("Count of subarrays with equal 0's and 1's:", countSubarraysWithEqualZerosAndOnes(array1));

const array2 = [1, 0, 0, 1, 1, 0, 0, 1];
console.log("Count of subarrays with equal 0's and 1's:", countSubarraysWithEqualZerosAndOnes(array2));

Count of subarrays with equal 0's and 1's: 8
Count of subarrays with equal 0's and 1's: 12

This program uses the concept of prefix sum to keep track of the sum of elements encountered so far.
The count of subarrays with an equal number of 0's and 1's is incremented whenever a previously seen prefix sum is encountered.

Time Complexity:

The time complexity of this solution is O(n), where n is the size of the input array.
We iterate through the array once.
Space Complexity:

The space complexity is O(n), where n is the size of the input array. 
This is due to the hash table used to store the count of prefix sums.
