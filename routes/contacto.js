const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contacto', { titulo: 'Contáctenos - ChillDrive' });
});

router.post('/', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  console.log(`Mensaje de ${nombre} (${email}): ${mensaje}`);
  res.redirect('/contacto/confirmacion');
});

router.get('/confirmacion', (req, res) => {
  res.render('confirmacion', { titulo: 'Confirmación - ChillDrive' });
});

module.exports = router;