<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecturar en desarrollo

1. Clonar el repositorio
2. Ejecturar
```
yarn install
```
3. Tener Nest CLI instalado 
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d

```

5. Clonar el archivo __.env.template__ y renonmbrar la copia a __.env__

6. Llenar las vartiables de entorno deifnidas en el __.env__

7. EJecutar la aplicacion en dev:
```
yarn start:dev
```

8. Reconstruir la BD con la semilla 
```
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* Nest 
