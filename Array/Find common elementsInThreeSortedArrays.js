Find common elements in three sorted arrays

Input: 
ar1[] = {1, 5, 10, 20, 40, 80} 
ar2[] = {6, 7, 20, 80, 100} 
ar3[] = {3, 4, 15, 20, 30, 70, 80, 120} 
Output: 20, 80

Input: 
ar1[] = {1, 5, 5} 
ar2[] = {3, 4, 5, 5, 10} 
ar3[] = {5, 5, 10, 20} 
Output: 5, 5

To find the common elements in three sorted arrays, you can use a three-pointer approach.
Here's a JavaScript program to achieve this:

function findCommonElements(arr1, arr2, arr3) {
    const commonElements = [];
    
    let i = 0, j = 0, k = 0;

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            commonElements.push(arr1[i]);
            i++;
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }

    return commonElements;
}

// Example Usage
const array1 = [1, 5, 10, 20, 40, 80];
const array2 = [6, 7, 20, 80, 100];
const array3 = [3, 4, 15, 20, 30, 70, 80, 120];

console.log("Common Elements:", findCommonElements(array1, array2, array3));

Common Elements: [20, 80]

const array1 = [1, 5, 5];
const array2 = [3, 4, 5, 5, 10];
const array3 = [5, 5, 10, 20];

console.log("Common Elements:", findCommonElements(array1, array2, array3));

Common Elements: [5, 5]

This solution utilizes three pointers (i, j, k) to iterate through the three arrays simultaneously.
The algorithm compares the elements at these pointers and advances the pointers accordingly to find common elements.

Time Complexity:

The time complexity of this solution is O(n), where n is the total number of elements in the three arrays.
The algorithm iterates through all three arrays once.
Space Complexity:

The space complexity is O(1) as we only use a constant amount of extra space for variables.
