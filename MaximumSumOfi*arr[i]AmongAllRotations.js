Maximum sum of i*arr[i] among all rotations of a given array

Given an array arr[] of n integers, find the maximum that maximizes the sum of the value of i*arr[i] where i varies from 0 to n-1.

Examples:  

Input: arr[] = {8, 3, 1, 2}
Output: 29
Explanation: Lets look at all the rotations,
{8, 3, 1, 2} = 8*0 + 3*1 + 1*2 + 2*3 = 11
{3, 1, 2, 8} = 3*0 + 1*1 + 2*2 + 8*3 = 29
{1, 2, 8, 3} = 1*0 + 2*1 + 8*2 + 3*3 = 27
{2, 8, 3, 1} = 2*0 + 8*1 + 3*2 + 1*3 = 17

Input: arr[] = {3, 2, 1}
Output: 7
Explanation: Lets look at all the rotations,
{3, 2, 1} = 3*0 + 2*1 + 1*2 = 4
{2, 1, 3} = 2*0 + 1*1 + 3*2 = 7
{1, 3, 2} = 1*0 + 3*1 + 2*2 = 7

https://www.youtube.com/watch?v=06VQFH9YmNY

You can solve this problem by observing a pattern in the sum of iarr[i] for each rotation.
The maximum sum can be found by calculating the sum for each rotation and keeping track
of the maximum value. Here's a JavaScript program to find the maximum sum of iarr[i] among all rotations:

function maxRotationSum(arr) {
    let n = arr.length;
    let arrSum = 0; // Sum of array elements
    let rotationSum = 0; // Sum of i*arr[i]
    let maxSum = 0;

    // Calculate arrSum and rotationSum for the initial rotation
    for (let i = 0; i < n; i++) {
        arrSum += arr[i];
        rotationSum += i * arr[i];
    }

    maxSum = rotationSum;

    // Calculate rotationSum for each subsequent rotation
    for (let i = 1; i < n; i++) {
        rotationSum = rotationSum + arrSum - n * arr[n - i];
        maxSum = Math.max(maxSum, rotationSum);
    }

    return maxSum;
}

// Example Usage
const array1 = [8, 3, 1, 2];
console.log("Maximum sum of i*arr[i]:", maxRotationSum(array1));

const array2 = [3, 2, 1];
console.log("Maximum sum of i*arr[i]:", maxRotationSum(array2));

Output:

Maximum sum of i*arr[i]: 29
Maximum sum of i*arr[i]: 7

This program calculates the sum of array elements (arrSum) and the initial sum of i*arr[i] (rotationSum).
Then, it iteratively calculates the sum for each rotation by updating rotationSum based on the previous rotation.
The maximum sum is tracked using the variable maxSum.

Time Complexity:
The time complexity of this solution is O(n), where n is the size of the input array. We iterate through the array twice.

Space Complexity:
The space complexity is O(1) as we use only a constant amount of extra space regardless of the size of the input array.
