// Importamos el módulo 'http' de Node.js
var http = require("http");

// Creamos el servidor
http.createServer(function(request, response) {

  // Cabecera HTTP: estado 200 (OK) y tipo de contenido HTML
  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

  // Escribimos un documento HTML completo como respuesta
  response.write(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Servidor Node.js</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f3f3f3;
            color: #333;
            text-align: center;
            padding-top: 50px;
          }
          h1 {
            color: purple;
          }
        </style>
      </head>
      <body>
        <h1>¡Hola Mundo desde Node.js!</h1>
        <p>Este es un ejemplo de servidor HTTP sencillo que responde con HTML.</p>
      </body>
    </html>
  `);

  // Cerramos la respuesta
  response.end();

// El servidor escucha en el puerto 8888
}).listen(8888);

console.log("Servidor ejecutándose en http://localhost:8888");
