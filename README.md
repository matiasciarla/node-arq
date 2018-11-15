
 
## Pre requisitos 

Tener instalado:
- npm (v5.6.0)
- node (v8.9.4)
- docker (17.05.0-ce)
- python3 (3.5)

## Iniciar proyecto

Correr comandos de instalacion de dependencias cuando se clona el repositorio por primera ves o cuando se actualice alguna dependencia

	npm install
	
## Instanciar localmente

	npm start

  
## Subir la imagen al docker local

Ejectutar el siguiente script parados en la carpeta del proyecto
 
	npm run docker-local -- --tag=<tag>

Ejemplo: 
		
	npm run docker-local -- --tag=1.0.0

Esto genera una imagen local en localhost:8888 (asegurarse de tener libre el puerto). 

## Subir la imagen a Docker Hub

	npm run docker-push -- --tag=<tag>


*ACLARACION*: Durante la ejecución del script se solicitaran usuario y password para loguearse en docker.



        
        

		
