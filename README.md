# Interactuando con una API remota

## Instalación

Ejecutar esto dentro del repositorio:

```
nvm install
npm install
```

Si algo ahí no funciona, seguir las instrucciones que se encuentran en el repo [nodejs-primeros-pasos](https://github.com/concu-unahur/nodejs-primeros-pasos).

## Consignas

### Museos

Escribir los resultados de la request en un archivo llamado `museos.txt`. Debe haber una línea por cada museo, con este formato: `NOMBRE (DIRECCION). Por cualquier consulta comunicarse al TELEFONO`. 

Por ejemplo: 

```
Complejo Histórico Cultural Manzana de las Luces (Perú 222, Ciudad de Buenos Aires). Por cualquier consulta comunicarse al +54 (011) 4342-9930 / 6973
```

Para escribir un archivo tienen dos opciones:
* `fs.writeFile`, que borra todo el contenido
* o `fs.appendFile`, que agrega al final de lo que hay.

Ejemplo con `writeFile`:

```js
const fs = require('fs');

// Solo un ejemplo de que en el contenido puede ir cualquier cosa.
const hoy = new Date();

// El callback solo tiene un parámetro: el posible error, no devuelve nada más.
fs.writeFile('saludo.txt', `Hoy es ${hoy.toDateString()}. ¿Todo bien?`, (error) => {
  if (error) {
    throw error;
  }
  
  console.log('Se escribió tu archivo correctamente');
});
```

### Organismos

Agregar al programa la capacidad de bajar, además de los museos, los organismos. Estos se obtienen desde el endpoint `https://www.cultura.gob.ar/api/v2.0/organismos`.

Generar un archivo llamado `organismos.txt`, con el mismo formato utilizado para los museos pero anteponiendo el texto `Organismo: `.

Por ejemplo:

```
Organismo: Dirección de Relaciones Institucionales (Alvear 1690). Por cualquier consulta comunicarse al (011) 4129-2400
```

### Variantes

Copiá tu programa y modificalo para cumplir con cada una de estas variantes:

1. Escribir museos y organismos en un solo archivo, primero todos los museos y luego todos los organismos.
1. Idem anterior pero al revés: primero organismos y luego museos.
1. Escribir en el mismo archivo usando `appendFile`, pero "en paralelo". ¿Cambia el resultado si ejecutamos el programa varias veces?
1. Hacer que las variantes anteriores impriman por pantalla los siguientes mensajes (en el momento que corresponda):
  * `'descargando museos'`
  * `'descargando organismos'`
  * `'escribiendo museo en archivo'`
  * `'escribiendo organismo en archivo'`
  * `'ejecución finalizada'` - asegurarse de que este es el ultimo mensaje.
