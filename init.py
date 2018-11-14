import os
import sys
import fileinput

# Environments
constPortApi = '<%PORT_API%>'
constUserDb ='<%USER_SQL%>'
constPassDb ='<%PASSWORD_SQL%>'
constHostDb ='<%HOST_SQL%>'
constPortDb ='<%PORT_SQL%>'
constNameDb ='<%NAME_SQL%>'
constHostMongo ='<%HOST_MONGO%>'
constNameMongo ='<%NAME_MONGO%>'
constContainer = '<%CONTAINER_NAME%>'
constRegistry = '<%REGISTRY%>'

# Files
pathDockerfile = './docker/Dockerfile'
pathEnvironments = 'environments'
pathConfig = 'config.json'
pathDataSource = './server/database/SQLManager.ts'
pathGulp = './gulp/tasks/production.js'
pathMongo = './server/database/MongoManager.ts'
pathClient = './server/models/Client.ts'
pathUser = './server/models/User.ts'
pathIndex = './server/models/IndexModels.ts'
pathClientDao = './server/dao/ClientDao.ts'
pathUserDao = './server/dao/UserDao.ts'
pathClientService = './server/service/ClientService.ts'
pathUserService = './server/service/UserService.ts'
pathScript = './server/scripts/create.sql'
pathController = './server/controllers/Controller.ts'
pathRoute = './server/routes/Router.ts'


option = input("Que bases de datos va a utilizar: \n 1) SQL (en este ejemplo usamos MySql) \n 2) Mongo  \n 3) Ambas \n ?")

if(option == "1"):
    configApi()
    deleteMongo()
    configSQL()
elif(option == "2"):
    configApi()
    deleteSQL()
    configMongo()
elif(option == "3"):
    configApi()
    configSQL()
    configMongo()
else:
    print("La opcion ingresada no es correcta")


def configApi():
    portApi = input('Port Api:')
    registry = input('Docker Registry:')
    container = input('Docker Container:')

    replaceFile(pathConfig, constRegistry, registry)
    replaceFile(pathConfig, constContainer, container)
    replaceFile(pathConfig, constPortApi, portApi)
    replaceFile(pathDockerfile, constPortApi, portApi)
    

def configSQL():
    nameDb = input('Name Data Base:')
    host = input('Host Data Base:')
    userDb = input('User Data Base:')
    passwordDb = input('Password Data Base:')
    portDb = input('Port Data Base:')

    replaceFile(pathEnvironments, constHostDb, host)
    replaceFile(pathEnvironments, constPassDb, passwordDb)
    replaceFile(pathEnvironments, constPortDb, portDb)
    replaceFile(pathEnvironments, constUserDb, userDb)
    replaceFile(pathEnvironments, constNameDb, nameDb)
    replaceFile(pathGulp, constHostDb, host)
    replaceFile(pathGulp, constPassDb, passwordDb)
    replaceFile(pathGulp, constPortDb, portDb)
    replaceFile(pathGulp, constUserDb, userDb)

def configMongo():
    nameMongo = input('Name Mongo:')
    hostMongo = input('Host Mongo:')

    replaceFile(pathEnvironments, constHostMongo, hostMongo)
    replaceFile(pathEnvironments, constNameMongo, nameMongo)
    replaceFile(pathGulp, constHostMongo, hostMongo)
    replaceFile(pathGulp, constNameMongo, nameMongo)
    replaceFile(pathDataSource, constContainer, container)


def deleteMongo():
    linesRoute = [18,19,20]
    linesController = [2,9,14,33,34,35,36,37,38,39,41,42,43,44,45]
    linesGulp = [72,73]

    os.remove(pathMongo)
    os.remove(pathUser)
    os.remove(pathUserDao)
    os.remove(pathUserService)

    deleteLines(pathController, linesController)
    deleteLines(pathRoute, linesRoute)
    deleteLines(pathGulp, linesGulp)


def deleteSQL():
    linesRoute = [14,15,16]
    linesController = [0,7,12,17,18,19,20,21,22,23,25,26,27,28,29,30,31]
    linesGulp = [68,69,70,71,72]   

    os.remove(pathDataSource)
    os.remove(pathClient)
    os.remove(pathIndex)
    os.remove(pathClientDao)
    os.remove(pathClientService)

    deleteLines(pathController, linesController)
    deleteLines(pathRoute, linesRoute)
    deleteLines(pathGulp, linesGulp)


def replaceFile(filename, constant, param):
    f = open(filename,'r')
    filedata = f.read()
    f.close()

    newdata = filedata.replace(constant,param)

    f = open(filename,'w')
    f.write(newdata)
    f.close()

def deleteLines(filename, linesRemove):
    f = open(filename,"r")
    lines = f.readlines()
    f.close()

    f = open(filename,"w")

    for index, line in enumerate(lines):
        if index not in linesRemove:
            f.write(line)

    f.close()

def replaceFile(filename, constant, param):
    f = open(filename,'r')
    filedata = f.read()
    f.close()

    newdata = filedata.replace(constant,param)

    f = open(filename,'w')
    f.write(newdata)
    f.close()

def deleteLines(filename, linesRemove):
    f = open(filename,"r")
    lines = f.readlines()
    f.close()

    f = open(filename,"w")

    for index, line in enumerate(lines):
        if index not in linesRemove:
            f.write(line)

    f.close()

    