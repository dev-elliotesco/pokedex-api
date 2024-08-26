# Pokedex API

## Descripción
Este es un servicio de Pokédex desarrollado con NestJS y TypeScript. Este servicio se encarga de la gestión de Pokémon, incluyendo operaciones como la creación, actualización, eliminación y consulta de Pokémon.


## Requisitos & Tecnologías
- [Node.js](https://nodejs.org/) (versión 14 o superior)
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
docker-compose up -d
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