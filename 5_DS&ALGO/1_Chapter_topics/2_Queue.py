# Queue is acts as real world queue(FIFO,LILO)
# for Queue as well we are using list...

Queue = []

def isEmpty(num):
    if not num:
        return True
    else:
        False

def inque(list,num):
    list.append(num)

def deque(list,index):
    if isEmpty(list):
        print("The queue is empty...")
    else:
        list.pop(0)
        return Queue
inque(Queue,1)
inque(Queue,2)
inque(Queue,3)
print(Queue)
deque(Queue,1)
deque(Queue,2)
deque(Queue,3)
deque(Queue,4)
print(Queue)

