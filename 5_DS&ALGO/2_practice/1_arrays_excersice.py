
# Let us say your expense for every month are listed below,
# January - 2200
# February - 2350
# March - 2600
# April - 2130
# May - 2190
# Create a list to store these monthly expenses and using that find out,
expenses = [2200,2350,2600,2130,2190] # [jan,feb,mar,apr,may]

# 1. In Feb, how many dollars you spent extra compare to January?
print(f"The value of Dollars you spent extra compare to January is = {expenses[1]-expenses[0]}")

# 2. Find out your total expense in first quarter (first three months) of the year.
print(f"The value of total expense in first quarter (first three months) of the year = {expenses[0] + expenses[1] + expenses[2]}")

# 3. Find out if you spent exactly 2000 dollars in any month
for i in expenses:
    if i ==2000:
        print(f"You spent exactly 2000 dollars in {expenses.index(i)} th month")
    else:
        print(f"You didnt spent exactly 2000 dollar in {expenses.index(i)} th Month...")

# 4. June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list
expenses.append(1980)
print(f"The Updated expenses are = {expenses}")

# 5. You returned an item that you bought in a month of April and
# got a refund of 200$. Make a correction to your monthly expense list
# based on this
correction = expenses[3] = 2130 -200
print(f"After The correction value of expense in the month of april is = {correction}")
print(f"Expenses after correction of refund are = {expenses}")
