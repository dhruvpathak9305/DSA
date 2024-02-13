Find first non-repeating element in a given Array of integers.

Given an array of integers of size N, the task is to find the first non-repeating element in this array. 

Examples:

Input: {-1, 2, -1, 3, 0}
Output: 2
Explanation: The first number that does not repeat is : 2

Input: {9, 4, 9, 6, 7, 4}
Output: 6

You can solve this problem by using a hash table to keep track of the frequency of each element and another
data structure to maintain the order of elements as they appear in the array.
Here's a JavaScript program to find the first non-repeating element:

function firstNonRepeatingElement(arr) {
    const frequencyMap = {};
    const order = [];

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];

        if (frequencyMap.hasOwnProperty(currentElement)) {
            // If the element is repeating, remove it from the order
            const index = order.indexOf(currentElement);
            if (index !== -1) {
                order.splice(index, 1);
            }
        } else {
            // If the element is non-repeating, add it to the order
            order.push(currentElement);
        }

        // Update the frequency of the element
        frequencyMap[currentElement] = (frequencyMap[currentElement] || 0) + 1;
    }

    // Find the first non-repeating element
    for (let i = 0; i < order.length; i++) {
        if (frequencyMap[order[i]] === 1) {
            return order[i];
        }
    }

    return -1; // No non-repeating element found
}

// Example Usage
const array1 = [-1, 2, -1, 3, 0];
console.log("First non-repeating element:", firstNonRepeatingElement(array1));

const array2 = [9, 4, 9, 6, 7, 4];
console.log("First non-repeating element:", firstNonRepeatingElement(array2));

First non-repeating element: 2
First non-repeating element: 6

This program uses a hash table (frequencyMap) to store the frequency of each element and an array (order)
to maintain the order of non-repeating elements. It iterates through the array and updates these data structures accordingly.

Time Complexity:

The time complexity of this solution is O(n), where n is the size of the input array. We iterate through the array once.
Space Complexity:

The space complexity is O(m), where m is the number of unique elements in the array.
The space required scales with the number of distinct elements.
