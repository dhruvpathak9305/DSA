Minimum Number of Platforms Required for a Railway/Bus Station

Given the arrival and departure times of all trains that reach a railway station, the task is to find the minimum number of platforms required for the railway station so that no train waits. We are given two arrays that represent the arrival and departure times of trains that stop.

Examples: 

Input: arr[] = {9:00, 9:40, 9:50, 11:00, 15:00, 18:00}, dep[] = {9:10, 12:00, 11:20, 11:30, 19:00, 20:00} 
Output: 3 
Explanation: There are at-most three trains at a time (time between 9:40 to 12:00)

Input: arr[] = {9:00, 9:40}, dep[] = {9:10, 12:00} 
Output: 1 
Explanation: Only one platform is needed. 

To solve this problem, you can use the Greedy Algorithm approach. Sort the arrival and departure times,
and iterate through them to find the minimum number of platforms required. Here's a JavaScript program to implement this:

javascript

function minPlatformsRequired(arrival, departure) {
    const n = arrival.length;
    
    // Sort arrival and departure times
    arrival.sort((a, b) => a - b);
    departure.sort((a, b) => a - b);

    let platformsRequired = 1; // At least one platform is needed
    let result = 1; // Result to store the final answer
    let i = 1; // Iterator for arrival array
    let j = 0; // Iterator for departure array

    // Process the events in a manner similar to merging in a merge sort
    while (i < n && j < n) {
        if (arrival[i] <= departure[j]) {
            // If a train arrives before the departure of the current train, increment platforms
            platformsRequired++;
            i++;
        } else {
            // If a train departs, decrement platforms
            platformsRequired--;
            j++;
        }

        // Update the result with the maximum number of platforms required at any time
        result = Math.max(result, platformsRequired);
    }

    return result;
}

// Example Usage
const arrival1 = [9.00, 9.40, 9.50, 11.00, 15.00, 18.00];
const departure1 = [9.10, 12.00, 11.20, 11.30, 19.00, 20.00];
console.log("Minimum platforms required:", minPlatformsRequired(arrival1, departure1));

const arrival2 = [9.00, 9.40];
const departure2 = [9.10, 12.00];
console.log("Minimum platforms required:", minPlatformsRequired(arrival2, departure2));

// Output: 

Minimum platforms required: 3
Minimum platforms required: 1   

This program uses a greedy approach to iterate through the arrival and departure times,
keeping track of the number of platforms required at any given time.

Time Complexity:

The time complexity is O(n log n) due to sorting, where n is the number of trains.
Space Complexity:

The space complexity is O(1) as we use only a constant amount of extra space regardless of the size of the input arrays.            
