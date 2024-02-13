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
            return;
        }
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        last.next = newNode;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data + " ");
            current = current.next;
        }
    }

    deleteMiddle() {
        if (!this.head) {
            console.log("Empty linked list");
            return;
        }

        let slowPtr = this.head;
        let fastPtr = this.head;
        let prevPtr = null;

        while (fastPtr && fastPtr.next) {
            prevPtr = slowPtr;
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
        }

        if (prevPtr) {
            prevPtr.next = slowPtr.next;
        } else {
            // If there is no previous node, update the head
            this.head = slowPtr.next;
        }
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
linkedList.printList();

linkedList.deleteMiddle();

console.log("\nLinked list after deleting middle element:");
linkedList.printList();
