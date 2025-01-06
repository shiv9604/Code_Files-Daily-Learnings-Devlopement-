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

    get(index){
        if(index<0 && index>this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i<index; i++){
          temp = temp.next;
        }
        return temp;
      }

      set(index, value){
        let temp = this.get(index);
        if(temp){
          temp.value = value;
          return true;
        }
        else{
          return false;
        }
      }

      insert(index, value){
        if(index<0 || index>this.length) return undefined;
        if(index==0) return this.unshift(value);
        if(index==this.length) return this.push(value);
      
        let newNode = new Node(value);
        let temp = this.get(index-1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
      }

      remove(index){
        if(index<0 || index==this.length) return undefined;
        if(index==0) return this.shift();
        if(index==(this.length-1)) return this.pop();
      
        let pre = this.get(index-1);
        let cur = pre.next;
      
        pre.next = cur.next;
        cur.next = null;
        this.length--;
        return cur;
      }

      reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        

        let prev = null;
        let next = temp.next;

        for(let i=0;i<this.length;i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
      }
}

const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(4);

// Testing for Insert
console.log("\nValue at 3 1index : ", myLinkedList.get(3))
console.log("\nInserting Value at 3rd index : ",myLinkedList.insert(3,3))
console.log("\nValue at 3th index : ",myLinkedList.get(3));
console.log("\nValue at 4th index : ",myLinkedList.get(4))

// Testing for remove
console.log("\nRemoving value at second 3 rd index which is three =>",myLinkedList.remove(3));
console.log("\nValue at 3rd index Should be 4: ",myLinkedList.get(3));

// Testing for reverse
console.log("\nLinkedList Before Reverse : ",myLinkedList);
console.log("\nLinkedList After Reverse : ",myLinkedList.reverse());



