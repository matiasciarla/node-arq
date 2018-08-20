#!/bin/bash
## Script para subir una imagen al Docker Hub interno

if [ $# = 1 ] ; then

	docker login repo-hub

	if [ ! -z $(docker images -q repo-hub/node-arq:$1) ]; then

		docker push repo-hub/node-arq:$1
		docker push repo-hub/node-arq:latest

	else 
		
		echo "No existe una imagen local con el tag asignado"
	
	fi

else
	echo "Se debe ingresar el tag de la imagen que desea subir"
fi


