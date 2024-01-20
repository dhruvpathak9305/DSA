// Count pairs with given sum
// Given an array of N integers, and an integer K, the task is to find the number of pairs of integers in the array whose sum is equal to K.

// Examples:  

// Input: arr[] = {1, 5, 7, -1}, K = 6
// Output:  2
// Explanation: Pairs with sum 6 are (1, 5) and (7, -1).

// Input: arr[] = {1, 5, 7, -1, 5}, K = 6
// Output:  3
// Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5).   

// Input: arr[] = {1, 1, 1, 1}, K = 2
// Output:  6
// Explanation: Pairs with sum 2 are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1).

// Input: arr[] = {10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1}, K = 11
// Output:  9
// Explanation: Pairs with sum 11 are (10, 1), (10, 1), (10, 1), (12, -1), (10, 1), (10, 1), (10, 1), (7, 4), (6, 5).

// Time & Space Complexity too. Give solution in JS.


function countPairsWithSum(arr, K) {
    const frequencyMap = {};
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const complement = K - arr[i];

        if (frequencyMap[complement]) {
            count += frequencyMap[complement];
        }

        frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
    }

    return count;
}

// Sample Input
const inputArray1 = [1, 5, 7, -1];
const K1 = 6;

const inputArray2 = [1, 5, 7, -1, 5];
const K2 = 6;

const inputArray3 = [1, 1, 1, 1];
const K3 = 2;

const inputArray4 = [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1];
const K4 = 11;

// Output
console.log("Count of pairs with sum", K1, ":", countPairsWithSum(inputArray1, K1));
console.log("Count of pairs with sum", K2, ":", countPairsWithSum(inputArray2, K2));
console.log("Count of pairs with sum", K3, ":", countPairsWithSum(inputArray3, K3));
console.log("Count of pairs with sum", K4, ":", countPairsWithSum(inputArray4, K4));

Count of pairs with sum 6 : 2
Count of pairs with sum 6 : 3
Count of pairs with sum 2 : 6
Count of pairs with sum 11 : 9

// Time Complexity:

// The time complexity of this solution is O(N), where N is the size of the input array. We iterate through the array once.
// Space Complexity:

// The space complexity is O(N) as we use a hash table to store the frequencies of elements. The space required scales with the size of the input array.
