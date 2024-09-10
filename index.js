const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Node.js y Express!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
