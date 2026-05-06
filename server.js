const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middlewar
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/', require('./routes/index'));
app.use('/nosotros', require('./routes/nosotros'));
app.use('/servicios', require('./routes/servicios'));
app.use('/clientes', require('./routes/clientes'));
app.use('/contacto', require('./routes/contacto'));
app.use('/admin', require('./routes/admin'));

// Servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

app.use((req, res) => {
  res.status(404).render("404");
});

// Tus rutas actuales
import indexRoutes from "./routes/index.js";
// ... otras

// Nuevas rutas de auth
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

// ... middlewares (express.json, etc)

app.use("/", indexRoutes); // Tus rutas de EJS
app.use("/api/auth", authRoutes); // API de login/registro
app.use("/api/test", userRoutes); // API protegida por roles