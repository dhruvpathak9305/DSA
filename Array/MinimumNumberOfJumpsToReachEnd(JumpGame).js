Minimum number of jumps to reach end (Jump Game)

Given an array arr[] where each element represents the max number of steps that can
be made forward from that index. The task is to find the minimum number of jumps to 
-reach the end of the array starting from index 0.

Examples: 

Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
Output: 3 (1-> 3 -> 9 -> 9)
Explanation: Jump from 1st element to 2nd element as there is only 1 step.
Now there are three options 5, 8 or 9. If 8 or 9 is chosen then the end node 9 can be reached. So 3 jumps are made.

Input:  arr[] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}
Output: 10
Explanation: In every step a jump is needed so the count of jumps is 10.

You can solve this problem using a greedy approach.
The idea is to always choose the jump that takes you the farthest. 
Here's a JavaScript program to find the minimum number of jumps:

function minJumps(arr) {
    const n = arr.length;

    if (n <= 1) {
        return 0; // Already at the end
    }

    let maxReach = arr[0]; // Maximum index that can be reached
    let steps = arr[0]; // Number of steps available at the current index
    let jumps = 1; // Number of jumps needed

    for (let i = 1; i < n; i++) {
        if (i === n - 1) {
            return jumps; // Reached the end
        }

        maxReach = Math.max(maxReach, i + arr[i]);
        steps--;

        if (steps === 0) {
            jumps++;
            if (i >= maxReach) {
                return -1; // Cannot reach the end
            }
            steps = maxReach - i;
        }
    }

    return -1; // Cannot reach the end
}

// Example Usage
const array1 = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
console.log("Minimum number of jumps:", minJumps(array1));

const array2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log("Minimum number of jumps:", minJumps(array2));


// Output

Minimum number of jumps: 3
Minimum number of jumps: 10

This program uses the greedy approach, maintaining the maximum index that can be reached (maxReach),
the number of steps available at the current index (steps), and the number of jumps needed (jumps).
It iterates through the array, updating these values to find the minimum number of jumps.

Time Complexity:

The time complexity is O(n), where n is the size of the input array. We iterate through the array once.

Space Complexity:

The space complexity is O(1) as we use only a constant amount of extra space regardless of the size of the input array.
