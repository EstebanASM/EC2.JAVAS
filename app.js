const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, I am Esteban and this is a distributed programming duty');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
