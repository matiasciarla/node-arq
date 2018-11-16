
 
## Pre requisitos 

Tener instalado los siguientes programas (las versiones utilizadas son con las que usa el proyecto hoy en dia):
- npm (v5.6.0)
- node (v8.9.4)
- docker (17.05.0-ce)
- python3 (3.5)

Este proyecto esta armado para conectarse a bases de datos tanto SQL (en este caso vamos a utilizar MySQL) como a Mongo, puede elegir tener una coneccion a una o ambas bases de datos en simultáneo.
Como ejemplo de como crear o consultar datos de las bases de datos a través de la api, el proyecto cuenta de un servicio de creacion y de consulta tanto para mongo como para SQL.

### Pre requisitos para usar MySQL

- Tener una instancia local o remota MySQL 
- Crear una base de datos con el nombre que desee (este nombre luego debe cargarlo en la creacion del proyecto)
- Correr el script de ejemplo que se encuentra en la ruta server/scripts/create.sql

### Pre requisitos Mongo
- Tener una instancia local o remota
- Crear una base de datos con el nombre que desee (este nombre luego debe cargarlo en la creacion del proyecto)
- Crear una coleccion con el nombre "users"

*NOTA*: El proyecto se va a intentar de conectar con mongo sin user ni password si ya tiene una base de datos segurizada cargue la configuracion en server/database/MongoManager.ts


## Iniciar proyecto

Correr el script de creacion del proyecto

	npm run create

Este comando le preguntara los datos con los que quiere levantar el ambiente. 

*NOTA*: Una vez terminado el script este iniciara el proyecto con los datos ingresados sin posibilidad de retornar al estado inicial, si hay un error en la carga debe modificar el codigo a mano o volver a clonar el repo 

Una vez que se inicializan las variables correr comando de instalacion de dependencias

	npm install
	
## Instanciar localmente

Para levantar el proyecto de manera local ejecute el siguiente comado:

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
      
## Consumo de request de ejemplo 

- Crea Clientes (SQL): 
URL: http://localhost:8888/api/clients
TIPO REQUEST: POST
BODY: {	"first_name": "first name", "last_name": "last name"}

- Consultar Clientes (SQL):
URL: http://localhost:8888/api/clients
TIPO REQUEST: GET

- Crear Usuarios (Mongo):
URL: http://localhost:8888/api/users
TIPO REQUEST: POST
BODY: {	"first_name": "first name", "last_name": "last name"}

- Consultar Usuarios (Mongo):
URL: http://localhost:8888/api/users
TIPO REQUEST: GET
		
