# linkded list is a data structure made for random insertion and deleetion of an element...
# In arrays we have to move all the next and previous element while radom insertion and deletation....
# So we are going to use Linked list over the arrays...

''' 
Linked list [][]-->[][]-->[][] This type of data structure...
The first box contain the data and the second contains the pointer for the next link..
The first node is called as  = Head
The second node contains the pointer towards the next list is called as = next 
''' 

# A simple Python program to introduce a linked list
# Node class
class Node:
    
    # Function to initialise the node object
    def __init__(self,data=None,next=None):
        self.data = data
        self.next = next


# Linked List class contains a Node object
class linkedlist:
    
    # Function to initialize head
    def __init__(self):
        self.head = None

    def insert_at_begning(self,data):
        node = Node(data,self.head)
        self.head = node

    def print(self):
        itr = self.head
        llstr = ''
        while itr:
            llstr += str(itr.data) + '-->' 
            print(llstr)



if __name__ == '__main__':
    root = linkedlist()
    root.insert_at_begning(1)
    root.insert_at_begning(2)
    # root.insert_at_begning(3)
    root.print()
