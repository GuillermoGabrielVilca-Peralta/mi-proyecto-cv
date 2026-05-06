const express = require('express');
const router = express.Router();

// Simulación de flota
let flota = [
  { id: 1, vehiculo: 'Van 01', conductor: 'Juan', estado: 'Disponible' },
  { id: 2, vehiculo: 'Camión 02', conductor: 'María', estado: 'En ruta' },
  { id: 3, vehiculo: 'Auto 03', conductor: 'Carlos', estado: 'Mantenimiento' },
];

// Mostrar panel de control
router.get('/', (req, res) => {
  res.render('admin', { titulo: 'Panel de Control - Admin', flota });
});

// Cambiar estado de vehículo
router.post('/update', (req, res) => {
  const { id, estado } = req.body;
  const vehiculo = flota.find(v => v.id == id);
  if (vehiculo) vehiculo.estado = estado;
  res.redirect('/admin');
});

module.exports = router;