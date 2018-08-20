 # CV-CATALOGO
  
## Subir la imagen al docker local

Ejectutar el siguiente script parados en la carpeta del proyecto
 
		sh docker-deploy-local.sh <tag>

Ejemplo: 
		
		sh docker-deploy-local.sh 1.0.0

Esto genera una imagen local en localhost:8888 (asegurarse de tener libre el puerto). 

## Subir la imagen a Docker Hub interno

Luego de correr el script anterior para generar una imagen local, ejecutar lo siguiente para que se suba la imagen al repo interno. 

		sh docker-push.sh <tag> <user> <password>

*ACLARACION*: Usar usuario y password registrados en el Docker Hub interno.

Ejemplo:
		
		sh docker-push.sh 1.0.0 juan 12345

Esto sube la nueva imagen con el tag asignado como latest. 

## Comando de run para correr el container en los distintos ambientes

Una vez subida la imagen al Docker Hub interno correr el siguiente script en el ambiente correspondiente.

		docker run -d -p 8888:8888 --name cv-catalogo -v "$PWD":/usr/src/app -w /usr/src/app sr-docker-xp01.corp.cablevision.com.ar/cv-catalogo:<tag> node server.js

Ejemplo:

        docker run -d -p 8888:8888 --name cv-catalogo -v "$PWD":/usr/src/app -w /usr/src/app sr-docker-xp01.corp.cablevision.com.ar:5000/cv-catalogo:$1 node server.js
        
        
## RUN para cada ambiente 

Desa:

		docker run -d -p 8888:8888 --name cv-catalogo -v /usr/app -w /usr/app -e "user=root" -e "password=bssdigital" -e "host=sr-docker-xd02.corp.cablevision.com.ar" -e "port=3300" -e "atg=sr-atgf2-at01.corp.cablevision.com.ar" --dns=192.168.185.140 --dns-search=corp.cablevision.com.ar --dns-search=sr-atgf2-at01.corp.cablevision.com.ar --dns=192.168.218.232 --dns=192.168.182.46 --dns=192.168.5.11 --dns=8.8.8.8 --dns-search=sr-docker-xd02.corp.cablevision.com.ar sr-docker-xp01.corp.cablevision.com.ar/cv-catalogo:[tag]
		
Test:

		docker run -d -p 8888:8888 --name cv-catalogo -v /usr/app -w /usr/app -e "user=root" -e "password=bssdigital" -e "host=sr-docker-xt01.corp.cablevision.com.ar" -e "port=3000" -e "atg=sr-atgf2-at01.corp.cablevision.com.ar" --dns=192.168.185.140 --dns-search=corp.cablevision.com.ar --dns-search=sr-atgf2-at01.corp.cablevision.com.ar --dns=192.168.218.232 --dns=192.168.182.46 --dns=192.168.5.11 --dns=8.8.8.8 --dns-search=sr-docker-xt01.corp.cablevision.com.ar sr-docker-xp01.corp.cablevision.com.ar/cv-catalogo:[tag]
		
Homo:


		docker run -d -p 8888:8888 --name cv-catalogo -v /usr/app -w /usr/app -e "user=root" -e "password=bssdigital" -e "host=sr-docker-xd02.corp.cablevision.com.ar" -e "port=3300" -e "atg=sr-atgdig-ah01.corp.cablevision.com.ar" --dns=192.168.185.140 --dns-search=corp.cablevision.com.ar --dns-search= --dns=192.168.218.232 --dns=192.168.182.46 --dns=192.168.5.11 --dns=8.8.8.8 --dns-search=sr-docker-xh01.corp.cablevision.com.ar sr-docker-xp01.corp.cablevision.com.ar/cv-catalogo:[tag]
		
