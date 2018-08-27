import argparse 
import sys
import os
import json

with open('config.json', 'r') as f:
    config = json.load(f)


dockerHub = config['dockerHub']
container = config['container']
run = config['run']


parser=argparse.ArgumentParser()

parser.add_argument('--tag', help='tag de la imagen')

args=parser.parse_args()

if args.tag != None:

    os.system("gulp prod")
    os.system("docker stop " + container)
    os.system("docker rm " + container)

    proc = os.popen("docker images -q " + dockerHub + "/" + container + ":" + args.tag).read()

    if len(proc) > 0:
    	os.system("docker rmi " + dockerHub + "/" + container + ":" + args.tag)
    

    os.system("cp -R ./dist ./docker")
    os.system("cp -R ./node_modules ./docker")

    os.system("docker build -t " + dockerHub + "/" + container + ":" + args.tag + " -t " + dockerHub + "/" + container + ":latest ./docker")

    os.system("docker run -d " + run + " " + dockerHub + "/" + container + ":" + args.tag)

    os.system("rm -R ./docker/dist")
    os.system("rm -R ./docker/node_modules")


else :
    print("Se debe ingresar el tag de la imagen")


