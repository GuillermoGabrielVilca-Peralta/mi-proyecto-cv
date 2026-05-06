const express = require('express');
const path = require('path');

const app = express();

// 🔥 IMPORTANTE PARA RENDER
const PORT = process.env.PORT || 3000;

// Vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Rutas (SOLO require, sin import)
app.use('/', require('./routes/index'));
app.use('/nosotros', require('./routes/nosotros'));
app.use('/servicios', require('./routes/servicios'));
app.use('/clientes', require('./routes/clientes'));
app.use('/contacto', require('./routes/contacto'));
app.use('/admin', require('./routes/admin'));

// 404
app.use((req, res) => {
  res.status(404).render("404");
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});