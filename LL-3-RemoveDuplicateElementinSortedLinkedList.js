To remove duplicate elements from a sorted linked list in JavaScript, you can iterate through the list and remove any duplicate nodes.
The time complexity of this operation is O(n), where n is the number of nodes in the linked list, because you need to visit each node
at least once. The space complexity is O(1) since no additional data structures are used.


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SortedLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head || data < this.head.data) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next && data > current.next.data) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    removeDuplicates() {
        let current = this.head;

        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data + " ");
            current = current.next;
        }
    }
}

// Example Usage:
const sortedList = new SortedLinkedList();
sortedList.append(1);
sortedList.append(2);
sortedList.append(2);
sortedList.append(3);
sortedList.append(4);
sortedList.append(4);
sortedList.append(5);

console.log("Original sorted linked list:");
sortedList.printList();

sortedList.removeDuplicates();

console.log("\nLinked list after removing duplicates:");
sortedList.printList();
