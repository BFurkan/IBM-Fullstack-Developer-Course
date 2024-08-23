file = open('try1.txt', 'r')
content = file.read()
print(content)
file.close()


with open('try1.txt', 'r') as file:
    content = file.read()
    print(content)

with open('try1.txt', 'r') as file:
    file_stuff = file.read()
    print(file_stuff)

file = open('try1.txt', 'r')
line1 = file.readline()
print(line1)
while True:
    line = file.readline()
    if not line:
        break 
    print(line)
file.close()

file = open('try1.txt', 'r')
file.seek(10)
characters= file.read(5)
print(characters)
file.close()


with open('try1.txt','w') as file:
    file.write("new line\n")

with open('try1.txt','r') as file:
    print(file.read())


with open('try1.txt', 'a') as testwritefile:
    testwritefile.write("This is line C\n")
    testwritefile.write("This is line D\n")
    testwritefile.write("This is line E\n")
with open('try1.txt', 'r') as testwritefile:
    print(testwritefile.read())


with open('try1.txt', 'a+') as testwritefile:
    testwritefile.write("This is line E\n")
    print(testwritefile.read())



with open('try1.txt','r') as readfile:
    with open('Example3.txt','w') as writefile:
          for line in readfile:
                writefile.write(line)