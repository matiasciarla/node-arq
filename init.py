import os
import sys
import fileinput

portApi = input('Port Api:')
dialect = input('Data Base Dialect:')
userDb = input('User Data Base:')
passwordDb = input('Password Data Base:')
portDb = input('Port Data Base:')
registry = input('Docker Registry:')
container = input('Docker Container:')


# with fileinput.FileInput(filename, inplace=True, backup='.bak') as file:
#     for line in file:
#         print(line.replace(text_to_search, replacement_text), end='')