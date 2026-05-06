const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const servicios = [
    { nombre: 'Transporte rápido', descripcion: 'Entrega en menos de 24h', imagen: '/images/aqp1.jpg' },
    { nombre: 'Rutas personalizadas', descripcion: 'Planificación según necesidad', imagen: '/images/aqp2.jpg' },
    { nombre: 'Seguridad garantizada', descripcion: 'Control total de la flota', imagen: '/images/aqp3.jpg' },
  ];
  res.render('servicios', { titulo: 'Servicios - ChillDrive', servicios });
});

module.exports = router;