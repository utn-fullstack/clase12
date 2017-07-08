# Relay Fragment Container

Empezamos a ver la estructura de una aplicacion Relay Modern. Nuestro stack completo esta compuesto en el backend por un servidor Express/Graphql que usa MongoDB como database a travez del servicio cloud mLab. En el frontend: React, Relay Modern, React Router y React Bootstrap.

Vimos tambien el uso del componente FragmentContainer de relay y su relacion con QueryRenderer visto en la clase 11.

## Correr servidor localmente

```
cd graphql-server
```
```
npm install
```
```
DBUSER=xxxxxx DBPSW=xxxxxx npm start
```

## Correr cliente localmente

1- En caso de no tener Watchman instalado, start.sh levantara un Docker container con un shell para trabajar en el proyecto:

```
cd relay-client
```
```
bash start.sh
```

Una vez adentro del container:

```
yarn install
```
```
yarn start
```

2- Si ya tenes instalado Watchman en tu host, podes iniciar normalmente la app usando npm (o yarn)

```
npm install
```
```
npm start
```

## Links utiles

### Documentacion oficial Relay Modern

- https://facebook.github.io/relay/docs/relay-modern.html

### Relay QueryRenderer

https://facebook.github.io/relay/docs/query-renderer.html

### Relay FragmentContainer

https://facebook.github.io/relay/docs/fragment-container.html

### Tools para implementacion de un server GraphQL compatible con Relay

- https://github.com/graphql/graphql-relay-js

### Watchman

- https://facebook.github.io/watchman/

