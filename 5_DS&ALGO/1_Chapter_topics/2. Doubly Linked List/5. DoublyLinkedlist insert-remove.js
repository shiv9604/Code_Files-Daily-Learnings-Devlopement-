class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
  
    push(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    pop() {
      if (this.length === 0) return undefined;
      let temp = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
      }
      this.length--;
      return temp;
    }
  
    unshift(value) {
      const newNode = new Node(value);
      if(!this.head) {
          this.head = newNode;
          this.tail = newNode;
      }
      else{
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
      }
      this.length++;
      return this;
    }

    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        if(this.length===1){
          this.head = null;
          this.tail = null;
        }else{
          this.head = this.head.next;
          this.head.prev = null;
          temp.next = null;
        }
        this.length--;
        return temp;
      }

      get(index){
        if(index<0 || index>this.length) return undefined;
        let temp;
        if(index<this.length/2) {
          temp = this.head;
          for(let i=0; i<index;i++){
            temp = temp.next;
          }
        }else{
          temp = this.tail;
          for(let i = this.length-1; i>index;i--){
            temp = this.tail;
            temp = temp.prev;
          }
        }
        return temp;
      }
      set(index, value){
        if(index > this.length || index < 0) return undefined;
        let temp = this.get(index);
        if(temp){
          temp.value = value;
          return true;
        }
          return false;
      }

      insert(index, value) {
        if(index < 0 || index>this.length) return false;
        if(index===0) return this.unshift(value);
        if(index===this.length-1) return this.push(value);
        let newNode = new Node(value);
        let pre = this.get(index-1);
        let next = pre.next;
        pre.next = newNode;
        newNode.prev = pre;
        newNode.next = next;
        next.prev = newNode;
        this.length++;
        return true;
      }

      remove(index){
        if(index<0 || index>this.length) return undefined;
        if(index==0) return this.shift();
        if(index==this.length-1) return this.pop();
        let cur = this.get(index);
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
        cur.prev = null;
        cur.next = null;
        this.length--;
        return cur;
      }
}

  
  const myLinkedList = new DoublyLinkedList(0);
  myLinkedList.push(1);
  myLinkedList.push(3);
  myLinkedList.push(2);
  console.log(myLinkedList);
  console.log("Removed 3 :",myLinkedList.remove(2))
  console.log(myLinkedList);
  
   
  