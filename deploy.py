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
parser.add_argument('--beta', help='version beta de la imagen')

args=parser.parse_args()

if args.tag != None and args.beta != None :
    os.system("python3 local.py --tag=" + args.tag)
    os.system("python3 push.py --tag=" + args.tag + ' --beta=' + args.beta)
    os.system("git tag " + args.tag + "-BETA." + args.beta)
    os.system("git push origin " + args.tag + "-BETA." + args.beta)


else: 
    print("Se debe ingresar el tag y la version beta de la imagen que se quiere subir")