import argparse 
import sys
import os
import json
import getpass

with open('config.json', 'r') as f:
    config = json.load(f)


dockerHub = config['dockerHub']
container = config['container']

parser=argparse.ArgumentParser()

parser.add_argument('--tag', help='tag de la imagen')

args=parser.parse_args()
os.system("python3 local.py --tag=" + args.tag)
proc = os.popen("docker images -q " + dockerHub + "/" + container + ":" + args.tag).read()

if args.tag != None :

    if len(proc) > 0:
        pswd = input('User Docker:')
        usr = getpass.getpass('Password:')
        resp = os.popen("docker login -u " + usr + " -p " + pswd).read()

        if "Login Succeeded" not in resp :
            print("Usuario o password de DockerHub incorrectos")
        else :
            os.system("docker push " + dockerHub + "/" + container + ":" + args.tag)
        
    else :
        print("No existe la imagen con el tag ingresado")


else: 
    print("Se debe ingresar el tag")