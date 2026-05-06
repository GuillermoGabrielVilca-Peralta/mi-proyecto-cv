const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { titulo: 'Inicio - ChillDrive' });
});

module.exports = router;