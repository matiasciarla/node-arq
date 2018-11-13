import os
import sys
import fileinput

option = input("Que bases de datos va a utilizar: \n 1) SQL (en este ejemplo usamos MySql) \n 2) Mongo  \n 3) Ambas \n :")

if(option != "1" and option != "2" and option != "3"):
    print("La opcion ingresada no es correcta")
else:

    constPortApi = '<%PORT_API%>'
    constUserDb ='<%USER_SQL%>'
    constPassDb ='<%PASSWORD_SQL%>'
    constHostDb ='<%HOST_SQL%>'
    constPortDb ='<%PORT_SQL%>'
    constNameDb ='<%NAME_SQL%>'
    # constUserMongo ='<%USER_MONGO%>'
    # constPassMongo ='<%PASSWORD_MONGO%>'
    constHostMongo ='<%HOST_MONGO%>'
    constNameMongo ='<%NAME_MONGO%>'
    constContainer = '<%CONTAINER_NAME%>'
    constRegistry = '<%REGISTRY%>'

    pathDockerfile = './docker/Dockerfile'
    pathEnvironments = 'environments'
    pathConfig = 'config.json'
    pathDataSource = './server/database/SQLManager.ts'
    pathGulp = './gulp/tasks/production.js'

    portApi = input('Port Api:')
    nameDb = input('Name Data Base:')
    host = input('Host Data Base:')
    userDb = input('User Data Base:')
    passwordDb = input('Password Data Base:')
    portDb = input('Port Data Base:')
    nameMongo = input('Name Mongo:')
    hostMongo = input('Host Mongo:')
    # userMongo = input('User Mongo:')
    # passwordMongo = input('Password Mongo:')
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
    replaceFile(pathEnvironments, constNameDb, nameDb)
    replaceFile(pathEnvironments, constHostMongo, hostMongo)
    replaceFile(pathEnvironments, constNameMongo, nameMongo)
    replaceFile(pathGulp, constHostMongo, hostMongo)
    replaceFile(pathGulp, constNameMongo, nameMongo)
    # replaceFile(pathEnvironments, constPassMongo, passwordMongo)
    # replaceFile(pathEnvironments, constUserMongo, userMongo)
    replaceFile(pathConfig, constRegistry, registry)
    replaceFile(pathConfig, constContainer, container)
    replaceFile(pathConfig, constPortApi, portApi)
    replaceFile(pathDockerfile, constPortApi, portApi)
    replaceFile(pathGulp, constHostDb, host)
    replaceFile(pathGulp, constPassDb, passwordDb)
    replaceFile(pathGulp, constPortDb, portDb)
    replaceFile(pathGulp, constUserDb, userDb)
    replaceFile(pathDataSource, constContainer, container)