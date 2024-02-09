To detect a loop in a linked list in JavaScript, you can use the Floyd's Tortoise and Hare algorithm,
also known as the slow and fast pointer approach. The time complexity of this algorithm is O(n), where
n is the number of nodes in the linked list, as you might need to traverse the list once. The space
complexity is O(1) because you only use two pointers.

Here's an example implementation:

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    detectLoop() {
        let slowPtr = this.head;
        let fastPtr = this.head;

        while (fastPtr && fastPtr.next) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;

            if (slowPtr === fastPtr) {
                return true; // Loop detected
            }
        }

        return false; // No loop
    }
}

// Example Usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log("Original linked list:");
console.log("Does the linked list have a loop? " + linkedList.detectLoop());

// Creating a loop for demonstration purposes
linkedList.head.next.next.next.next.next = linkedList.head.next.next;

console.log("\nLinked list with a loop:");
console.log("Does the linked list have a loop? " + linkedList.detectLoop());
