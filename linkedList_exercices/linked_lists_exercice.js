export class LinkedList {
    constructor() {
        this.head = null,
            this.size = 0
    }

    append(value) {
        // add a new node containing value at the END of the list

        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.size++;
            return;
        }
        let current = this.head;

        while (current.nextNode) {
            current = current.nextNode;
        }
        // if (!current.nextNode){
        current.nextNode = newNode;
        this.size++;
        // }

    }
    prepend(value) {
        // add a new node containing value at the start of the list

        let current = this.head;
        const newNode = new Node(value)
        newNode.nextNode = current;
        this.head = newNode;
        this.size++;
    }

    sizeNb() {
        // returns total number of nodes in the list
        return this.size;
    }
    headName() {
        // return first node of the list
        return this.head;
    }
    tail() {
        // return last node of the list
        if (!this.head){
            return null;
        }
        let current = this.head;

        while (current.nextNode) {
            current = current.nextNode;
        }
        // if(!current.nextNode){
        return current;
        // }
    }
    at(index) {
        // return the node at the given index
        let i = 0
        let current = this.head;
        while (i < index) {
            i++;
            current = current.nextNode;
        }
        // if (i === index){
        return current;
        // }
    }
    pop() {
        if (!this.head) return null;

        if (!this.head.nextNode) {
            const value = this.head.value;
            this.head = null;
            this.size--;
            return value;
        }

        let current = this.head;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }

        const value = current.nextNode.value;
        current.nextNode = null;
        this.size--;
        return value;
    }

    contains(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let i = 0;
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return i;
            }
            current = current.nextNode;
            i++;
        }
        return null;
    }

    toString() {
        let current = this.head;
        let valueString = "";

        while (current) {
            valueString += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        valueString += "null";
        return valueString;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size){
            return;
        } 

        if (index === 0) {
            this.prepend(value);
            return;
        }

        const newNode = new Node(value);
        let i = 0;
        let current = this.head;

        while (i < index - 1) {
            current = current.nextNode;
            i++;
        }

        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;
        this.size++;
    }

    removeAt(index){
        if (index < 0 || index >= this.size) {
            return;
        }
        if (index === 0) {
            this.head = this.head.nextNode;
            this.size--;
            return;
        }
        
        let i = 0;
        let current = this.head;
        
        while(i < index - 1){
            current = current.nextNode;
            i++;
        }
        
        current.nextNode = current.nextNode.nextNode;
        this.size--;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value,
            this.nextNode = nextNode
    }
}