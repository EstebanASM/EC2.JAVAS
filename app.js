const express = require('express');
const os = require('os');  // Módulo para obtener información de la red
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, I am Esteban and this is a distributed programming duty 26/11');
});

// Escuchar en todas las interfaces de red
app.listen(port, '0.0.0.0', () => {
  const networkInterfaces = os.networkInterfaces();
  let ipAddress = 'Not found';

  // Buscar la dirección IPv4 (la IP de la red local)
  for (let interfaceName in networkInterfaces) {
    for (let iface of networkInterfaces[interfaceName]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        ipAddress = iface.address;
        break;
      }
    }
  }

  console.log(`Servidor escuchando en http://${ipAddress}:${port}`);
});
