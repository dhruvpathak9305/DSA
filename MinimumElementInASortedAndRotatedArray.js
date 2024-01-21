Find the Minimum element in a Sorted and Rotated Array

Given a sorted array arr[] (may be distinct or may contain duplicates) of size N that is rotated at some unknown point, the task is to find the minimum element in it. 

Examples: 

Input: arr[] = {5, 6, 1, 2, 3, 4}
Output: 1
Explanation: 1 is the minimum element present in the array.

Input: arr[] = {1, 2, 3, 4}
Output: 1

You can find the minimum element in a sorted and rotated array using a modified binary search.
Here's a JavaScript program to do that:

function findMinimumElement(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        // If the mid element is greater than the last element, search in the right half
        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else if (arr[mid] < arr[high]) {
            // If the mid element is less than the last element, search in the left half
            high = mid;
        } else {
            // If elements at mid and high are equal, reduce the search space
            high--;
        }
    }

    // At this point, low and high will point to the minimum element
    return arr[low];
}

// Example Usage
const array1 = [5, 6, 1, 2, 3, 4];
console.log("Minimum element in the rotated array:", findMinimumElement(array1));

const array2 = [1, 2, 3, 4];
console.log("Minimum element in the rotated array:", findMinimumElement(array2));

Output:
Minimum element in the rotated array: 1
Minimum element in the rotated array: 1

This program uses a binary search approach to find the minimum element in the rotated array.
The key is to compare the middle element with the last element to determine whether to search in the left or right half.

Time Complexity:

The time complexity of this solution is O(log n), where n is the size of the input array. 
Binary search is used to find the minimum element.

Space Complexity:
The space complexity is O(1) as we use only a constant amount of extra space regardless of the size of the input array.
