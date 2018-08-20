#!/bin/bash
## Script para levantar una imagen e instanciar un container de una version determinada en el Docker local

if [ $# = 1 ] ; then

# Elimino si los hay la imagen y los containers que quiero reemplazar

	docker stop node-arq
	docker rm node-arq

	if [ ! -z $(docker images -q repo-hub/node-arq:$1) ]; then

		docker rmi repo-hub/node-arq:$1

	fi

	if [ ! -z $(docker images -q repo-hub/node-arq:latest) ]; then

		docker rmi repo-hub/node-arq:latest

	fi

	cp -R ../dist . 
	cp -R ../node_modules .

# Creo la nueva imagen

	docker build -t repo-hub/node-arq:$1 -t repo-hub/node-arq:latest . 

# Instancio el container
	docker run -d -p 8888:8888 --name node-arq -v /usr/app -w /usr/app -e "user=root" -e "password=bssdigital" -e "host=localhost" -e "port=3306" repo-hub/node-arq:$1 

	rm -R dist
	
	rm -R node_modules

else
	echo "Se debe ingresar el tag de la imagen que desea deployar."
fi


