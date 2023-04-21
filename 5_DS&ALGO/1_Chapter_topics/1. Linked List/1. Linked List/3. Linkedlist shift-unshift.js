class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

//    1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
    pop(){
        if(!this.head){
            return undefined;
        }
        let pre = this.head;
        let cur = this.head;
        while(cur.next){
            pre = cur;
            cur = cur.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return cur;
    }

    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

    shift(){
        if(!this.head){
            return undefined;
        }
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.length--;
        if(this.length == 0){
            this.tail = null;
        }
        return temp;
    }
}

const myLinkedList = new LinkedList(5);
myLinkedList.push(4);
myLinkedList.push(3);
myLinkedList.push(2);
myLinkedList.push(1);
myLinkedList.unshift(6);
console.log(myLinkedList.shift());




