The key process in quickSort is a partition(). The target of partitions is to place the pivot
(any element can be chosen to be a pivot) at its correct position in the sorted array and put
all smaller elements to the left of the pivot, and all greater elements to the right of the pivot.

Partition is done recursively on each side of the pivot after the pivot is placed 
in its correct position and this finally sorts the array.

Certainly! QuickSort is a widely used sorting algorithm that follows the divide-and-conquer paradigm.
It was developed by Tony Hoare in 1960 and is known for its efficiency and good average-case performance.
Here's an overview of the QuickSort algorithm:

QuickSort Algorithm:
Partitioning:

Choose a pivot element from the array. The pivot selection can be done in various ways,
such as selecting the first, last, or middle element.
Reorder the array such that elements smaller than the pivot are on the left,
and elements greater than the pivot are on the right.
The pivot is now in its final sorted position.
Recursion:

Recursively apply the above steps to the sub-arrays on the left and right of the pivot.
Implementation (in JavaScript):

function quickSort(arr, low, high) {
    if (low < high) {
        // Find the pivot index such that elements smaller than pivot are on the left, and greater are on the right
        const pivotIndex = partition(arr, low, high);

        // Recursively sort the sub-arrays
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

function partition(arr, low, high) {
    const pivot = arr[high]; // Choosing the last element as the pivot
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Swap arr[i + 1] and arr[high] to place the pivot in its final position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1; // Return the index of the pivot
}

// Example Usage
const array = [12, 4, 5, 6, 7, 3, 1, 15];
quickSort(array, 0, array.length - 1);
console.log("Sorted Array:", array);



Time Complexity:

Best Case: Ω (N log (N))
The best-case scenario for quicksort occur when the pivot chosen at the each step divides the array into roughly equal halves.
In this case, the algorithm will make balanced partitions, leading to efficient Sorting.

Average Case: θ ( N log (N))
Quicksort’s average-case performance is usually very good in practice, making it one of the fastest sorting Algorithm.

Worst Case: O(N2)
The worst-case Scenario for Quicksort occur when the pivot at each step consistently results in highly unbalanced partitions.
When the array is already sorted and the pivot is always chosen as the smallest or largest element.
To mitigate the worst-case Scenario, various techniques are used such as choosing a good pivot
(e.g., median of three) and using Randomized algorithm (Randomized Quicksort ) to shuffle the element before sorting.

Auxiliary Space: O(1), if we don’t consider the recursive stack space. If we consider the recursive stack space then,
in the worst case quicksort could make O(N).

Advantages of Quick Sort:
It is a divide-and-conquer algorithm that makes it easier to solve problems.
It is efficient on large data sets.
It has a low overhead, as it only requires a small amount of memory to function.

Disadvantages of Quick Sort:
It has a worst-case time complexity of O(N2), which occurs when the pivot is chosen poorly.
It is not a good choice for small data sets.
It is not a stable sort, meaning that if two elements have the same key, their relative order will not be preserved
in the sorted output in case of quick sort, because here we are swapping elements according to the pivot’s position
(without considering their original positions).
