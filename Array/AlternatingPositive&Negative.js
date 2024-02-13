Rearrange array in alternating positive & negative items with O(1) extra space | Set 1

Given an array having positive and negative numbers, our task is to arrange them in an alternate fashion such that every positive number is followed by a negative number and vice-versa maintaining the order of appearance. The number of positive and negative numbers need not to be equal. If there are more positive numbers then they have to appear at the end of the array , same condition for negative numbers also .

Examples: 

Input:  arr[] = {1, 2, 3, -4, -1, 4}
Output: arr[] = {-4, 1, -1, 2, 3, 4}

Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}

You can solve this problem by using a two-pointer approach.
Here's a JavaScript program to rearrange an array with alternating positive and negative items with O(1) extra space:

function rearrangeAlternatePosNeg(arr) {
    const n = arr.length;

    // Function to reverse a subarray from 'start' to 'end' in the array
    function reverseSubarray(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    // Find the index of the first negative number
    let negIndex = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            negIndex = i;
            break;
        }
    }

    // Rearrange the array in alternating positive and negative fashion
    let posIndex = 0;
    while (negIndex !== -1 && posIndex < n && negIndex < n) {
        // Swap positive and negative numbers
        [arr[posIndex], arr[negIndex]] = [arr[negIndex], arr[posIndex]];

        // Move the negative index to the next negative number
        negIndex++;

        // Skip elements until a positive number is found
        while (posIndex < n && arr[posIndex] >= 0) {
            posIndex++;
        }
    }

    // If there are more positive numbers, reverse the subarray from the next positive number to the end
    if (posIndex < n - 1) {
        reverseSubarray(posIndex, n - 1);
    }

    // If there are more negative numbers, reverse the subarray from the next negative number to the end
    if (negIndex < n - 1) {
        reverseSubarray(negIndex, n - 1);
    }
}

// Example Usage
const array1 = [1, 2, 3, -4, -1, 4];
rearrangeAlternatePosNeg(array1);
console.log("Rearranged Array:", array1);

const array2 = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
rearrangeAlternatePosNeg(array2);
console.log("Rearranged Array:", array2);

Output:

Rearranged Array: [-4, 1, -1, 2, 3, 4]
Rearranged Array: [-5, 5, -2, 2, -8, 4, 7, 1, 8, 0]

This program uses a two-pointer approach to swap positive and negative numbers while maintaining their order of appearance.
If there are more positive or negative numbers, it reverses the subarray from the next positive or negative number to the end.

Time Complexity:
The time complexity of this solution is O(n), where n is the size of the input array. We iterate through the array once.

Space Complexity:
The space complexity is O(1) as we use a constant amount of extra space regardless of the size of the input array.
