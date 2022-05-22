# Stack is a data structure where things are arranged on the the on another...(FILO,LIFO)
# we are using the list as a stack in python.

def push(list,num):
    list.append(num)

def pop(list):
    if isEmpty(list):
        print("Stack is empty...")
    else:
        list.pop()

def isEmpty(num):
    if not num:
        return True
    else:
        False

stack = []
push(stack,1)
push(stack,2)
push(stack,3)
print(stack)

pop(stack)
pop(stack)
pop(stack)
pop(stack)

print(stack)







