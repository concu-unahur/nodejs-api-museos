const superagent = require('superagent');

superagent
  .get('https://www.cultura.gob.ar/api/v2.0/museos')
  .query({ format: 'json' })
  .end((err, res) => {
    const cantidad = res.body.count
    const museos = res.body.results

    console.log(`¡Se encontraron ${cantidad} museos!`)
    console.log('El primero es', museos[0])
  })


// Consignas
// 1. Escribir a un archivo.
// 2. Buscar latitud y longitud y luego escribir a un archivo.
// 3. Idem, con promises.
