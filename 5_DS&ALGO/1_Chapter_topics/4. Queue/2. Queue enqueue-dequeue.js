class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue{
    constructor(value){
      const newNode = new Node(value);
      this.first = newNode;
      this.last = newNode;
      this.length = 1;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(!this.first && !this.length==0){
          this.first = newNode;
          this.last = newNode;
        }
        else{
          this.last.next = newNode;
          this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
        let temp = this.first;
        if(this.length==0 && !this.first) return undefined;

        if(this.length==1){
            this.first = null;
            this.last = null;
        }
        else{
            this.first = temp.next;
            temp.next = null;
        }
        this.length--;
        return temp
    }
}
const newQueue = new Queue(0);
console.log(newQueue);
console.log("Enqueued 1 :",newQueue.enqueue(1));
console.log("Enqueued 2 :",newQueue.enqueue(2));
console.log("Dequeued :",newQueue.dequeue());
console.log("After Dequeued :",newQueue);