class ListNode{
    constructor(value, nextNode = null){
        this.value = value;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head, this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        console.log(this.getValues());
        let current = this.head;
        let i = 0;
        while (current){
            if (i === index){
                return current.value;
            }
            i++;
            current = current.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new ListNode(val);

        if (!this.head){ //Single node case
            this.head = newNode;
            this.tail = this.head;
        } else { //Existing nodes case
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new ListNode(val);

        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let current = this.head;
        let i = 0; 

        if (!current){
            return false;
        }

        if (!current.next && index == i){
            this.head = null;
            this.tail = null;
            return true
        }

        let previus = null;
        while (current){
            if (i === index){
                if (!previus){
                    this.head = current.next;
                } else {
                    if (!current.next){
                        this.tail = previus;
                    }
                    previus.next = current.next;
                }
                return true;
            }
            i++;
            previus = current;
            current = current.next;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let current = this.head;
        let values = [];

        while (current){
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}
