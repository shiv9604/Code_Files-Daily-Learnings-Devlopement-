class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.top && this.length == 0) {
          this.top = newNode;
        }else{
          newNode.next = this.top;
          this.top = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length==0 && !this.top)return undefined;
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.length--;
        return temp
      }
}

const myStack = new Stack(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log("myStack After Pushes :",myStack)
console.log("myStack After Pop :",myStack.pop())
console.log("myStack After Pop :",myStack)
