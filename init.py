import os
import sys
import fileinput

constPortApi = '<%PORT_API%>'
constUserDb ='<%USER_DB%>'
constPassDb ='<%PASSWORD_DB%>'
constHostDb ='<%HOST_DB%>'
constPortDb ='<%PORT_DB%>'
constContainer = '<%CONTAINER_NAME%>'
constRegistry = '<%REGISTRY%>'

pathDockerfile = './docker/Dockerfile'
pathEnvironments = 'environments'
pathConfig = 'config.json'
pathDataSource = './server/config/db.ts'
pathGulp = './gulp/tasks/production.js'

portApi = input('Port Api:')
host = input('Host Data Base:')
userDb = input('User Data Base:')
passwordDb = input('Password Data Base:')
portDb = input('Port Data Base:')
registry = input('Docker Registry:')
container = input('Docker Container:')


def replaceFile(filename, constant, param):
    f = open(filename,'r')
    filedata = f.read()
    f.close()

    newdata = filedata.replace(constant,param)

    f = open(filename,'w')
    f.write(newdata)
    f.close()

replaceFile(pathEnvironments, constHostDb, host)
replaceFile(pathEnvironments, constPassDb, passwordDb)
replaceFile(pathEnvironments, constPortDb, portDb)
replaceFile(pathEnvironments, constUserDb, userDb)
replaceFile(pathConfig, constRegistry, registry)
replaceFile(pathConfig, constContainer, container)
replaceFile(pathConfig, constPortApi, portApi)
replaceFile(pathDockerfile, constPortApi, portApi)
replaceFile(pathGulp, constHostDb, host)
replaceFile(pathGulp, constPassDb, passwordDb)
replaceFile(pathGulp, constPortDb, portDb)
replaceFile(pathGulp, constUserDb, userDb)
replaceFile(pathDataSource, constContainer, container)