// const express = require('express'); // CommonJS
import express from 'express'; // ES Modules
import usuarioRouter from './routes/usuario.route.js';

// Crear la app
const app = express();
// Definir un puerto
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});

// Routing
app.use('/', usuarioRouter);
