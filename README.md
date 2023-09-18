# comprasbitcoin

Un proyecto nacido en La Crypta

Current version: `v0.0.7`

## roadmap

v0.1 -> mapa villero tosco, pero con la data. mvp crudoli
v0.2 -> hacerlo denuevo pero bien | refinamiento, con cosas updateadas. revisar librerias y node modules, tratar de uptadear cosas.
v0.3 -> emebellecer un poco la villerada

en las 0.x los datos son subidos manualmente en un json

v.1.0 -> se deja de usar el json y se piensa en una base de datos y un front end para que la gente sume su propio dato.

v.?.0 -> hasta donde llegare (...un misil en mi placard, soda stereo)

fin del roadmap -> gira por todos los negocios a ponernos en pedo como nunca.

### Para hacer algun día o "FEATURE REQUESTS"

- "excelente!, agregaria que la gente pueda valorar (ademas con estrellitas con zaps??)" - bitpanter {sobre este comentario, haria falta una implementacion de tipo nostr, y que el review se ejecute como una nostr note.. y eso si que seria un flash}
- Crear un sistema de poder activar o desactivar un punto en el mapa, solo activable o desactivable por el negocio, usando una key de nostr. Tal vez aca pueda estar el valor agregado especial unico, la coneccion a travez de un relay de nostr.
- Crear un "selector de provincias" que no es mas que mover el zoom del mapa hacia el centro de cada provincia.
- En su consecuente crear un "selector de ciudad" idem arriba, una vez que ya elegiste la provincia, el selector podria cambiar. o si es un punto abajo, podria haber otro punto al lado que aparece, dejando a la izq el punto de provincia cerrado. onda una cosa asi: O-o-o-o-o-o- ... o o | 0 0. esta bueno que sean puntos asi es facil tocar c el dedo. en ciudades, se puede poner un punto de "navegar libre" por defecto
- en algun momento agregar un boton flotante en el mapa "about us" o algo asi donde aparecen los colaboradores de la crypta que ayudaron a developear y|o promover el proyecto.
- meter elementos de fileteo en el diseño de la web tarde o temprano.
- evaluar recomendaciones de diseño de jona entre la 0.0.6 y 0.0.7 y repasar https://btcmap.org/
- para agregar sitios: 1000 sat por sitio y concurso mensual de 20k sats por cada persona con ln que registre sitio nuevo. voy a tener que agregar datos de persona que agrega? poner opcion anonimo o dejar el email de contacto. esto solo cuando este lista la 2da etapa, con agregado de sitios por users.

## Changelog

| `v0.0.7` ->                   | Actualización                                                                                                                                |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Link al telegram de cyberpunk | Agregado del link en el footer https://t.me/+kTrnxYGIwKY2YWVh y reducción de texto en links de footer. (se me esta quedando chico el footer) |

| Sitios agregados

- Tequerock
- Contadores ARG
- Venestore
- Peluquería Esteve

---

`v0.0.6` -> gregado de un boton a la direccion (cuando hay) para que te lleve al google maps ( y gps). o hacer de la direccion un boton. pensarlo. Agregado el numero de negocios registrados.

`v0.0.5` -> propina ln al negocio cuando tenga lnaddress disponible, con un click. Agregar el icono de nostr a redes sociales. Agregado link para llenar el formulario google forms y agregar una direccion. Agregado lista de colaboradores en el readme. Shawarma Mwafi agregado. Libro sustentable agregado.

`v0.0.4.2` -> Agregar propina al creador de la web. agregar caracas bar. Agregado espacio para direcciones.

`v0.0.4` -> Pulido del sidebar. remove lo innecesario y agregado de emojis, opcion true | false para opciones de pago y agregado de social networks y formas de contacto. agregado en el footer formas de darnos nuevos negocios (entrar al discord de la crypta)

`v0.0.3` -> agregado de peluqueria de mandoza, expansion del json , y aclaracion en el sidebar.

`v0.0.2` -> sidebar now stays open when clicking on other popup location marker.

`v0.0.1` -> it just works

## Lista de colaboradores y sus aportes

### Mes de Septiembre 2023

- naranja: nombre del sitio
- cyberpunk: direcciones + ideas diseño
- rapax: ayuda p mejorar forms
- jona: direcciones + ideas diseño
- fer: ideas/ayuda back
- negr0: tester + direcciones + ideas diseño
- bitpanter: ideas diseño
- ruth: ideas diseño
- tincho: direcciones + ideas diseño
- extraterrestre: me copie parte de su codigo para lnurl
