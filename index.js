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

// habilitar template pug
app.set('view engine', 'pug');
app.set('views', './views');

// carpeta publica
app.use( express.static('public') );

// Routing
app.use('/auth', usuarioRouter);
