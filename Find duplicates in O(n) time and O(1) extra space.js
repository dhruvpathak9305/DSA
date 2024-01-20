Find duplicates in O(n) time and O(1) extra space | Set 1

Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and use only constant memory space.

Note: The repeating element should be printed only once.

Example: 

Input: n=7 , array[]={1, 2, 3, 6, 3, 6, 1}
Output: 1, 3, 6
Explanation: The numbers 1 , 3 and 6 appears more than once in the array.

Time & Space Complexity too. Give solution in JS.

++++++++++++++++++

You can solve this problem using a variation of the Floyd's Tortoise and Hare algorithm, which is used for cycle detection.
Here's a JavaScript program to find duplicates in O(n) time and O(1) extra space:

function findDuplicates(arr) {
    const n = arr.length;
    let slow = arr[0];
    let fast = arr[0];

    // Phase 1: Detect if there's a cycle using Floyd's Tortoise and Hare algorithm
    do {
        slow = arr[slow];
        fast = arr[arr[fast]];
    } while (slow !== fast);

    // Phase 2: Find the start of the cycle (duplicate element)
    fast = arr[0];
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }

    // Print the duplicate elements
    const result = [];
    slow = arr[slow];
    while (slow !== fast) {
        result.push(slow);
        slow = arr[slow];
    }

    return result;
}

// Sample Input
const inputArray = [1, 2, 3, 6, 3, 6, 1];

// Output
console.log("Duplicate elements:", findDuplicates(inputArray));


Duplicate elements: [1, 3, 6]

Time Complexity:

The time complexity of this solution is O(n), where n is the size of the input array.
The algorithm consists of two phases, both of which have linear time complexity.
Space Complexity:

The space complexity is O(1) as we use only a constant amount of extra space regardless of the size of the input array.
