class LinkedList {
    root = null;
    size = 0;

    add(value) {
        if (!this.size) {
            this.root = new Node(value);
            ++this.size;
            return true;
        }

        let node = this.root;

        while (node.next) {
            node = node.next;
        }

        node.next = new Node(value);
        ++this.size;
    }

    remove(value) {
        if (!this.size) {
            return;
        }

        let node = this.root;
        let prevNode = null;
        let nextNode = this.root.next;

        while (node) {
            if (node.value === value) {
                if (prevNode?.next) {
                    prevNode.next = nextNode;
                }

                node = null;
                --this.size;
                return;
            }

            prevNode = node;
            nextNode = node.next?.next;
            node = node.next;
        }
    }

    getSize() {
        return this.size;
    }

    print() {
        let result = [];
        let node = this.root;

        while (node) {
            result.push(node.value);
            node = node.next;
        }

        console.log(result);
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
// console.log('size ', linkedList.getSize());
linkedList.print();
linkedList.remove(2);
// linkedList.print();
// console.log('size ', linkedList.getSize());
linkedList.add(3);
// linkedList.print();
// console.log('size ', linkedList.getSize());
