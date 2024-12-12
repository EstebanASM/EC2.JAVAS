const express = require('express');
const os = require('os'); // Módulo para obtener información de la red

const app = express();
const port = 80;

// Función para obtener la dirección IP de la red local
function getLocalIPAddress() {
  const networkInterfaces = os.networkInterfaces();
  let ipAddress = 'Not found';

  for (let interfaceName in networkInterfaces) {
    for (let iface of networkInterfaces[interfaceName]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        ipAddress = iface.address;
        return ipAddress;
    }
  }
  return ipAddress;
}

// Endpoint principal
app.get('/', (req, res) => {
  const ipAddress = getLocalIPAddress();
  res.send(`Hello, I am Esteban Sillo and this is a distributed programming duty 88888888888888888888888888888888888888888888888.<br>Your IP address is: <b>${ipAddress}</b>`);
});

// Escuchar en todas las interfaces de red
app.listen(port, '0.0.0.0', () => {
  const ipAddress = getLocalIPAddress();
  console.log(`Servidor escuchando en http://${ipAddress}:${port}`);
});
