class Node {
    constructor(val, prev = null, next = null){
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
class MyDeque {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head == null && this.tail == null ? true : false;
    }

    /**
     * @param {number} value
     */
    append(value) {
        let newNode = new Node(value);

        if (this.isEmpty()){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        let newNode = new Node(value);

        if (this.isEmpty()){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()){
            return -1;
        } else {
            if (this.head === this.tail){
                let result = this.tail;
                this.head = null;
                this.tail = null;
                return result.val;
            } else {
                let result = this.tail;
                this.tail.prev.next = null;
                this.tail = result.prev;
                return result.val;
            }
        }
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()){
            return -1;
        } else {
            if (this.head === this.tail){
                let result = this.head;
                this.head = null;
                this.tail = null;
                return result.val;
            } else {
                let result = this.head;
                this.head.next.prev = null;
                this.head = result.next;
                return result.val;
            }
        }
    }
}
