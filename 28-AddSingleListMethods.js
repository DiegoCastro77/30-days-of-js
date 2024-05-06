class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}

class LinkedListRecharged extends LinkedList {
    constructor() {
        super();
    }

    get(index) {
        if (index < 0) return null;

        let current = this.head;
        let currentIndex = 0;
        while (current !== null && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }

        return current !== null ? current.value : null;
    }

    insertAt(index, value) {
        if (index < 0) return;

        const newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) {
                this.tail = newNode;
            }
            return;
        }

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while (current !== null && currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        if (previous !== null) {
            previous.next = newNode;
        }

        newNode.next = current;

        if (current === null) {
            this.tail = newNode;
        }
    }

    toArray() {
        const array = [];
        let current = this.head;
        while (current !== null) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size()) return null;

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        if (index === 0) {
            this.head = current.next;
            if (this.head === null) {
                this.tail = null;
            }
            return current.value;
        }

        while (current !== null && currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        if (current === null) return null;

        previous.next = current.next;

        if (previous.next === null) {
            this.tail = previous;
        }

        return current.value;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
}

const linkedList1 = new LinkedListRecharged();
linkedList1.append("30");
linkedList1.append("Días");
linkedList1.append("De javascript");

console.log(linkedList1.get(1));

const linkedList2 = new LinkedListRecharged();
linkedList2.append(1);
linkedList2.append(2);
linkedList2.append(3);
linkedList2.insertAt(1, 5);

console.log(linkedList2.toArray()); 

const linkedList3 = new LinkedListRecharged();
linkedList3.append(1);
linkedList3.append(2);
linkedList3.append(3);
linkedList3.removeAt(1);

console.log(linkedList3.toArray()); 
