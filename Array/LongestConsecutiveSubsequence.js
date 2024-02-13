Longest Consecutive Subsequence

Given an array of integers, find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order. 

Examples:  

Input: arr[] = {1, 9, 3, 10, 4, 20, 2}
Output: 4
Explanation: The subsequence 1, 3, 4, 2 is the longest subsequence of consecutive elements

Input: arr[] = {36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42}
Output: 5
Explanation: The subsequence 36, 35, 33, 34, 32 is the longest subsequence of consecutive elements.

You can solve this problem by using a HashSet to efficiently check for the presence of elements in the array.
Here's a JavaScript program to find the length of the longest consecutive subsequence:

function longestConsecutiveSubsequence(arr) {
    const numSet = new Set(arr);
    let longestLength = 0;

    for (let num of numSet) {
        // Check if the current number is the starting point of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            // Extend the sequence to the right
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            // Update the longest length if needed
            longestLength = Math.max(longestLength, currentLength);
        }
    }

    return longestLength;
}

// Example Usage
const array1 = [1, 9, 3, 10, 4, 20, 2];
console.log("Length of the longest consecutive subsequence:", longestConsecutiveSubsequence(array1));

const array2 = [36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42];
console.log("Length of the longest consecutive subsequence:", longestConsecutiveSubsequence(array2));

Output:

Length of the longest consecutive subsequence: 4
Length of the longest consecutive subsequence: 5

This program uses a HashSet (numSet) to efficiently check for the presence of elements in the array.
It iterates through each element in the array and, for each element, checks if it is the starting point of a sequence.
If so, it extends the sequence to the right and updates the longest length accordingly.

Time Complexity:

The time complexity is O(n), where n is the size of the input array. We iterate through the array once.

Space Complexity:

The space complexity is O(n), where n is the size of the input array.
This is due to the HashSet used to store the unique elements.
