# Pokedex API

## Descripción
Este es un servicio de Pokédex desarrollado con NestJS y TypeScript. Este servicio se encarga de la gestión de Pokémon, incluyendo operaciones como la creación, actualización, eliminación y consulta de Pokémon.


## Requisitos & Tecnologías
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

## Instalación
Pasos para clonar el proyecto e instalar  las dependencias.

```bash
# Clona este repositorio
git clone https://github.com/dev-elliotesco/pokedex-api.git

# Entra en el directorio del proyecto
cd pokedex-api

# Instala las dependencias
npm install

# Compila el proyecto
npm run build

```

## Configuración

Antes de ejecutar el proyecto, debes configurar la URL de la base de datos MongoDB, el nombre de la base de datos y el puerto como variables de entorno. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

- `MONGO_DB`: La URL de tu base de datos. Por ejemplo, `mongodb://localhost:27017`.
- `MONGO_DB_NAME`: El nombre de tu base de datos. Por ejemplo, `pokedex_db`.
- `PORT`:  El puerto en el que se ejecutará el servidor. Por ejemplo, `3000`.

## Uso

Pasos para ejecutar el proyecto:

#### Localmente:

```bash
# Inicia el servidor
npm run start:dev
```

#### Docker Compose:

```bash
# Entra en el directorio deployment
cd deployment

# Ejecuta Docker Compose
docker compose --env-file ../.env up
```

Para cargar datos en la base de datos, puedes utilizar el siguiente endpoint:

```
GET /api/seed
```
Este endpoint permite cargar datos de Pokémon en la base de datos.

Ejemplo de solicitud:

```
curl -X GET http://localhost:3000/api/seed
```

Este comando ```curl``` enviará una solicitud GET al endpoint para cargar los datos de Pokémon en la base de datos.

## Autor
- Elliot Escovicth Riaño - [Github](https://github.com/dev-elliotesco)
- [LinkedIn](https://https://www.linkedin.com/in/elliot-escovitch-580007205/)
- Correo electrónico: eescovitchr@gmail.com