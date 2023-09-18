# comprasbitcoin

Un proyecto nacido en La Crypta

Current version: `v0.0.7`

## roadmap

`v0.1` -> mapa tosco, pero que funciona y tiene sitios válidos. mvp crudoli. `Estamos en esta fase.` (en las v0.1.x los datos son subidos manualmente en un json). ReactJS

v0.2 -> el usuario puede agregar sus sitios. NextJS + MongoDB

v0.3 -> embellecer un poco la villerada

v.?.0 -> hasta donde llegare (...un misil en mi placard, soda stereo)

fin del roadmap -> gira por todos los bares con ⚡LN⚡ a ponernos en pedo como nunca.

### Para hacer algun día o "FEATURE REQUESTS"

- "excelente!, agregaria que la gente pueda valorar (ademas con estrellitas con zaps??)" - bitpanter {sobre este comentario, haria falta una implementacion de tipo nostr, y que el review se ejecute como una nostr note.. y eso si que seria un flash}
- Crear un sistema de poder activar o desactivar un punto en el mapa, solo activable o desactivable por el negocio, usando una key de nostr. Tal vez aca pueda estar el valor agregado especial unico, la coneccion a travez de un relay de nostr.
- Crear un "selector de provincias" que no es mas que mover el zoom del mapa hacia el centro de cada provincia.
- En su consecuente crear un "selector de ciudad" idem arriba, una vez que ya elegiste la provincia, el selector podria cambiar. o si es un punto abajo, podria haber otro punto al lado que aparece, dejando a la izq el punto de provincia cerrado. onda una cosa asi: O-o-o-o-o-o- ... o o | 0 0. esta bueno que sean puntos asi es facil tocar c el dedo. en ciudades, se puede poner un punto de "navegar libre" por defecto
- en algun momento agregar un boton flotante en el mapa "about us" o algo asi donde aparecen los colaboradores de la crypta que ayudaron a developear y|o promover el proyecto.
- meter elementos de fileteo en el diseño de la web tarde o temprano.
- evaluar recomendaciones de diseño de jona entre la 0.0.6 y 0.0.7 y repasar https://btcmap.org/
- para agregar sitios: 1000 sat por sitio y concurso mensual de 20k sats por cada persona con ln que registre sitio nuevo. voy a tener que agregar datos de persona que agrega? poner opcion anonimo o dejar el email de contacto. esto solo cuando este lista la 2da etapa, con agregado de sitios por users.
- configurar los redireccionamientos de los sitios .ar todos al mismo.
- revisar lo de forzar https, por alguna razon a veces entra solo en http:
- cloudflare? mm
- nextJS + mongoDB + Vercel para fase 2 luego tb autNext
- Fer — Today at 2:45 PM
  @JP 🧙🎓🤿🐺 una sugerencia para el sitio, es que los locales tengan "categorías"
  y que en alguna zona de la web (puede ser en el navbar) que diga explorar categorias ponele
  o si no una side-bar que tenga filtros. para que, por ejemplo, si queres buscar BARES/RESTAURANTES puedas hacerlo. porque ahora tenes que ir apretando uno por uno para saber qué es. JP 🧙🎓🤿🐺 — Today at 2:52 PM. Claro, tener iconos distintos puede servir para eso por ahora. pero seria clave poner un tipo de visualizacion. , Que categorias y subcategorias,

Comidas
Comida | Restaurant | Bar

Estetica:
Peluqueria | Tatoos | Otros

Servicios Profesionales:
Legales | Contadores | Otros

Ir de compras
Bazar | Ropa | Supermercado

Hoteles

## Changelog

| `v0.0.8` ->     | Arreglo de Bugs                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| Feature         | Al hacer zoom out en el mapa, que los puntos se agrupen.                                                       |
| Arreglo de Bugs | cuando abris un local para ver su info, abajo del footer aparece de forma "fantasma" el titulo del comercio 👀 |
| Arreglo de Bugs | si achicas todo el icono del gps de google map se hace infinitamente chico                                     |

| Sitios agregados

- Las 3 sucursales de Nissan que aceptan bitcoin y usdt
- Dity beer urquiza?

---

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
- cyberpunk: direcciones + ideas diseño + categorias
- rapax: ayuda p mejorar forms
- jona: direcciones + ideas diseño
- fer: ideas/ayuda + ideas back + ayuda etapa 2, categorias
- negr0: tester + direcciones + ideas diseño
- bitpanter: ideas diseño
- ruth: ideas diseño
- tincho: direcciones + ideas diseño + ideas back
- extraterrestre: me copie parte de su codigo para lnurl
