/*
// Usando ES5 (en aplicaciones Node es preferible siempre usar let y const en vez de var)
const express = require('express');
const app = express();

app.use(express.static('logica')); //<- la carpeta 'public' debe estar en el directorio raíz de la aplicación (el directorio que contiene a index.js)
app.get('/', (req, res, next) => { //como buena práctica siempre incluye el objeto 'next'
    console.log(req.url);
    res.render('inicio.html'); // <- como no se especifica el 'engine' se debe colocar la extensión del archivo que se envía para renderizar en el navegador
});
app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});
*/

// const path = require('path');
// const express = require('express');
// const config = {
//   ENV: process.env.NODE_ENV || 'development',
//   PORT: process.env.PORT || 3000
// }
// const routes = (router) => {
//   // router.route('/getfile')
//   //   .get((req,res,next) => {
//   //     const sendOptions = {
//   //       root: rootSendPath,
//   //       headers: {
//   //         'x-timestamp': Date.now(),
//   //         'x-sent': true
//   //       }
//   //     }
//   //     res.sendFile('js/getIP.js', sendOptions);
//   //   });

//   router.route('/')
//     .get((req, res, next) => {
//       res.render('inicio.html', {pageTitle: 'Index page', title: 'The index page'});
//     });
//   return router;
// }

// const app = server;

// app.listen(config.PORT, () => {
//   console.log('Server started');
// });

// const server = () => {
//     const viewsPath = path.join(__dirname, '../views');
//     const publicPath = path.join(__dirname, '../logica');
//     const app = express();
//     const router = express.Router();
//     app.use(express.json());
//     app.use(express.urlencoded({
//       extended: true
//     }));
//     app.set('views', viewsPath);
//     app.use(express.static(publicPath));
//     app.use(routes(router));
//     return app;
//   }

const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
  const args = process.argv.slice(2);
  const postCode = args[0] || 2000;
  const url = `https://www.domain.com.au/rent/?postcode=${postCode}&excludedeposittaken=1`;
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const noOfProperties = $('h1>strong').text();
    console.log(`${noOfProperties} are open for rent in ${postCode} postcode of Australia on Domain`);
  } catch (e) {
    console.error(`Error while fetching rental properties for ${postCode} - ${e.message}`);
  }
})();





 







