Find the first repeating element in an array of integers

Given an array of integers arr[], The task is to find the index of first repeating element in it i.e. 
the element that occurs more than once and whose index of the first occurrence is the smallest. 

Examples: 

Input: arr[] = {10, 5, 3, 4, 3, 5, 6}
Output: 5 
Explanation: 5 is the first element that repeats

Input: arr[] = {6, 10, 5, 4, 9, 120, 4, 6, 10}
Output: 6 
Explanation: 6 is the first element that repeats

You can solve this problem by using a hash table to keep track of the indices of elements as you iterate through the array.
Here's a JavaScript program to find the index of the first repeating element:

function firstRepeatingElement(arr) {
    const indexMap = {}; // Hash table to store indices of elements
    let minIndex = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];

        // If the element is already in the hash table, update the minimum index
        if (indexMap.hasOwnProperty(currentElement) && indexMap[currentElement] < minIndex) {
            minIndex = indexMap[currentElement];
        } else {
            // Otherwise, store the index of the first occurrence
            indexMap[currentElement] = i;
        }
    }

    return minIndex === Number.MAX_SAFE_INTEGER ? -1 : minIndex;
}

// Example Usage
const array1 = [10, 5, 3, 4, 3, 5, 6];
console.log("Index of the first repeating element:", firstRepeatingElement(array1));

const array2 = [6, 10, 5, 4, 9, 120, 4, 6, 10];
console.log("Index of the first repeating element:", firstRepeatingElement(array2));


Index of the first repeating element: 5
Index of the first repeating element: 6


This program uses a hash table (indexMap) to store the indices of elements as it iterates through the array.
The variable minIndex is updated whenever a repeating element is found, ensuring that the smallest index
of the repeating element is recorded.

Time Complexity:

The time complexity of this solution is O(n), where n is the size of the input array. We iterate through the array once.
Space Complexity:

The space complexity is O(m), where m is the number of distinct elements in the array. 
The space required scales with the number of unique elements.
