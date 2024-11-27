const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, I am Esteban and this is a distributed programming duty 26/11/2024');
});

// Escuchar en todas las interfaces de red
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${port}`);
});
