const express = require('express');
const app = express();
const PORT = 3000;  // Este puerto será mapeado en Docker

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación en Express!');
});

// Ruta /clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { id: 1, nombre: 'Cliente 1' },
    { id: 2, nombre: 'Cliente 2' },
    { id: 3, nombre: 'Cliente 3' }
  ];
  res.json(clientes);
});

// Ruta /productos
app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' }
  ];
  res.json(productos);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
