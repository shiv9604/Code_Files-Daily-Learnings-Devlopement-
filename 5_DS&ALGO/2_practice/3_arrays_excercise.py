# Create a list of all odd numbers between 1 and a max number. Max number is something you need to take from a user using input() function
odd_numbers = []
max_number = int(input("Enter the max number : "))

for i in range(1,max_number):
    if i%2==1:
        odd_numbers.append(i)
print(odd_numbers)