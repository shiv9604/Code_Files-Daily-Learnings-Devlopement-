# You have a list of your favourite marvel super heros.

heros=['spider man','thor','hulk','iron man','captain america']

# 1. Length of the list
print(f"The lenth of the list is = {len(heros)}")

# 2. Add 'black panther' at the end of this list
heros.append("black panther")
print(f"The heros after adding black panther are = {heros}")

# 3. You realize that you need to add 'black panther' after 'hulk',
#    so remove it from the list first and then add it after 'hulk
heros.pop()
heros.insert(3,"black panther")

# 4. Now you don't like thor and hulk because they get angry easily :)
#    So you want to remove thor and hulk from list and replace them with doctor strange (because he is cool).
#    Do that with one line of code.
heros.remove("thor")
heros.remove("hulk")
heros.insert(1,"dr strange")
print(f"The heros after adding Dr strange are = {heros}")

# 5. Sort the heros list in alphabetical order (Hint. Use dir() functions to list down all functions available in list)
heros.sort()
print(f"The heros after sorting the heros in alphabetical manner are = {heros}")
