const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const clientes = [
    { nombre: 'Cliente A', descripcion: 'Cliente premium' },
    { nombre: 'Cliente B', descripcion: 'Cliente frecuente' },
    { nombre: 'Cliente C', descripcion: 'Cliente corporativo' },
  ];
  res.render('clientes', { titulo: 'Clientes - ChillDrive', clientes });
});

module.exports = router;